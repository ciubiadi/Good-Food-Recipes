<script lang="ts">
import { computed, onMounted, ref } from 'vue';
import BaseCard from '../../components/ui/BaseCard.vue';
import { useStore } from 'vuex';
import BaseDialog from '../../components/ui/BaseDialog.vue';
import RequestItem from '../../components/requests/RequestItem.vue';
import BaseSpinner from '../../components/ui/BaseSpinner.vue';

export default{
    components: { BaseCard, BaseDialog, BaseSpinner, RequestItem },
    setup(){
        const store = useStore();

        const isLoading = ref(false);
        const error = ref<string | null>(null);

        const receivedRequests = computed(() => {
            return store.getters['requests/requests'];
        })
        const hasRequests = computed(() => {
            return store.getters['requests/hasRequests']
        })

        // METHODS
        async function loadRequests() {
            isLoading.value = true;
            
            try {
                await store.dispatch('requests/fetchRequests');
            } catch(error: any){
                error.value = error.message || 'Something failed!';
            }

            isLoading.value = false;
        }

        function handleError() {
            error.value = null;
        }

        onMounted(() => {
            loadRequests();
        })

        return {
            isLoading,
            error,
            receivedRequests,
            hasRequests,
            loadRequests,
            handleError
        }
    }
}
</script>

<template>
    <div>
      <BaseDialog :show="!!error" title="An error occurred!" @close="handleError">
        <p>{{ error }}</p>
      </BaseDialog>
      <section>
        <BaseCard>
          <header>
            <h2>Requests Received</h2>
          </header>
          <BaseSpinner v-if="isLoading"></BaseSpinner>
          <ul v-else-if="hasRequests && !isLoading">
            <RequestItem
              v-for="req in receivedRequests"
              :key="req.id"
              :email="req.userEmail"
              :message="req.message"
            ></RequestItem>
          </ul>
          <h3 v-else>You haven't received any requests yet!</h3>
        </BaseCard>
      </section>
    </div>
  </template>