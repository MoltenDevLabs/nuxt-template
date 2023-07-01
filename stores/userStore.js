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

  /* Persist the user logged in for 7 days */
  const remember = ref(false);

  async function rememberMe() {
    if (user.value && remember.value) {
      const expires = new Date();
      expires.setDate(expires.getDate() + 7);
      document.cookie = `userToken=${
        user.value.token
      }; expires=${expires.toUTCString()}`;
    }
  }

  const editing = ref(false);
  const editedUsername = ref("");
  const usernameRef = ref(null);

  async function editProfile() {
    try {
      if (editing.value) {
        if (editedUsername.value.length > 0) {
          const { data, error } = await supabase
            .from("userProfile")
            .update({ username: editedUsername.value })
            .eq("id", 1)
            .select();
          if (data && data.length > 0) {
            usernameRef.value = data[0].username;
          }
        }
        await fetchUserUsername();
      } else {
        // Pre-fill the input field with the existing username
        editedUsername.value = usernameRef.value;
      }
    } catch (error) {
      console.error(error);
    } finally {
      editing.value = !editing.value;
      editedUsername.value = "";
    }
  }

  async function fetchUserUsername() {
    try {
      const { data, error } = await supabase
        .from("userProfile")
        .select("username")
        .eq("id", 1)
        .limit(1);
      if (data && data.length > 0) {
        usernameRef.value = data[0].username;
      } else {
        // Set a default username
        usernameRef.value = "Username";
      }
    } catch (error) {
      console.error(error);
    }
  }

  return {
    signIn,
    signUp,
    signOut,
    rememberMe,
    editProfile,
    fetchUserUsername,
    user,
    remember,
    editing,
    editedUsername,
    usernameRef,
  };
});
