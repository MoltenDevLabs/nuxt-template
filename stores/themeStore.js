export const useThemeStore = defineStore("themeStore", () => {
  const isDarkTheme = ref(false);

  // Fetches the system default theme
  onBeforeMount(async () => {
    const colorTheme = useColorMode();
    const theme = colorTheme.preference;
    isDarkTheme.value = theme === "dark";
  });

  // Toggles the theme between 'light' and 'dark'
  function toggleTheme() {
    isDarkTheme.value = !isDarkTheme.value;
    const rootElement = document.documentElement;
    rootElement.classList.toggle('dark');
    rootElement.classList.toggle('light');
    console.log(rootElement.classList);
/*     isDarkTheme.value = !isDarkTheme.value;
    const colorTheme = useColorMode();
    colorTheme.preference = isDarkTheme.value ? "dark" : "light";
    localStorage.theme = colorTheme.preference; */
  }

  return {
    isDarkTheme,
    toggleTheme,
  };
});
