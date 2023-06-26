<template>
  <div>
    <h1>This is an H1</h1>
    <h2>This is an H2</h2>
    <h3>This is an H3</h3>
    <h4>This is an H4</h4>
    <h5>This is an H5</h5>
    <h6>This is an H6</h6>
    <hr />
    <p class="text-xs">This is a P xs</p>
    <p class="text-sm">This is a P sm</p>
    <p class="text-base">This is a P base</p>
    <p class="text-lg">This is a P lg</p>
    <p class="text-xl">This is a P xl</p>
    <p class="text-2xl">This is a P 2xl</p>
    <p class="text-3xl">This is a P 3xl</p>
    <p class="text-4xl">This is a P 4xl</p>
    <p class="text-5xl">This is a P 5xl</p>
    <p class="text-6xl">This is a P 6xl</p>
    <p class="text-7xl">This is a P 7xl</p>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "design",
});

const { title } = useRoute().params
</script>

<style scoped></style>
