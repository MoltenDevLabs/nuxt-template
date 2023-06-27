<template>
  <div class="h-96">
    <h1>Home View</h1>
  </div>
</template>

<script setup>
const client = useSupabaseClient();
const user = useSupabaseUser();
const router = useRouter();

watchEffect(() => {
  if(user.value)
  router.push('/')
});

/* definePageMeta({
  middleware: 'auth'
}); */
</script>

<style></style>
