<script lang="ts">
import BaseCard from '../components/ui/BaseCard.vue';

export default{
    components: { BaseCard }
}
</script>

<template>
    <section>
        <BaseCard>
            <h2>Page not found</h2>
            <p>
                This page could not be found - maybe check out all our
                <router-link to="/coaches">coaches</router-link>.
                 or our 
                <router-link to="/">meals</router-link>.
            </p>
        </BaseCard>
    </section>
</template>