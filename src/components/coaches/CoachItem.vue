<script lang="ts">
import { computed } from 'vue';
import BaseBadge from '../ui/BaseBadge.vue';
import BaseButton from '../ui/BaseButton.vue';
import { useRoute } from 'vue-router';

export default {
    props: ["id", "firstName", "lastName", "rate", "areas"],
    setup(props) {
        const route = useRoute();
        const fullName = computed(() => `${props.firstName} ${props.lastName}`)
        const coachContactLink = computed(() => `${route.path}/${props.id}/contact`)
        const coachDetailsLink = computed(() => `${route.path}/${props.id}`)

        return {
            fullName,
            coachContactLink,
            coachDetailsLink,
        }
    },
    components: { BaseBadge, BaseButton }
}
</script>

<template>
    <li>
        <h3>{{ fullName }}</h3>
        <h4>${{ rate }}/hour</h4>
        <div>
            <BaseBadge v-for="area in areas" :key="area" :type="area" :title="area"></BaseBadge>
        </div>
        <div class="actions">
            <router-link :to="coachContactLink">
              <BaseButton mode="outline" :to="coachContactLink">
                  Contact
              </BaseButton>
            </router-link>
            <router-link :to="coachDetailsLink">
              <BaseButton link :to="coachDetailsLink">
                  View Details
              </BaseButton>
            </router-link>
        </div>
    </li>
</template>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
  margin-top:1rem;
}
</style>