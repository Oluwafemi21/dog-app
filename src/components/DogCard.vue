<template>
    <section class="cards">
        <ul
            class="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
            <li
                v-for="(dog, index) in dogs"
                :key="index"
                class="bg-white dark:bg-darkElement rounded shadow group relative"
            >
                <router-link :to="'/dog/' + dog.split('/')[4] + '/' + index">
                    <img
                        class="w-full h-60 sm:h-52 object-cover rounded"
                        :src="dog"
                        :alt="
                            dog.split('/')[4].charAt(0).toUpperCase() +
                            dog.split('/')[4].slice(1)
                        "
                        loading="lazy"
                    />
                </router-link>
                <p
                    class="rounded-t absolute inset-0 h-16 flex items-center justify-center -translate-y-0 opacity-0 w-full bg-black text-white py-3 group-hover:translate-y-0 group-hover:opacity-80 transition-all duration-200"
                >
                    {{
                        dog.split("/")[4].charAt(0).toUpperCase() +
                        dog.split("/")[4].slice(1)
                    }}
                </p>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    name: "DogCard",
    props: ["dogs"],
};
</script>
