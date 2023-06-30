<template>
  <div>
    <div class="card p-8">
      <div v-if="loading">
        <h2 class="m-0 text-center">
          <span
            class="material-icons-outlined animate-pulse relative align-text-top"
            >volcano</span
          >
          Sign up
          <span
            class="material-icons-outlined animate-pulse relative align-text-top"
            >volcano</span
          >
        </h2>
      </div>
      <div v-else>
        <h2 class="m-0 text-center">Sign up</h2>
      </div>
      <form @submit.prevent="validateFormSignUp()" class="py-4">
        <div class="py-2">
          <label for="email">Email</label>
          <input
            class="inp"
            :class="inpEmailError ? 'inp-error' : ''"
            type="text"
            v-model="email"
            placeholder="moltendev@example.com"
            autocomplete="current-email"
          />
          <p
            v-if="inpEmailError"
            class="text-xs text-red-500 dark:text-red-400 my-2"
          >
            Invalid email
          </p>
        </div>
        <div class="py-2">
          <label for="password">Password</label>
          <input
            class="inp"
            :class="inpPasswordError ? 'inp-error' : ''"
            type="password"
            v-model="password"
            placeholder="Password"
            autocomplete="current-password"
          />
          <p
            v-if="inpPasswordError"
            class="text-xs text-red-500 dark:text-red-400 my-2"
          >
            Password must be 8 characters or more, contain at least one
            lowercase letter, one uppercase letter, one number, and one symbol
            (!@#$%^&*())
          </p>
        </div>
        <div class="py-2">
          <label for="passwordTwo">Confirm password</label>
          <input
            class="inp"
            :class="inpPasswordTwoError ? 'inp-error' : ''"
            type="password"
            v-model="passwordTwo"
            placeholder="Confirm password"
            autocomplete="current-password"
          />
          <p
            v-if="inpPasswordTwoError"
            class="text-xs text-red-500 dark:text-red-400 my-2"
          >
            Passwords must be equal
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
        <p class="m-0 text-center">Have an account?</p>
        <nuxt-link to="/auth" class="btn-text">Log in</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/userStore";
const userStore = useUserStore();
const router = useRouter();

const inpEmailError = ref(false);
const inpPasswordError = ref(false);
const inpPasswordTwoError = ref(false);
const loading = ref(false);
const remember = ref(false);
const email = ref("");
const password = ref("");
const passwordTwo = ref("");

const validateFormSignUp = () => {
  inpEmailError.value = false;
  inpPasswordError.value = false;
  inpPasswordTwoError.value = false;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    inpEmailError.value = true;
  }

  /* Regex for 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one symbol (!@#$%^&*()) */
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[a-zA-Z\d!@#$%^&*()]{8,}$/;
  if (!passwordRegex.test(password.value)) {
    inpPasswordError.value = true;
  }
  if (password.value !== passwordTwo.value) {
    inpPasswordTwoError.value = true;
  }
  if (
    !inpEmailError.value &&
    !inpPasswordError.value &&
    !inpPasswordTwoError.value
  ) {
    handleSignUp();
  }
};

const handleSignUp = async () => {
  try {
    const userData = {
      email: email.value,
      password: password.value,
    };
    loading.value = true;
    await userStore.signUp(userData);
    await userStore.rememberMe();
    router.push("/");
    email.value = "";
    password.value = "";
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
};
</script>

<style></style>
