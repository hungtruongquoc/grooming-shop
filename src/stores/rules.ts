import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';

interface RuleStoreState {
  counter: number;
  isLoading: boolean;
  rules: any[] | null;
}

export const useRuleStore = defineStore('rules', {
  state: (): RuleStoreState => ({
    counter: 0,
    isLoading: false,
    rules: null,
  }),

  getters: {
    doubleCount(state) {
      return state.counter * 2;
    },
  },

  actions: {
    increment() {
      this.counter++;
    },
    async getRules(): Promise<any> {
      this.isLoading = true;
      try {
        const response = await api.get('/rules/');
        this.rules = response.data.data;
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
