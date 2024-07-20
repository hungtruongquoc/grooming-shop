import { ref, onMounted, onUnmounted, Ref } from 'vue';

export function useMediaQuery(query: string): Ref<boolean> {
  const matches = ref(false);

  const updateMatches = () => {
    matches.value = window.matchMedia(query).matches;
  };

  onMounted(() => {
    updateMatches();
    window.matchMedia(query).addEventListener('change', updateMatches);
  });

  onUnmounted(() => {
    window.matchMedia(query).removeEventListener('change', updateMatches);
  });

  return matches;
}
