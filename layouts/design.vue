<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <nuxt-link to="/" class="font-bold">LOGO</nuxt-link>
        <ul class="flex gap-4">
          <li><nuxt-link to="/design/palette">Palette</nuxt-link></li>
          <li><nuxt-link to="/design/typography">Trypography</nuxt-link></li>
          <li><nuxt-link to="/design" class="btn">Design</nuxt-link></li>
        </ul>
      </nav>
    </header>

    <!-- Here starts the page content -->
    <div class="container mx-auto p-4">
      <slot />
    </div>
    <!-- Here ends the page content -->

    <footer class="">
      <nav class="container mx-auto p-4 flex justify-between border-t-2">
        <nuxt-link to="/" class="font-bold">LOGO</nuxt-link>
        <ul class="flex gap-4">
          <li><nuxt-link to="/design/palette">Palette</nuxt-link></li>
          <li><nuxt-link to="/design/typography">Trypography</nuxt-link></li>
          <li><nuxt-link to="/design">Design</nuxt-link></li>
        </ul>
      </nav>
    </footer>
  </div>
</template>

<style scooped></style>
