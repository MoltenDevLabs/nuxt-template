<template>
  <div>
    <h1>Products/:id View</h1>
    <h3>Products details for: {{ id }}</h3>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'design',
});

const { id } = useRoute().params
</script>

<style></style>
