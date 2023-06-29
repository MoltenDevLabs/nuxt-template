<template>
  <div>
    <div class="card p-8">
      <h2 class="m-0 text-center">Sign In</h2>
      <form @submit.prevent="handleSignIn()" class="py-4">
        <div class="py-2">
          <label for="email">Email</label>
          <input
            class="py-1 px-2 w-full rounded-lg outline outline-surface-900 outline-1 outline-offset-0 dark:bg-surface-300 dark:text-surface-900"
            type="text"
            v-model="email"
            placeholder="moltendev@example.com"
            autocomplete="current-email"
          />
        </div>
        <div class="py-2">
          <label for="password">Password</label>
          <input
            class="py-1 px-2 w-full rounded-lg outline outline-surface-900 outline-1 outline-offset-0 dark:bg-surface-300 dark:text-surface-900"
            type="password"
            v-model="password"
            placeholder="password"
            autocomplete="current-password"
          />
        </div>
        <div class="py-4 w-full text-right">
          <button class="btn px-8" type="submit">Log In</button>
        </div>
      </form>
      <div class="flex flex-col items-center justify-center">
        <p class="m-0 text-center">Don't have an account?</p>
        <nuxt-link to="/auth/signup" class="btn-text p-0">Sign up</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/userStore";
const userStore = useUserStore();
const router = useRouter();

const loading = ref(false);
const email = ref("");
const password = ref("");

const handleSignIn = async () => {
  try {
    loading.value = true;
    const userData = {
      email: email.value,
      password: password.value,
    };
    await userStore.signIn(userData);
    if (userStore.user) router.push("/");
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
};
</script>

<style></style>
