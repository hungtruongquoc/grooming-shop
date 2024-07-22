import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';

interface SchedulingRule {
  last_timestamp: string;
  earliest_time: string;
}

interface RuleStoreState {
  isLoading: boolean;
  rules: SchedulingRule[] | null;
}

export const useRuleStore = defineStore('rules', {
  state: (): RuleStoreState => ({
    isLoading: false,
    rules: null,
  }),

  getters: {},

  actions: {
    async getRules(): Promise<void> {
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
