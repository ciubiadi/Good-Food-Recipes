<script lang="ts">
import { computed, onMounted, ref } from 'vue';
import BaseCard from '../../components/ui/BaseCard.vue';
import { useStore } from 'vuex';

export default{
    components: { BaseCard },
    setup(){
        const store = useStore();

        const isLoading = ref(false);
        const error = ref(null);

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
        <section>
            <BaseCard>
                <header>
                    <h2>Requests Received</h2>
                </header>
                <div v-if="isLoading">Loading...</div>
                <ul v-else-if="hasRequests && !isLoading">
                    <pre>
                        {{receivedRequests}}
                    </pre>
                </ul>
                <h3 v-else>You haven't received any requests yet!</h3>
            </BaseCard>
        </section>
    </div>
</template>