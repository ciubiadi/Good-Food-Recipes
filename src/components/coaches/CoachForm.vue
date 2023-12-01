<script lang="ts">
import { ref, Ref, watch, SetupContext } from 'vue';
import BaseButton from '../ui/BaseButton.vue';

interface FormData {
  val: string | null | number;
  isValid: boolean;
}

interface Refs {
  firstName: Ref<FormData>;
  lastName: Ref<FormData>;
  description: Ref<FormData>;
  rate: Ref<FormData>;
  areas: Ref<{ val:string[]; isValid: boolean}>;
}

export default {
    emits: ["save-data"],
    setup(_props: unknown, context: SetupContext<[
        "save-data"
    ]>) {
        const refs: Refs = {
            firstName: ref({ val: "", isValid: true }),
            lastName: ref({ val: "", isValid: true }),
            description: ref({ val: "", isValid: true }),
            rate: ref({ val: null, isValid: true } as FormData),
            areas: ref({ val: [], isValid: true }),
        };
        const formIsValid = ref(true);
        const clearValidity = (input: keyof Refs) => {
            const target = refs[input];
            if (target) {
                target.value.isValid = true;
            }
        };
        const validateForm = () => {
            formIsValid.value = true;
            if (refs.firstName.value.val === "") {
                refs.firstName.value.isValid = false;
                formIsValid.value = false;
            }
            if (refs.lastName.value.val === "") {
                refs.lastName.value.isValid = false;
                formIsValid.value = false;
            }
            if (refs.description.value.val === "") {
                refs.description.value.isValid = false;
                formIsValid.value = false;
            }
            if (typeof refs.rate.value.val !== "number" || refs.rate.value.val < 0) {
                refs.rate.value.isValid = false;
                formIsValid.value = false;
            }
            if (refs.areas.value.val.length === 0) {
                refs.areas.value.isValid = false;
                formIsValid.value = false;
            }
        };
        const submitForm = () => {
            validateForm();
            if (!formIsValid.value) {
                return;
            }
            const formData = {
                first: refs.firstName.value.val,
                last: refs.lastName.value.val,
                desc: refs.description.value.val,
                rate: refs.rate.value.val,
                areas: refs.areas.value.val,
            };
            context.emit("save-data", formData);
        };
        // Watch for changes in reactive values and clear validity when the input changes
        watch([refs.firstName, refs.lastName, refs.description, refs.rate, refs.areas], () => {
            clearValidity("firstName");
            clearValidity("lastName");
            clearValidity("description");
            clearValidity("rate");
            clearValidity("areas");
        });
        return {
            ...refs,
            formIsValid,
            clearValidity,
            submitForm,
        };
    },
    components: { BaseButton }
};
</script>

<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !firstName.isValid }">
      <label for="firstname">Firstname</label>
      <input
        type="text"
        id="firstname"
        v-model.trim="firstName.val"
        @blur="clearValidity('firstName')"
      />
      <p v-if="!firstName.isValid">Firstname must not be empty.</p>
    </div>
    <div class="form-control" :class="{ invalid: !lastName.isValid }">
      <label for="lastName">Lastname</label>
      <input
        type="text"
        id="lastName"
        v-model.trim="lastName.val"
        @blur="clearValidity('lastName')"
      />
      <p v-if="!lastName.isValid">Lastname must not be empty.</p>
    </div>
    <div class="form-control" :class="{ invalid: !description.isValid }">
      <label for="description">Description</label>
      <input
        type="text"
        id="description"
        v-model.trim="description.val"
        @blur="clearValidity('description')"
      />
      <p v-if="!description.isValid">Description must not be empty.</p>
    </div>
    <div class="form-control" :class="{ invalid: !rate.isValid }">
      <label for="rate">Rate</label>
      <input
        type="number"
        id="rate"
        v-model.trim="rate.val"
        @blur="clearValidity('rate')"
      />
      <p v-if="!rate.isValid">Rate must not be empty.</p>
    </div>
    <div class="form-control" :class="{invalid: !areas.isValid}">
      <h3>Areas of Expertise</h3>
      <div>
        <input
          type="checkbox"
          id="vegan"
          value="vegan"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="vegan">Vegan Food</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="mexican"
          value="mexican"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="mexican">Mexican Food</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="indian"
          value="indian"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="indian">Indian Food</label>
      </div>
      <p v-if="!areas.isValid">At least one expertise must be selected.</p>
    </div>
    <p v-if="!formIsValid">Please fix the above errors and submit again.</p>
    <BaseButton>Register</BaseButton>
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
  border-color: #008d44;
}

input[type='checkbox'] {
  display: inline-block;
  width: 15px;
  height: 15px;
}

input[type='checkbox']:focus {
  outline: #008d49 solid 1px;
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