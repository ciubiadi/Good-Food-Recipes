<script lang="ts">
import { computed, onMounted, ref } from 'vue';
import BaseBadge from '../../components/ui/BaseBadge.vue';
import BaseButton from '../../components/ui/BaseButton.vue';
import BaseCard from '../../components/ui/BaseCard.vue';
import { ICoach } from '../../utils/types';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

export default {
    props: {
        id: String
    },
    setup(props){
      const store = useStore();
      const route = useRoute();

      const selectedCoach = ref(null as null | ICoach);

      const fullName = computed(() => {
          return selectedCoach.value ? `${selectedCoach.value?.firstName} ${selectedCoach.value?.lastName}` : ""
      })
      const areas = computed(() => {
        return selectedCoach.value ? selectedCoach.value.areas : [];
      })
      const rate = computed(() => {
        return selectedCoach.value ? selectedCoach.value.hourlyRate : 0;
      })
      const description = computed(() => {
        return selectedCoach.value ? selectedCoach.value.description : '';
      })
      const contactLink = computed(() => {
        return selectedCoach.value ? `${route.path}/${props.id}/contact` : "";
      })

      onMounted(() => {
        selectedCoach.value = store.getters["coaches/coaches"].find(
            (coach: ICoach) => coach.id === route.params.id
        );
      })
      
      return {
        selectedCoach,
        fullName,
        areas,
        rate,
        description,
        contactLink,
        id: props.id
      }
    },
    components: { BaseBadge, BaseCard, BaseButton }
};
</script>

<template>
    <div>
      <section>
        <BaseCard>
          <h2>{{ fullName }}</h2>
          <h3>${{ rate }}/hour</h3>
        </BaseCard>
      </section>
      <section>
        <BaseCard>
          <header>
            <h2>Interested? Reach out now!</h2>
            <BaseButton link :to="contactLink">Contact</BaseButton>
          </header>
          <router-view></router-view>
        </BaseCard>
      </section>
      <section>
        <BaseCard>
          <BaseBadge v-for="area in areas" :key="area" :type="area" :title="area"></BaseBadge>
          <p class="coach-details-description">{{ description }}</p>
        </BaseCard>
      </section>
    </div>
</template>

<style scoped>
.coach-details-description {
  margin-top: 1em;
}
</style>
  
