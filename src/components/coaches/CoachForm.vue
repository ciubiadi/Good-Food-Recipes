<script lang="ts">
import { ref } from 'vue';
import BaseButton from '../ui/BaseButton.vue';

  export default {
    setup() {
        const localState = ref({});
        function submitForm() {
            console.log("validate form + send form data and emit the data saving");
        }
        return {
            localState,
            submitForm
        };
    },
    components: { BaseButton }
};
</script>

<template>
    <form @submit.prevent="submitForm">
        <BaseButton>Submit Form</BaseButton>
    </form>
</template>
  
<style scoped>
  .form-control {
    margin: 0.5rem 0;
  }
  
  label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }
  
  input[type='checkbox'] + label {
    font-weight: normal;
    display: inline;
    margin: 0 0 0 0.5rem;
  }
  
  input,
  textarea {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
  }
  
  input:focus,
  textarea:focus {
    background-color: #f0e6fd;
    outline: none;
    border-color: #008d21;
  }
  
  input[type='checkbox'] {
    display: inline;
    width: auto;
    border: none;
  }
  
  input[type='checkbox']:focus {
    outline: #008d23 solid 1px;
  }
  
  h3 {
    margin: 0.5rem 0;
    font-size: 1rem;
  }
  
  .invalid label {
    color: red;
  }
  
  .invalid input,
  .invalid textarea {
    border: 1px solid red;
  }
</style>