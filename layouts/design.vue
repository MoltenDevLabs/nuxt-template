<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <nuxt-link to="/" class="font-bold">LOGO Products Page</nuxt-link>
        <ul class="flex gap-4">
          <li><nuxt-link to="/palette">Palette</nuxt-link></li>
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
        <nuxt-link to="/" class="font-bold">LOGO Products Page</nuxt-link>
        <ul class="flex gap-4">
          <li><nuxt-link to="/design">Design</nuxt-link></li>
        </ul>
      </nav>
    </footer>
  </div>
</template>

<style scooped>
.router-link-exact-active {
  color: #12b488;
}
</style>
