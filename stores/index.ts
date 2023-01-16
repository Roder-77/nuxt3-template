import { defineStore, acceptHMRUpdate } from 'pinia';

export const useStore = defineStore('main', {
    state: () => ({
        test: '123',
    }),
    actions: {},
    getters: {},
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot));
}
