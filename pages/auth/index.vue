<template>
  <div>
    <h1>Auth View</h1>
    <div class="card">
      <form @submit.prevent="handleSignIn()">
        <label for="email">Email</label>
        <input
          type="text"
          v-model="email"
          placeholder="moltendev@example.com"
          autocomplete="current-email"
        />
        <label for="password">Password</label>
        <input
          type="password"
          v-model="password"
          placeholder="password"
          autocomplete="current-password"
        />
        <button class="btn" type="submit">Log In</button>
      </form>
      <div>
        <p>
          Don't have an account?<nuxt-link to="/auth/signup" class="btn-text"
            >Sign up</nuxt-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/userStore";
const userStore = useUserStore();

/* const supabase = useSupabaseClient();
const user = useSupabaseUser(); */

const loading = ref(false);
const email = ref("");
const password = ref("");

/* const handleLogin = async () => {
  try {
    loading.value = true
    const { error } = await supabase.auth.signInWithOtp({ email: email.value })
    if (error) throw error
    alert('Check your email for the login link!')
  } catch (error) {
    alert(error.error_description || error.message)
  } finally {
    loading.value = false
  }
} */

const handleSignIn = async () => {
  try {
    loading.value = true;
    const userData = {
      email: email.value,
      password: password.value,
    };
    await userStore.signIn(userData);
    $router.push({ name: "home" });
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
};
</script>

<style></style>
