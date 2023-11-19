<script lang="ts">
export default {
    props: ['id', 'firstName', 'lastName', 'rate', 'areas'],
    computed: {
        fullName() {
            return this.firstName + ' ' + this.lastName;
        },
        coachContactLink(){
            return this.$route.path + '/' + this.id + '/contact';
        },
        coachDetailsLink(){
            return this.$route.path + '/' + this.id;
        }
    }
}
</script>

<template>
    <li>
        <h3>{{ fullName }}</h3>
        <h4>${{ rate }}/hour</h4>
        <div>
            <span v-for="area in areas" :key="area.id">
                {{ area }}
            </span>
        </div>
        <div class="actions">
            <router-link :to="coachContactLink">Contact</router-link>
            <router-link :to="coachDetailsLink">View Details</router-link>
        </div>
    </li>
</template>

<style scoped>
</style>