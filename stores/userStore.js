export const useUserStore = defineStore("userStore", () => {
  const supabase = useSupabaseClient();
  const user = ref(undefined);
  const remember = ref(false);

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

  /* Persist the user logged in for 7 days */
  async function rememberMe() {
    if (user.value && remember.value) {
      const expires = new Date();
      expires.setDate(expires.getDate() + 7);
      document.cookie = `userToken=${
        user.value.token
      }; expires=${expires.toUTCString()}`;
    }
  }

  /*   async function editProfile() {} */

  return {
    signIn,
    signUp,
    signOut,
    rememberMe,
    /*     editProfile, */
    user,
    remember,
  };
});
