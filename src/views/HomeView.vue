<template>
    <section class="my-8 flex-1">
        <div class="container">
            <form
                class="flex flex-wrap items-center gap-6 mb-6"
                @submit.prevent="searchDog"
            >
                <div class="search">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 text-gray-600 dark:text-lightGrey"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                    <input
                        v-model="breed"
                        type="text"
                        placeholder="Search for a dog by breed..."
                    />
                </div>
                <button
                    type="submit"
                    class="py-2 px-6 rounded bg-blue-900 text-white w-auto"
                >
                    Search
                </button>
            </form>

            <template v-if="dogs.length">
                <p class="mb-4 text-xl" v-show="dogs.length">
                    {{ searchResult }}
                </p>
                <dog-card :dogs="dogs" />
            </template>
            <template v-else>
                <preloader v-if="loading" />
                <div v-else>
                    <p>{{ searchResult }}</p>
                    <p class="h-[55vh] grid place-content-center text-xl">
                        No results found. Please try again.
                    </p>
                </div>
            </template>
        </div>
    </section>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
import DogCard from "@/components/DogCard.vue";
import Preloader from "@/components/Preloader.vue";
import axios from "axios";

export default {
    name: "HomeView",
    components: { DogCard, Preloader },
    data() {
        return {
            breed: "",
            searchResult: "",
            loading: true,
        };
    },
    methods: {
        ...mapActions(["fetchDogs", "searchDogs", "errorInSearch"]),
        async searchDog() {
            this.loading = true;

            try {
                let response1 = await axios.get(
                    `https://dog.ceo/api/breed/${this.breed}/images/random/50`
                );
                let response2 = await axios.get(
                    `https://dog.ceo/api/breed/${this.breed}/images/random/50`
                );

                this.searchDogs(
                    response1.data.message.concat(response2.data.message)
                );
                this.loading = false;
                this.searchResult = `Search results for "${this.breed}": `;
            } catch (error) {
                this.loading = false;
                console.log(error);
                this.searchResult = `No results for "${this.breed}".`;
                this.errorInSearch([]);
            }
        },
    },
    computed: {
        ...mapGetters(["getDogs"]),
        ...mapState(["dogs"]),
    },
    async created() {
        console.log(this.dogs);
        if (!this.dogs.length) {
            try {
                let response1 = await axios.get(
                    "https://dog.ceo/api/breeds/image/random/50"
                );
                let response2 = await axios.get(
                    "https://dog.ceo/api/breeds/image/random/50"
                );
                const data = response1.data.message.concat(
                    response2.data.message
                );
                this.fetchDogs(data);
                this.loading = false;
            } catch (error) {
                this.loading = false;
                console.log(error);
            }
        }
    },
};
</script>
