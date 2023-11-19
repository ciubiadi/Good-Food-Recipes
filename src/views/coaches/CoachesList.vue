<script lang="ts">
import CoachItem from '../../components/CoachItem.vue';

export default {
    computed: {
        filteredCoaches() {
            return this.$store.getters["coaches/coaches"];
        },
        hasCoaches() {
            return this.$store.getters["coaches/hasCoaches"];
        }
    },
    components: { CoachItem }
}
</script>

<template>
    <section>
        FILTER
    </section>
    <section>
        <div class="controls">
            <button>Refresh</button>
            <router-link to="/register">Register as Coach</router-link>
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
    </section>
</template>

<style scoped>

</style>