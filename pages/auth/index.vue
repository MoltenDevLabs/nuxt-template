<template>
  <div>
    <div class="card p-8">
      <div v-if="loading" class="flex justify-center items-baseline">
        <h2 class="m-0">
          <span class="material-icons-outlined animate-pulse relative"
            >volcano</span
          >
          Login
          <span class="material-icons-outlined animate-pulse relative"
            >volcano</span
          >
        </h2>
      </div>
      <div v-else class="flex justify-center items-baseline">
        <h2 class="m-0">Login</h2>
      </div>
      <form @submit.prevent="handleSignIn()" class="py-4">
        <div class="py-2">
          <label for="email">Email</label>
          <input
            class="inp"
            :class="inpError ? 'inp-error' : ''"
            type="text"
            v-model="email"
            placeholder="moltendev@example.com"
            autocomplete="current-email"
          />
        </div>
        <div class="py-2">
          <label for="password">Password</label>
          <input
            class="inp"
            :class="inpError ? 'inp-error' : ''"
            type="password"
            v-model="password"
            placeholder="password"
            autocomplete="current-password"
          />
          <p
            v-if="inpError"
            class="text-xs text-red-500 dark:text-red-400 my-2"
          >
            Invalid credentials
          </p>
        </div>
        <div class="py-2">
          <input
            class="accent-tertiary-500"
            checked
            type="checkbox"
            v-model="remember"
          />
          <label for="remember" class="px-2">Remember me</label>
        </div>
        <div class="py-2 w-full text-right">
          <button class="btn w-full" type="submit">Log In</button>
        </div>
      </form>
      <div class="flex flex-col items-center justify-center py-2">
        <p class="m-0 text-center">Don't have an account?</p>
        <nuxt-link to="/auth/signup" class="btn-text">Sign up</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/userStore";
const userStore = useUserStore();
const router = useRouter();

const inpError = ref(false);
const loading = ref(false);
const remember = ref(false);
const email = ref("");
const password = ref("");

const handleSignIn = async () => {
  try {
    inpError.value = false;
    const userData = {
      email: email.value,
      password: password.value,
    };
    loading.value = true;
    await userStore.signIn(userData);
    await userStore.rememberMe();
    router.push("/");
    email.value = "";
    password.value = "";
  } catch (error) {
    inpError.value = true;
  } finally {
    loading.value = false;
  }
};
</script>

<style></style>
