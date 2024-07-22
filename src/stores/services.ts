import { defineStore } from 'pinia';
import { api } from 'boot/axios';

export const useServiceStore = defineStore('counter', {
  state: () => ({
    counter: 0,
    isLoading: false,
    services: [],
  }),

  getters: {
    doubleCount(state) {
      return state.counter * 2;
    },
  },

  actions: {
    async getServices(): Promise<void> {
      this.isLoading = true;
      try {
        const response = await api.get('/packages/');
        this.services = response.data.data;
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
