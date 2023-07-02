<template>
  <div>
    <!-- HEADER START -->
    <div v-if="$device.isMobileOrTablet">
      <header class="mx-auto px-[10%] flex items-center justify-between">
        <nuxt-link to="/" @click="scrollToTop()">
          <nuxt-icon
            v-if="themeStore.isDarkTheme"
            name="logo-text-dark"
            filled
          />
          <nuxt-icon v-else name="logo-text-light" filled />
        </nuxt-link>
        <ul>
          <button
            class="btn p-1 border border-1 border-surface-900 dark:border-surface-200 flex flex-col justify-center items-center group"
            @click="openMenu()"
          >
            <div
              :class="`${hamburgerMenuLine} ${
                navMenu
                  ? 'rotate-45 translate-y-1.5 group-hover:opacity-100'
                  : 'group-hover:opacity-100'
              }`"
            ></div>
            <div
              :class="`${hamburgerMenuLine} ${
                navMenu ? 'opacity-0' : 'group-hover:opacity-100'
              }`"
            ></div>
            <div
              :class="`${hamburgerMenuLine} ${
                navMenu
                  ? '-rotate-45 -translate-y-1.5 group-hover:opacity-100'
                  : 'group-hover:opacity-100'
              }`"
            ></div>
          </button>
        </ul>
      </header>
      <header
        class="absolute top-[68px] min-w-full h-0 z-10 overflow-hidden transition-all ease-out duration-500"
        :class="navMenu ? 'h-80 opacity-90' : 'h-0'"
      >
        <ul class="flex flex-col items-center p-0">
          <button
            class="absolute top-3 mx-[10%] flex place-self-end"
            @click="themeStore.toggleTheme()"
          >
            <i
              v-if="themeStore.isDarkTheme"
              class="material-icons-outlined text-surface-900 dark:text-surface-200 border border-1 rounded-full p-1"
              >light_mode</i
            >
            <i
              v-else
              class="material-icons-outlined text-surface-900 dark:text-surface-200 border border-1 border-surface-900 rounded-full p-1"
              >dark_mode</i
            >
          </button>
          <li><nuxt-link to="/" @click="scrollToTop()">Home</nuxt-link></li>
          <li>
            <nuxt-link to="/about" @click="scrollToTop()">About</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contact" @click="scrollToTop()">Contact</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/design" @click="scrollToTop()">Design</nuxt-link>
          </li>
          <li v-if="user">
            <nuxt-link to="/profile" @click="scrollToTop()" class="btn"
              >Profile</nuxt-link
            >
          </li>
          <li v-else>
            <nuxt-link to="/auth" @click="scrollToTop()" class="btn"
              >Log in</nuxt-link
            >
          </li>
        </ul>
      </header>
    </div>

    <div v-else>
      <header class="mx-auto px-[10%] flex items-center justify-between">
        <nuxt-link to="/" class="">
          <nuxt-icon
            v-if="themeStore.isDarkTheme"
            name="logo-text-dark"
            filled
          />
          <nuxt-icon v-else name="logo-text-light" filled />
        </nuxt-link>
        <nav class="flex gap-4 items-center">
          <ul class="flex gap-4">
            <li><nuxt-link to="/" @click="scrollToTop()">Home</nuxt-link></li>
            <li>
              <nuxt-link to="/about" @click="scrollToTop()">About</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/contact" @click="scrollToTop()"
                >Contact</nuxt-link
              >
            </li>
            <li>
              <nuxt-link to="/design" @click="scrollToTop()">Design</nuxt-link>
            </li>
            <li v-if="user">
              <nuxt-link to="/profile" @click="scrollToTop()" class="btn"
                >Profile</nuxt-link
              >
            </li>
            <li v-else>
              <nuxt-link to="/auth" @click="scrollToTop()" class="btn"
                >Log in</nuxt-link
              >
            </li>
          </ul>
          <button class="flex" @click="themeStore.toggleTheme()">
            <i
              v-if="themeStore.isDarkTheme"
              class="material-icons-outlined text-surface-900"
              >light_mode</i
            >
            <i v-else class="material-icons-outlined text-surface-900"
              >dark_mode</i
            >
          </button>
        </nav>
      </header>
    </div>
    <!-- HEADER END -->

    <!-- CONTENT START -->
    <main
      class="prose prose-stone dark:prose-invert md:prose-lg lg:prose-xl container mx-auto px-[10%] my-4"
      :class="navMenu ? ' blur-sm' : ''"
    >
      <slot />
    </main>
    <!-- CONTENT END -->

    <!-- FOOTER START -->
    <div>
      <footer
        class="mx-auto px-[10%] py-[6%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 auto-cols-auto gap-2 justify-between border-t-2"
      >
        <div class="col-span-full">
          <nuxt-link to="/" @click="scrollToTop()">
            <nuxt-icon
              v-if="themeStore.isDarkTheme"
              name="logo-text-dark"
              filled
            />
            <nuxt-icon v-else name="logo-text-light" filled />
          </nuxt-link>
          <p class="text-xs lg:text-sm mb-0">
            Made with
            <span class="material-icons-outlined align-text-bottom"
              >local_fire_department</span
            >
            in Reus
          </p>
        </div>
        <div class="">
          <nav>
            <ul>
              <h6 class="font-bold text-xs lg:text-sm mb-2">Web map</h6>
              <li class="text-xs lg:text-sm">
                <nuxt-link to="/" @click="scrollToTop()">Home</nuxt-link>
              </li>
              <li class="text-xs lg:text-sm">
                <nuxt-link to="/about" @click="scrollToTop()">About</nuxt-link>
              </li>
              <li class="text-xs lg:text-sm">
                <nuxt-link to="/contact" @click="scrollToTop()"
                  >Contact</nuxt-link
                >
              </li>
              <li class="text-xs lg:text-sm">
                <nuxt-link to="/design" @click="scrollToTop()"
                  >Design</nuxt-link
                >
              </li>
              <li class="text-xs lg:text-sm">
                <nuxt-link to="/design/palette" @click="scrollToTop()"
                  >Palette</nuxt-link
                >
              </li>
              <li class="text-xs lg:text-sm">
                <nuxt-link to="/design/typography" @click="scrollToTop()"
                  >Typography</nuxt-link
                >
              </li>
              <li class="text-xs lg:text-sm">
                <nuxt-link to="/auth" @click="scrollToTop()">Log in</nuxt-link>
              </li>
              <li class="text-xs lg:text-sm">
                <nuxt-link to="/auth/signup" @click="scrollToTop()"
                  >Sign up</nuxt-link
                >
              </li>
              <li class="text-xs lg:text-sm">
                <nuxt-link to="/profile" @click="scrollToTop()"
                  >Profile</nuxt-link
                >
              </li>
            </ul>
          </nav>
        </div>
        <div class="">
          <nav>
            <ul>
              <h6 class="font-bold text-xs lg:text-sm mb-2">Check my work</h6>
              <li class="text-xs lg:text-sm">
                <nuxt-link to="/contact" @click="scrollToTop()"
                  >Contact</nuxt-link
                >
              </li>
              <li class="text-xs lg:text-sm">
                <nuxt-link to="https://github.com/MoltenDevLabs"
                  >Github</nuxt-link
                >
              </li>
              <li class="text-xs lg:text-sm">
                <nuxt-link
                  to="https://www.linkedin.com/in/pol-cadavid-rojas-09572366/"
                  >LinkedIn</nuxt-link
                >
              </li>
            </ul>
          </nav>
        </div>
        <div class="">
          <nav>
            <ul>
              <h6 class="font-bold text-xs lg:text-sm mb-2">Auth Links</h6>
              <li class="text-xs lg:text-sm">
                <nuxt-link to="/auth" @click="scrollToTop()">Log in</nuxt-link>
              </li>
              <li class="text-xs lg:text-sm">
                <nuxt-link to="/auth/signup" @click="scrollToTop()"
                  >Sign up</nuxt-link
                >
              </li>
            </ul>
          </nav>
        </div>
        <div class="">
          <nav>
            <ul>
              <h6 class="font-bold text-xs lg:text-sm mb-2">Design links</h6>
              <li class="text-xs lg:text-sm">
                <nuxt-link to="/design" @click="scrollToTop()"
                  >Design</nuxt-link
                >
              </li>
              <li class="text-xs lg:text-sm">
                <nuxt-link to="/design/palette" @click="scrollToTop()"
                  >Palette</nuxt-link
                >
              </li>
              <li class="text-xs lg:text-sm">
                <nuxt-link to="/design/typography" @click="scrollToTop()"
                  >Typography</nuxt-link
                >
              </li>
            </ul>
          </nav>
        </div>
        <div class="">
          <nav>
            <ul>
              <h6 class="font-bold text-xs lg:text-sm mb-2">User Links</h6>
              <li class="text-xs lg:text-sm">
                <nuxt-link to="/profile" @click="scrollToTop()"
                  >Profile</nuxt-link
                >
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
    <!-- FOOTER END -->
  </div>
</template>

<script setup>
const hamburgerMenuLine =
  "h-0.5 w-5 my-0.5 rounded-full bg-surface-900 dark:bg-surface-200 transition ease transform duration-500";

import { useThemeStore } from "../stores/themeStore";
const themeStore = useThemeStore();
const user = useSupabaseUser();

const navMenu = ref(false);
const openMenu = () => {
  navMenu.value = !navMenu.value;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  navMenu.value = false;
};
</script>

<style scooped>
.nuxt-icon svg {
  font-size: 2em;
  margin-bottom: 0;
  object-fit: fill;
  width: fit-content;
}
</style>
