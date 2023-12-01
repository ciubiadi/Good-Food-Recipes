<!-- <script setup lang="ts">
</script>

<template>
  <router-view />
</template>

<style scoped>

</style> -->
<script>
export default {
  computed: {
    didAutoLogout() {
      return this.$store.getters.didAutoLogout;
    }
  },
  created() {
    this.$store.dispatch('tryLogin');
  },
  watch: {
    didAutoLogout(curValue, oldValue) {
      if (curValue && curValue !== oldValue) {
        this.$router.replace('/coaches');
      }
    }
  }
}
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
