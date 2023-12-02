<!-- <script setup lang="ts">
</script>

<template>
  <router-view />
</template> -->
<script lang="ts">
import { computed, watch, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const didAutoLogout = computed(() => {
      return store.getters.didAutoLogout;
    });

    onMounted(() => {
      store.dispatch('tryLogin');
    });

    watch(didAutoLogout, (curValue, oldValue) => {
      if (curValue && curValue !== oldValue) {
        router.replace('/coaches');
      }
    });

    return {
      didAutoLogout,
    };
  },
};
</script>

<template>
  <router-view v-slot="slotProps">
    <!-- <transition name="route" mode="out-in"> -->
      <component :is="slotProps.Component"></component>
    <!-- </transition> -->
  </router-view>
</template>

<style scoped>

</style>