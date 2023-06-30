<template>
  <div>
    <div class="flex">
      <div class="rounded-full">
        <img
          src="assets/icons/logoPng.png"
          alt="Profile picture"
          class="w-16 h-16 md:w-24 md:h-24 m-4 object-cover rounded-full outline outline-1 outline-offset-0 outline-surface-900 dark:outline-surface-50"
        />
      </div>
      <div class="my-8 flex flex-col align-bottom justify-end">
        <h4 class="m-0">Username</h4>
        <p class="text-sm">{{ user.email }}</p>
      </div>
    </div>
    <div class="flex justify-evenly">
      <button class="btn">Edit profile</button>
      <nuxt-link to="/" @click="userStore.signOut()" class="btn no-underline"
        >Log out</nuxt-link
      >
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/userStore";
const userStore = useUserStore();
const user = useSupabaseUser();

/* defineProps({
  user: {
    type: Object,
    required: true,
  },
}); */
definePageMeta({
  middleware: "auth",
});
</script>

<style scoped></style>
