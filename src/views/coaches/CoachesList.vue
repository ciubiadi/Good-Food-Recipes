<script lang="ts">
import { computed, ref } from 'vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';
import CoachItem from '../../components/coaches/CoachItem.vue';
import BaseButton from '../../components/ui/BaseButton.vue';
import BaseCard from '../../components/ui/BaseCard.vue';
// import store from '../../store';
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore();
        const activeFilters = ref({
            mexican: true,
            vegan: false,
            chinese: false,
            indian: false
        })
        
        const filteredCoaches = computed(() => store.getters['coaches/coaches'])
        const hasCoaches = computed(() => store.getters['coaches/hasCoaches']);
    
        function setFilters(updatedFilters : any) {
            activeFilters.value = updatedFilters;
        }

        return {
            filteredCoaches,
            hasCoaches,
            setFilters
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
                <BaseButton>Refresh</BaseButton>
                <BaseButton link to="/register">Register as Coach</BaseButton>
            </div>
            <ul v-if="hasCoaches">
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