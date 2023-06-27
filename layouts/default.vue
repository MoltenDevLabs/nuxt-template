<template>
  <div>
    <header
      v-if="navMenu"
      class="absolute top-[72px] min-w-full z-10 overflow-hidden transition-all ease-out duration-500"
      :class="navMenu ? 'max-h-[300px]' : 'max-h-0'"
    >
      <ul class="flex flex-col items-center p-0 duration-300 ease-out">
        <li><nuxt-link to="/" @click="toggleMenu">Home</nuxt-link></li>
        <li>
          <nuxt-link to="/about" @click="toggleMenu">About</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact" @click="toggleMenu">Contact</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/design" @click="toggleMenu" class="btn"
            >Design</nuxt-link
          >
        </li>
      </ul>
    </header>

    <div v-if="$device.isMobile">
      <header class="mx-auto px-8 flex items-center justify-between">
        <nuxt-link to="/" @click="navMenu = false">
          <nuxt-icon name="logo" filled />
        </nuxt-link>
        <ul>
          <button @click="toggleMenu" class="btn flex items-center p-1">
            <i class="material-icons-outlined">{{
              navMenu ? "close" : "menu"
            }}</i>
          </button>
        </ul>
      </header>
    </div>

    <div v-else>
      <header class="mx-auto px-4 flex items-center justify-between">
        <nuxt-link to="/" class="">
          <nuxt-icon
            v-if="themeStore.isDarkTheme"
            name="logo-text-dark"
            filled
          />
          <nuxt-icon v-else name="logo-text-light" filled />
        </nuxt-link>
        <nav class="flex gap-4 items-center">
          <ul class="flex gap-4">
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li><nuxt-link to="/about">About</nuxt-link></li>
            <li><nuxt-link to="/contact">Contact</nuxt-link></li>
            <li><nuxt-link to="/design" class="btn">Design</nuxt-link></li>
          </ul>
          <button class="flex" @click="themeStore.toggleTheme()">
            <i
              v-if="themeStore.isDarkTheme"
              class="material-icons-outlined text-surface-900"
              >light_mode</i
            >
            <i v-else class="material-icons-outlined text-surface-900"
              >dark_mode</i
            >
          </button>
        </nav>
      </header>
    </div>

    <!-- Here starts the page content -->
    <main
      class="prose prose-stone dark:prose-invert md:prose-lg lg:prose-xl container mx-auto p-4"
    >
      <slot />
    </main>
    <!-- Here ends the page content -->

    <div v-if="$device.isMobile">
      <footer
        class="mx-auto px-4 flex flex-col items-center justify-between border-t-2"
      >
        <nuxt-link to="/" class="font-bold">
          <nuxt-icon
            v-if="themeStore.isDarkTheme"
            name="logo-text-dark"
            filled
          />
          <nuxt-icon v-else name="logo-text-light" filled />
        </nuxt-link>
        <nav>
          <ul class="flex flex-col gap-4">
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li><nuxt-link to="/about">About</nuxt-link></li>
            <li><nuxt-link to="/contact">Contact</nuxt-link></li>
            <li><nuxt-link to="/design" class="btn">Design</nuxt-link></li>
          </ul>
        </nav>
      </footer>
    </div>

    <div v-else>
      <footer class="mx-auto px-4 flex items-center justify-between border-t-2">
        <nuxt-link to="/" class="font-bold">
          <nuxt-icon
            v-if="themeStore.isDarkTheme"
            name="logo-text-dark"
            filled
          />
          <nuxt-icon v-else name="logo-text-light" filled />
        </nuxt-link>
        <nav>
          <ul class="flex gap-4">
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li><nuxt-link to="/about">About</nuxt-link></li>
            <li><nuxt-link to="/contact">Contact</nuxt-link></li>
            <li><nuxt-link to="/design" class="btn">Design</nuxt-link></li>
          </ul>
        </nav>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { useThemeStore } from "../stores/themeStore";
const themeStore = useThemeStore();

const navMenu = ref(false);
const toggleMenu = () => {
  navMenu.value = !navMenu.value;
};
</script>

<style scooped>
.nuxt-icon svg {
  font-size: 2em;
  margin-bottom: 0;
  object-fit: fill;
  width: fit-content;
}
</style>
