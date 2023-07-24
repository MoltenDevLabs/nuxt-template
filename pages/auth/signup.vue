<template>
  <div class="relative" :class="showModal ? 'bg-modal' : ''">
    <div class="card p-8 mt-4 mx-[4%] sm:mx-[12%] md:mx-[20%] lg:mx-[26%]">
      <div v-if="loading" class="flex justify-center items-baseline">
        <h2 class="section-title my-4">
          <span class="material-icons-outlined animate-pulse relative"
            >cake</span
          >
          SIGN UP
          <span class="material-icons-outlined animate-pulse relative"
            >cake</span
          >
        </h2>
      </div>
      <div v-else class="flex justify-center items-baseline">
        <h2 class="section-title my-4">SIGN UP</h2>
      </div>
      <form @submit.prevent="validateFormSignUp()" class="py-4">
        <div class="py-2">
          <label for="email" class="text-sm">Email</label>
          <input
            class="inp"
            :class="inpEmailError ? 'inp-error' : ''"
            type="text"
            v-model="email"
            placeholder="moltendev@labs.com"
            autocomplete="current-email"
          />
          <p
            v-if="inpEmailError"
            class="text-xs text-red-500 dark:text-red-400 my-2"
          >
            Invalid email
          </p>
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
              :class="inpPasswordError ? 'inp-error' : ''"
              :type="isVisible ? 'text' : 'password'"
              v-model="password"
              placeholder="password"
              autocomplete="current-password"
            />
          </div>
          <p
            v-if="inpPasswordError"
            class="text-xs text-red-500 dark:text-red-400 my-2"
          >
            Password must be 8 characters or more, contain at least one
            lowercase letter, one uppercase letter, one number, and one symbol
            (!@#$%^&*())
          </p>
        </div>
        <div class="py-4">
          <label for="passwordTwo" class="text-sm">Confirm password</label>
          <div class="flex relative">
            <i
              @click="toggleVisibility()"
              class="absolute material-icons-outlined top-1/2 transform -translate-y-1/2 z-10 cursor-pointer right-2 text-surface-900"
            >
              {{ isVisible ? "visibility_off" : "visibility" }}
            </i>
            <input
              class="inp"
              :class="inpPasswordTwoError ? 'inp-error' : ''"
              :type="isVisible ? 'text' : 'password'"
              v-model="passwordTwo"
              placeholder="confirm password"
              autocomplete="current-password"
            />
          </div>
          <p
            v-if="inpPasswordTwoError"
            class="text-xs text-red-500 dark:text-red-400 my-2"
          >
            Passwords must be equal
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
          <button class="btn w-full" type="submit">SIGN IN</button>
        </div>
      </form>
      <div class="flex flex-col items-center justify-center py-2">
        <p class="m-0 text-center">Have an account?</p>
        <nuxt-link to="/auth">
          <button class="btn-text">Log in</button>
        </nuxt-link>
      </div>
    </div>
    <div v-if="showModal" class="modal">
      <h1>Thanks for joining!</h1>
      <p>Check your email to confirm your registration</p>
      <button @click="closeModal()" class="btn">Ok</button>
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

const loading = ref(false);
const remember = ref(false);
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
    showModal.value = true;
    email.value = "";
    password.value = "";
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
};

const isVisible = ref(false);
const toggleVisibility = () => {
  isVisible.value = !isVisible.value;
};

const showModal = ref(false);
const closeModal = () => {
  showModal.value = false;
};
</script>

<style></style>
