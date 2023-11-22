<script lang="ts">
import { computed, onMounted, ref } from 'vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';
import CoachItem from '../../components/coaches/CoachItem.vue';
import BaseButton from '../../components/ui/BaseButton.vue';
import BaseCard from '../../components/ui/BaseCard.vue';
// import store from '../../store';
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore();
        
        const localState = ref({
            isloading: false,
            error: null,
            activeFilters: {
                mexican: true,
                vegan: false,
                chinese: false,
                indian: false
            }
        })
        
        const isCoach = computed(() => store.getters['coaches/isCoach']);
        const filteredCoaches = computed(() => store.getters['coaches/coaches'])
        const hasCoaches = computed(() => !localState.value.isloading && store.getters['coaches/hasCoaches']);
    
        function setFilters(updatedFilters : any) {
            localState.value.activeFilters = updatedFilters;
        }

        async function loadCoaches(refresh = false) {
            localState.value.isloading = true;
            try {
                console.log('refresh', refresh)
                // await store.dispatch('coaches/loadCoaches', {
                //     forceRefresh: refresh,
                // });
            } catch (error: any) {
                localState.value.error = error.message || 'Something went wrong!';
            }
            localState.value.isloading = false;
        }
        
        onMounted(() => {
            loadCoaches();
        })

        return {
            isCoach,
            filteredCoaches,
            hasCoaches,
            setFilters,
            loadCoaches,
            isLoading: localState.value.isloading
        }
    },
    components: { CoachItem, BaseButton, BaseCard, CoachFilter }
}
</script>

<template>
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
                Loading...
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