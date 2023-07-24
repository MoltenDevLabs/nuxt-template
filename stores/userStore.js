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
  const usernameRef = ref("");

  async function editProfile() {
    /*     if (!user.value) {
      console.error("User is not defined");
      return;
    } */
    try {
      if (editing.value) {
        if (editedUsername.value.length > 0) {
          console.log(user.value.id, editedUsername.value);
          const { data, error } = await supabase
            .from("profile")
            .update({ username: editedUsername.value })
            .eq("id", user.value.id)
            .select();
          if (data && data.length > 0) {
            usernameRef.value = data[0].username;
          }
          await fetchUserUsername();
        }
      }
    } catch (error) {
      console.error("Error updating username: ", error);
    } finally {
      editing.value = !editing.value;
      editedUsername.value = usernameRef.value;
    }
  }

  async function fetchUserUsername() {
    /*     if (!user.value) {
      console.error("User is not defined");
      return;
    } */
    try {
      const { data, error } = await supabase
        .from("profile")
        .select("username")
        .eq("id", user.value.id)
        .limit(1);
      console.log(data, error);
      console.log(user.value.id);
      if (data && data.length > 0) {
        usernameRef.value = data[0].username;
      } else {
        // Set a default username
        usernameRef.value = "defaultUsername";
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
