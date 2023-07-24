<template>
  <div>
    <div class="card p-8 mt-4 mx-[4%] sm:mx-[12%] md:mx-[20%] lg:mx-[26%]">
      <div v-if="loading" class="flex justify-center items-baseline">
        <h2 class="section-title my-4">
          <span class="material-icons-outlined animate-pulse relative"
            >volcano</span
          >
          LOG IN
          <span class="material-icons-outlined animate-pulse relative"
            >colcano</span
          >
        </h2>
      </div>
      <div v-else class="flex justify-center items-baseline">
        <h2 class="section-title my-4">LOG IN</h2>
      </div>
      <form @submit.prevent="handleSignIn()" class="py-4">
        <div class="py-2">
          <label for="email" class="text-sm">Email</label>
          <input
            class="inp"
            :class="inpError ? 'inp-error' : ''"
            type="text"
            v-model="email"
            placeholder="moltendev@labs.com"
            autocomplete="current-email"
          />
        </div>
        <div class="py-4">
          <label for="password" class="text-sm">Password</label>
          <div class="flex relative">
            <i
              @click="toggleVisibility()"
              class="absolute material-icons-outlined top-1/2 transform -translate-y-1/2 z-10 cursor-pointer right-2 text-surface-900"
            >
              {{ isVisible ? "visibility_off" : "visibility" }}
            </i>
            <input
              class="inp"
              :class="inpError ? 'inp-error' : ''"
              :type="isVisible ? 'text' : 'password'"
              v-model="password"
              placeholder="password"
              autocomplete="current-password"
            />
          </div>
          <p
            v-if="inpError"
            class="text-xs text-red-500 dark:text-red-400 my-2"
          >
            Invalid credentials
          </p>
        </div>
        <div class="py-4">
          <input
            class="accent-tertiary-500"
            checked
            type="checkbox"
            v-model="remember"
          />
          <label for="remember" class="px-2">Remember me</label>
        </div>
        <div class="py-2 w-full text-right">
          <button class="btn w-full" type="submit">LOG IN</button>
        </div>
      </form>
      <div class="flex flex-col items-center justify-center py-2">
        <p class="m-0 text-center">Don't have an account?</p>
        <nuxt-link to="/auth/signup">
          <button class="btn-text">Sign up</button>
        </nuxt-link>
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

const isVisible = ref(false);

const toggleVisibility = () => {
  isVisible.value = !isVisible.value;
};
</script>

<style></style>
