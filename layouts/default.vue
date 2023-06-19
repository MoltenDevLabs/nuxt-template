<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex items-center justify-between">
        <nuxt-link to="/" class="">
          <nuxt-icon name="logo-text-light" filled />
        </nuxt-link>
        <ul class="flex gap-4">
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/about">About</nuxt-link></li>
          <li><nuxt-link to="/contact">Contact</nuxt-link></li>
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

<style scooped>
.nuxt-icon svg{
  font-size: 2em;
  margin-bottom: 0;
  object-fit: fill ;
  width:fit-content;
}
</style>
