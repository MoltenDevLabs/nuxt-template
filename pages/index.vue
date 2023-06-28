<template>
  <div>
    <h1>Home View</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas natus laboriosam consectetur cumque repudiandae esse voluptas facere! Tempora deleniti facere praesentium quis ad, officiis cum eligendi omnis ratione fugit neque.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magni, tempora vitae, quia nesciunt error nulla quas nostrum eum exercitationem minus. Quas, atque officiis voluptatum accusamus animi mollitia vitae voluptatibus.</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse voluptas explicabo adipisci vel, possimus labore fugiat totam dicta libero iste ipsum, obcaecati quaerat. Voluptatem explicabo blanditiis eum! Nisi, pariatur debitis.</p>
  </div>
</template>

<script setup>
const client = useSupabaseClient();
const user = useSupabaseUser();
const router = useRouter();

watchEffect(() => {
  if (user.value) router.push("/");
});

/* definePageMeta({
  middleware: 'auth'
}); */
</script>

<style></style>
