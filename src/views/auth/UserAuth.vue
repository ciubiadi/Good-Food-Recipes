<script lang="ts">
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import BaseDialog from '../../components/ui/BaseDialog.vue';
import BaseCard from '../../components/ui/BaseCard.vue';
import BaseButton from '../../components/ui/BaseButton.vue';
import BaseSpinner from '../../components/ui/BaseSpinner.vue';

export default {
    setup() {
        const store = useStore();
        const router = useRouter();
        const email = ref("");
        const password = ref("");
        const formIsValid = ref(true);
        const mode = ref("login");
        const isLoading = ref(false);
        const error = ref<string | null>(null);
        const submitButtonCaption = computed(() => (mode.value === "login" ? "Login" : "Signup"));
        const switchModeButtonCaption = computed(() => mode.value === "login" ? "Signup instead" : "Login instead");
        const submitForm = async () => {
            formIsValid.value = true;
            if (email.value === "" || !email.value.includes("@") || password.value.length < 6) {
                formIsValid.value = false;
                return;
            }
            isLoading.value = true;
            const actionPayload = {
                email: email.value,
                password: password.value,
            };
            try {
                if (mode.value === "login") {
                    await store.dispatch("login", actionPayload);
                }
                else {
                    await store.dispatch("signup", actionPayload);
                }
                const redirectUrl = "/" + (router.currentRoute.value.query.redirect || "coaches");
                router.replace(redirectUrl);
            }
            catch (err: any) {
                error.value = err.message || "Failed to authenticate, try later.";
            }
            isLoading.value = false;
        };
        const switchAuthMode = () => {
            mode.value = mode.value === "login" ? "signup" : "login";
        };
        const handleError = () => {
            error.value = null;
        };
        return {
            email,
            password,
            formIsValid,
            mode,
            isLoading,
            error,
            submitButtonCaption,
            switchModeButtonCaption,
            submitForm,
            switchAuthMode,
            handleError,
        };
    },
    components: { BaseDialog, BaseCard, BaseButton, BaseSpinner }
};
</script>

<template>
    <div>
      <BaseDialog :show="!!error" title="An error occurred" @close="handleError">
        <p>{{ error }}</p>
      </BaseDialog>
      <BaseDialog :show="isLoading" title="Authenticating..." fixed>
        <BaseSpinner></BaseSpinner>
      </BaseDialog>
      <BaseCard>
        <form @submit.prevent="submitForm">
          <div class="form-control">
            <label for="email">E-Mail</label>
            <input type="email" id="email" v-model.trim="email" />
          </div>
          <div class="form-control">
            <label for="password">Password</label>
            <input type="password" id="password" v-model.trim="password" />
          </div>
          <p v-if="!formIsValid">
            Please enter a valid email and password (must be at least 6 characters long).
          </p>
          <div class="buttons-section">
            <BaseButton>
                {{ submitButtonCaption }}
            </BaseButton>
            <BaseButton type="button" mode="flat" @click="switchAuthMode">
                {{ switchModeButtonCaption }}
            </BaseButton>
          </div>
          
        </form>
      </BaseCard>
    </div>
  </template>
  
  <style scoped>
  form {
    margin: 1rem;
    padding: 1rem;
  }
  
  .form-control {
    margin: 0.5rem 0;
  }
  
  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
  }
  
  input,
  textarea {
    display: block;
    width: 100%;
    font: inherit;
    border: 1px solid #ccc;
    padding: 0.15rem;
  }
  
  input:focus,
  textarea:focus {
    border-color: #008d38;
    background-color: #faf6ff;
    outline: none;
  }

  .buttons-section {
    display:flex;
    justify-content: space-between;
  }
  </style>
  