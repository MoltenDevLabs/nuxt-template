<template>
  <div class="card text-center">
    <img :src="imageSrc" alt="Some Image" />
    <p class="font-bold text-gray-500 m-4 truncate"></p>
    <nuxt-link :to="`/design/${title}`">
      <p class="btn my-4">View {{ title }}</p>
    </nuxt-link>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
});
</script>

<style scoped></style>
