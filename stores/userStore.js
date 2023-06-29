export const useUserStore = defineStore("userStore", () => {
  const supabase = useSupabaseClient();
  const user = ref(undefined);

  async function signIn({ email, password }) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    if (data) {
      user.value = data;
    }
  }

  async function signUp({ email, password }) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) throw error;
    if (data) {
      user.value = data;
    }
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    user.value = undefined;
  }

  return {
    signIn,
    signUp,
    signOut,
    user,
  };
});
