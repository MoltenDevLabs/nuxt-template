// If the user is not logged navigate to Home page
export default defineNuxtRouteMiddleware(() => {
  const user = useSupabaseUser();

  if (!user.value) {
    return navigateTo("/auth");
  }
});
