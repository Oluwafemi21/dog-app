<template>
    <MainHeader />
    <main class="flex-1">
        <RouterView />
    </main>
    <MainFooter />
</template>

<script setup>
import { RouterView } from "vue-router";
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";
</script>
