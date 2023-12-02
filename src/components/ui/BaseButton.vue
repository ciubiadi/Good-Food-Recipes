<script lang="ts">
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null
    },
    link: {
      type: Boolean,
      required: false,
      default: false
    },
    to: {
      type: String,
      required: false,
      default: '/'
    },
    isTrueLink: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<template>
    <button v-if="!link" :class="mode">
      <slot></slot>
    </button>
    <template v-else>
      <a v-if="isTrueLink" :href="to" :class="mode">
        <slot></slot>
      </a>
      <router-link v-else :to="to" :class="mode">
        <slot></slot>
      </router-link>
    </template>
    
  </template>
  
  <style scoped>
  button,
  a {
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    font: inherit;
    background-color: #006100;
    @apply border-[0.1rem];
    border-color: #356100;
    /* border: 1px solid #3a0061; */
    color: white;
    cursor: pointer;
    /* border-radius: 30px; */
    @apply rounded-md;
    margin-right: 0.5rem;
    display: inline-block;
  }
  
  a:hover,
  a:active,
  button:hover,
  button:active {
    background-color: #264100;
    border-color: #004117;
  }
  
  .flat {
    background-color: transparent;
    /* color: #00610b; */
    /* border: none; */
    @apply px-4 py-2 border-2 border-green-500 rounded-md text-blue-900 hover:bg-green-200 hover:border-green-300 transition-colors text-sm
  }
  
  .outline {
    background-color: transparent;
    border-color: #044100;
    color: #2f4100;
  }
  
  .flat:hover,
  .flat:active,
  .outline:hover,
  .outline:active {
    background-color: #d2ffdd;
  }
  </style>