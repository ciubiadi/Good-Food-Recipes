<script lang="ts">
import { computed, onMounted, ref } from 'vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';
import CoachItem from '../../components/coaches/CoachItem.vue';
import BaseButton from '../../components/ui/BaseButton.vue';
import BaseCard from '../../components/ui/BaseCard.vue';
import { useStore } from 'vuex';
import { ICoach } from '../../utils/types';
import BaseSpinner from '../../components/ui/BaseSpinner.vue';
import BaseDialog from '../../components/ui/BaseDialog.vue';

interface LocalState {
      isloading: boolean;
      error: string | null;
      activeFilters: {
        mexican: boolean;
        vegan: boolean;
        indian: boolean;
      };
    }

export default {
  setup() {
    const store = useStore();
    const localState = ref<LocalState>({
      isloading: false,
      error: null,
      activeFilters: {
        mexican: true,
        vegan: true,
        indian: true,
      },
    });

    const isCoach = computed(() => {
      return store.getters['coaches/isCoach'];
    });
    const filteredCoaches = computed(() => {
      const coaches = store.getters['coaches/coaches'];
      return coaches.filter((coach: ICoach) => {
        if (localState.value.activeFilters.mexican && coach.areas.includes('mexican')) {
            return true;
        }
        if (localState.value.activeFilters.vegan && coach.areas.includes('vegan')) {
            return true;
        }
        if (localState.value.activeFilters.indian && coach.areas.includes('indian')) {
            return true;
        }
        return false;
      });
    });
    const hasCoaches = computed(() => !localState.value.isloading && store.getters['coaches/hasCoaches']);

    // Methods
    function setFilters(updatedFilters: any) {
      localState.value.activeFilters = updatedFilters;
    }
    async function loadCoaches(refresh = false) {
      localState.value.isloading = true;
      try {
        await store.dispatch('coaches/loadCoaches', {
          forceRefresh: refresh,
        });
      } catch (error: any) {
        localState.value.error = error.message || 'Something went wrong!';
      }
      localState.value.isloading = false;
    }
    function handleError() {
      localState.value.error = null;
    }

    onMounted(() => {
      loadCoaches();
    });

    return {
      isCoach,
      filteredCoaches,
      hasCoaches,
      setFilters,
      loadCoaches,
      isLoading: localState.value.isloading,
      handleError,
      error: localState.value.error,
    };
  },
  components: { CoachItem, BaseButton, BaseCard, CoachFilter, BaseSpinner, BaseDialog },
};
</script>

<template>
    <BaseDialog :show="!!error" title="An error occurred!" @close="handleError">
      <p>{{ error }}</p>
    </BaseDialog>
    <section>
        <CoachFilter @change-filter="setFilters">
        </CoachFilter>
    </section>
    <section>
        <BaseCard>
            <div class="controls">
                <BaseButton mode="outline" @click="_ => loadCoaches(true)">
                    Refresh
                </BaseButton>
                <BaseButton link to="/register">
                    Register as Coach
                </BaseButton>
            </div>
            <div v-if="isLoading">
                <BaseSpinner></BaseSpinner>
            </div>
            <ul v-else-if="hasCoaches">
                <CoachItem 
                    v-for="coach in filteredCoaches" 
                    :key="coach.id" 
                    :id="coach.id"
                    :first-name="coach.firstName"
                    :last-name="coach.lastName"
                    :rate="coach.hourlyRate"
                    :areas="coach.areas"
                >
                </CoachItem>
            </ul>
            <h3 v-else>No coaches found.</h3>
        </BaseCard>
    </section>
</template>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>