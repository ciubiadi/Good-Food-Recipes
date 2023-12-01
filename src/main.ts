import { createApp } from 'vue'

import router from './router'
import store from './store';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import PrimeVue from 'primevue/config';
import './style.css'
import App from './App.vue'
import BaseCard from './components/ui/BaseCard.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import BaseButton from './components/ui/BaseButton.vue';

library.add(fas, fab);

createApp(App)
    .use(router)
    .use(store)
    .use(PrimeVue)
    .component('base-badge', BaseBadge)
    .component('base-button', BaseButton)
    .component('base-card', BaseCard)
    .component('fa', FontAwesomeIcon)
    .mount('#app')
