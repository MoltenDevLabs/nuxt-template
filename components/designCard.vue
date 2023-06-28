<template>
  <div class="card text-center">
    <img :src="imageSrc" alt="Some Image" class="w-full h-auto object-cover"/>
    <nuxt-link :to="`/design/${title}`">
      <button class="btn mb-4 mt-auto">View {{ title }}</button>
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
