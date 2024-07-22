import { defineStore } from 'pinia';
import { api } from 'boot/axios';

interface Service {
  id: string;
  name: string;
  sys: { id: string };
}

interface ServiceStoreState {
  isLoading: boolean;
  services: Service[];
}

export const useServiceStore = defineStore('services', {
  state: (): ServiceStoreState => ({
    isLoading: false,
    services: [],
  }),

  getters: {},

  actions: {
    async getServices(): Promise<void> {
      this.isLoading = true;
      try {
        const response = await api.get('/packages/');
        this.services = response.data.packages;
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
