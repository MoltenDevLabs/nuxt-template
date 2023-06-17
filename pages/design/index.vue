<template>
  <div>
    <h1>Design View</h1>
    <div class="grid grid-cols-3 gap-5 pt-4">
      <DesignCard v-for="title in titles" :key="title" :title="title" />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "design",
});

const titles = ["palette", "typography"];
</script>

<style></style>
