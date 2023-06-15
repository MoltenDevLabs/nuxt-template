<template>
  <div>
    <h1>Products/:id View</h1>
    <h3>Product details for id: {{ id }}</h3>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'custom',
});

const { id } = useRoute().params
</script>

<style></style>
