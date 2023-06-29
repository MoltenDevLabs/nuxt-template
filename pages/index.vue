<template>
  <div>
    <div v-if="user" class="flex justify-between">
      <p>Logged in</p>
      <button class="btn" @click="handleSignOut">Log out</button>
    </div>
    <div v-else>
      <p>Logged out</p>
    </div>
    <h1>Home View</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas natus
      laboriosam consectetur cumque repudiandae esse voluptas facere! Tempora
      deleniti facere praesentium quis ad, officiis cum eligendi omnis ratione
      fugit neque.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore magni,
      tempora vitae, quia nesciunt error nulla quas nostrum eum exercitationem
      minus. Quas, atque officiis voluptatum accusamus animi mollitia vitae
      voluptatibus.
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse voluptas
      explicabo adipisci vel, possimus labore fugiat totam dicta libero iste
      ipsum, obcaecati quaerat. Voluptatem explicabo blanditiis eum! Nisi,
      pariatur debitis.
    </p>
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/userStore";
const userStore = useUserStore();
const user = useSupabaseUser();

const loading = ref(false);

const handleSignOut = async () => {
  try {
    loading.value = true;
    await userStore.signOut();
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
};

/* watchEffect(() => {
  if (user.value) router.push("/");
}); */

/* definePageMeta({
  middleware: 'auth'
}); */
</script>

<style></style>
