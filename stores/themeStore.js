export const useThemeStore = defineStore('theme', () => {
  const isDarkTheme = ref(true);

  function toggleTheme() {
    isDarkTheme.value = !isDarkTheme.value;
    const colorTheme = useColorMode();
    colorTheme.preference = isDarkTheme.value ? 'dark' : 'light';
    localStorage.theme = colorTheme.preference;
    console.log(colorTheme.preference)
  }

    return {
      isDarkTheme,
      toggleTheme,
    };
});