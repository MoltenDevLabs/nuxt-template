<template>
    <div class="card text-center">
        <img src="" alt="Some Image">
        <p class="font-bold text-gray-500 m-4 truncate"></p>
        <nuxt-link to="/design/{{ title }}">
            <p class="btn my-4">View {{ title }}</p>
        </nuxt-link>
    </div>
</template>

<script setup>

</script>

<style scoped>
</style>