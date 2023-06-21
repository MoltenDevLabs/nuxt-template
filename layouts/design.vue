<template>
  <div>
    <header class="shadow-sm bg-secondary-50">
      <nav class="container mx-auto p-4 flex items-center justify-between">
        <nuxt-link to="/" class="">
          <nuxt-icon v-if="themeStore.isDarkTheme" name="logo-text-dark" filled />
          <nuxt-icon v-else name="logo-text-light" filled />
        </nuxt-link>
        <div class="flex gap-4 items-center">
        <ul class="flex gap-4">
          <li><nuxt-link to="/design/palette">Palette</nuxt-link></li>
          <li><nuxt-link to="/design/typography">Trypography</nuxt-link></li>
          <li><nuxt-link to="/design" class="btn">Design</nuxt-link></li>
        </ul>
        <button class="flex"
            @click="themeStore.toggleTheme()"
          >
            <i
              v-if="themeStore.isDarkTheme"
              class="material-icons-outlined text-surface-900"
              >light_mode</i
            >
            <i v-else class="material-icons-outlined text-surface-900">dark_mode</i>
          </button>
      </div>
      </nav>
    </header>

    <!-- Here starts the page content -->
    <div class="container mx-auto p-4">
      <slot />
    </div>
    <!-- Here ends the page content -->

    <footer class="bg-secondary-50">
      <nav class="container mx-auto p-4 flex items-center justify-between border-t-2">
        <nuxt-link to="/" class="">
          <nuxt-icon v-if="themeStore.isDarkTheme" name="logo-text-dark" filled />
          <nuxt-icon v-else name="logo-text-light" filled />
        </nuxt-link>
        <ul class="flex gap-4">
          <li><nuxt-link to="/design/palette">Palette</nuxt-link></li>
          <li><nuxt-link to="/design/typography">Trypography</nuxt-link></li>
          <li><nuxt-link to="/design" class="btn">Design</nuxt-link></li>
        </ul>
      </nav>
    </footer>
  </div>
</template>

<script setup>
import { useThemeStore } from '../stores/themeStore';

const themeStore = useThemeStore();
</script>

<style scooped></style>
