<script setup>
import { RouterLink, RouterView } from "vue-router";
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";
</script>

<template>
    <MainHeader />
    <main class="h-screen">
        <RouterView />
    </main>
    <MainFooter />
</template>
