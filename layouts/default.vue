<template>
  <div>
    <header class="shadow-sm bg-white dark:bg-stone-800">
      <nav class="container mx-auto p-4 flex items-center justify-between">
        <nuxt-link to="/" class="">
          <nuxt-icon name="logo-text-light" filled />
        </nuxt-link>
        <div class="flex gap-4 items-center">
          <ul class="flex gap-4">
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li><nuxt-link to="/about">About</nuxt-link></li>
            <li><nuxt-link to="/contact">Contact</nuxt-link></li>
            <li><nuxt-link to="/design" class="btn">Design</nuxt-link></li>
          </ul>
          <button
            @click="
              toggleDarkMode(
                $colorMode.preference === 'dark' ? 'light' : 'dark'
              )
            "
          >
            <i
              v-if="$colorMode.preference === 'dark'"
              class="material-symbols-outlined"
              >light_mode</i
            >
            <i v-else class="material-symbols-outlined">dark_mode</i>
          </button>
        </div>
      </nav>
    </header>

    <!-- Here starts the page content -->
    <div class="container mx-auto p-4">
      <slot />
    </div>
    <!-- Here ends the page content -->

    <footer class="">
      <nav
        class="container mx-auto p-4 flex items-center justify-between border-t-2"
      >
        <nuxt-link to="/" class="font-bold">
          <nuxt-icon name="logo-text-light" filled />
        </nuxt-link>
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
function toggleDarkMode(theme) {
  useColorMode().preference = theme
}

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

// Whenever the user explicitly chooses light mode
localStorage.theme = 'light'

// Whenever the user explicitly chooses dark mode
localStorage.theme = 'dark'

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem('theme')
</script>

<style scooped>
.nuxt-icon svg {
  font-size: 2em;
  margin-bottom: 0;
  object-fit: fill;
  width: fit-content;
}
</style>
