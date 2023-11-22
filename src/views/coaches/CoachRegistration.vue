<script lang="ts">
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import CoachForm from '../../components/coaches/CoachForm.vue';
import BaseCard from '../../components/ui/BaseCard.vue';

export default{
    setup() {
        const store = useStore();
        const router = useRouter();
        
        function saveData(data: any) {
            store.dispatch("coaches/registerCoach", data);
            router.push("coaches");
        }
        
        return {
            saveData
        };
    },
    components: { CoachForm, BaseCard }
}
</script>

<template>
    <section>
        <BaseCard>
            <h2>Register as a coach now!</h2>
            <CoachForm @save-data="saveData"></CoachForm>
        </BaseCard>
    </section>
</template>