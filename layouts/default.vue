<template>
  <div>
    <div v-if="$device.isMobile">
      <h1>hamburger menu here</h1>
    </div>
    <div v-else>
      <header class="shadow-sm mx-auto px-4 flex items-center justify-between">
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

    <footer class="mx-auto px-4 flex items-center justify-between border-t-2">
      <nuxt-link to="/" class="font-bold">
        <nuxt-icon v-if="themeStore.isDarkTheme" name="logo-text-dark" filled />
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
</template>

<script setup>
import { useThemeStore } from "../stores/themeStore";

const themeStore = useThemeStore();
</script>

<style scooped>
.nuxt-icon svg {
  font-size: 2em;
  margin-bottom: 0;
  object-fit: fill;
  width: fit-content;
}
</style>
