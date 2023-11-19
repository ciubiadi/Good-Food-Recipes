<script lang="ts">
import BaseBadge from '../../components/ui/BaseBadge.vue';
import BaseButton from '../../components/ui/BaseButton.vue';
import BaseCard from '../../components/ui/BaseCard.vue';
import { ICoach } from '../../utils/types';

export default {
    props: {
        id: String
    },
    data() {
        return {
            selectedCoach: null as null | ICoach,
        };
    },
    computed: {
        fullName() {
            return this.selectedCoach ? `${this.selectedCoach.firstName} ${this.selectedCoach.lastName}` : "";
        },
        areas() {
            return this.selectedCoach ? this.selectedCoach.areas : [];
        },
        rate() {
            return this.selectedCoach ? this.selectedCoach.hourlyRate : 0;
        },
        description() {
            return this.selectedCoach ? this.selectedCoach.description : "";
        },
        contactLink() {
            return this.selectedCoach ? `${this.$route.path}/${this.id}/contact` : "";
        },
    },
    created() {
        this.selectedCoach = this.$store.getters["coaches/coaches"].find((coach: ICoach) => coach.id === this.id);
    },
    mounted() {
        console.log("this.selectedCoach", this.selectedCoach);
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
          <p>{{ description }}</p>
        </BaseCard>
      </section>
    </div>
  </template>
  
