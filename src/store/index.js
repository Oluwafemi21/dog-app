import { createStore } from "vuex";

export default createStore({
    state: {
        dogs: [],
        dog: [],
    },
    mutations: {
        setDogs(state, payload) {
            state.dogs = payload;
        },
        setDog(state, payload) {
            state.dog = state.dogs[payload];
        },
    },
    actions: {
        fetchDogs(context, payload) {
            context.commit("setDogs", payload);
        },
        searchDogs(context, payload) {
            context.commit("setDogs", payload);
        },
        errorInSearch(context, payload) {
            context.commit("setDogs", payload);
        },
        getDog(context, payload) {
            context.commit("setDog", payload);
        },
    },
    getters: {
        getDogs: (state) => state.dogs,
    },
});
