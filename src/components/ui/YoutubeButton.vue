<script lang="ts">
export default {
  props: {
    href: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>

<template>
  <a
    class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
    :href="href"
    target="_blank"
  >
    <fa :icon="['fab', 'youtube']" class="mr-2" />
    <slot>Watch on YouTube</slot>
  </a>
</template>