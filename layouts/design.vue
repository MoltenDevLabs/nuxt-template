<template>
  <div>
    <!-- HEADER START -->
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
      <header
        class="absolute top-[72px] min-w-full h-0 z-10 overflow-hidden transition-all ease-out duration-500"
        :class="navMenu ? 'h-56 opacity-90' : 'h-0'"
      >
        <ul class="flex flex-col items-center p-0">
          <button class="absolute top-2 right-9 flex" @click="themeStore.toggleTheme()">
            <i
              v-if="themeStore.isDarkTheme"
              class="material-icons-outlined text-surface-900"
              >light_mode</i
            >
            <i v-else class="material-icons-outlined text-surface-900"
              >dark_mode</i
            >
          </button>
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
    <!-- HEADER END -->

    <!-- CONTENT START -->
    <main
      class="prose prose-stone dark:prose-invert md:prose-lg lg:prose-xl container mx-auto p-4"
      :class="navMenu ? 'opacity-50 blur-sm' : ''"
    >
      <slot />
    </main>
    <!-- CONTENT END -->

    <!-- FOOTER START -->
    <div v-if="$device.isMobile">
      <footer class="mx-auto p-6 grid grid-cols-2 gap-4 justify-between border-t-2">
        <div class="col-span-2">
          <nuxt-link to="/" @click="scrollToTop">
            <nuxt-icon
              v-if="themeStore.isDarkTheme"
              name="logo-text-dark"
              filled
            />
            <nuxt-icon v-else name="logo-text-light" filled />
          </nuxt-link>
          <p class="text-xs mb-0">
            Made with
            <span class="material-icons-outlined align-text-bottom">local_fire_department</span>
            in Reus
          </p>
        </div>
        <div class="col-span-1">
          <nav>
            <ul>
              <h6 class="font-bold text-xs mb-2">Check my work</h6>
              <li class="text-xs"><nuxt-link to="/contact">Contact</nuxt-link></li>
              <li class="text-xs"><nuxt-link to="https://github.com/MoltenDevLabs">Github</nuxt-link></li>
              <li class="text-xs"><nuxt-link to="https://www.linkedin.com/in/pol-cadavid-rojas-09572366/">LinkedIn</nuxt-link></li>
            </ul>
            <ul>
              <h6 class="font-bold text-xs mb-2">More links</h6>
              <li class="text-xs"><nuxt-link to="/contact">Contact</nuxt-link></li>
              <li class="text-xs"><nuxt-link to="https://github.com/MoltenDevLabs">Github</nuxt-link></li>
              <li class="text-xs"><nuxt-link to="https://www.linkedin.com/in/pol-cadavid-rojas-09572366/">LinkedIn</nuxt-link></li>
            </ul>
          </nav>
        </div>
        <div class="col-span-1">
          <nav>
            <ul>
              <h6 class="font-bold text-xs mb-2">Other Links</h6>
              <li class="text-xs"><nuxt-link to="/contact">Contact</nuxt-link></li>
            </ul>
            <ul>
              <h6 class="font-bold text-xs mb-2">More links</h6>
              <li class="text-xs"><nuxt-link to="/contact">Contact</nuxt-link></li>
            </ul>
          </nav>
        </div>
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
    <!-- FOOTER END -->
  </div>
</template>

<script setup>
import { useThemeStore } from "../stores/themeStore";
const themeStore = useThemeStore();

const navMenu = ref(false);
const toggleMenu = () => {
  navMenu.value = !navMenu.value;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
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
