<template>
    <button
        @click="toggleDark()"
        class="flex items-center space-x-1 text-sm py-2 px-4 rounded focus:ring-2 focus:ring-black focus:dark:ring-white dark:text-white"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 dark:block hidden"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
        </svg>

        <span class="dark:md:block hidden font-semibold">Light Mode</span>

        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 block dark:hidden"
            viewBox="0 0 20 20"
            fill="currentColor"
        >
            <path
                d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
            />
        </svg>
        <span class="md:block dark:md:hidden hidden font-semibold"
            >Dark Mode</span
        >
    </button>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
