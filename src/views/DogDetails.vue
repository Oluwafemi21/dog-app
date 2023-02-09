<template>
    <section class="my-8 flex-1">
        <div class="container">
            <router-link
                to="/"
                class="bg-darkBlue dark:bg-white dark:text-darkBlue text-white py-1.5 px-4 rounded hover:ring-2 transition duration-100 font-semibold hover:ring-black hover:bg-transparent dark:hover:bg-transparent hover:text-darkBlue dark:hover:ring-white dark:hover:text-white"
            >
                Back
            </router-link>
            <section class="my-6 flex flex-wrap items-start gap-11">
                <img
                    class="h-5/6 rounded"
                    :src="dog"
                    :alt="
                        dog.split('/')[4].charAt(0).toUpperCase() +
                        dog.split('/')[4].slice(1)
                    "
                />
                <p class="text-2xl font-semibold">
                    Breed name:
                    <span class="font-normal">{{
                        dog.split("/")[4].charAt(0).toUpperCase() +
                        dog.split("/")[4].slice(1)
                    }}</span>
                </p>
            </section>
        </div>
    </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
    methods: {
        ...mapActions(["getDog"]),
    },
    computed: {
        ...mapState(["dog"]),
    },
    created() {
        this.getDog(this.$route.params.id2);
    },
};
</script>

<style></style>
