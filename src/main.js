import { createApp } from 'vue';
import './assets/scss/style.scss';
import App from './App.vue';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */

/* add icons to the library */
library.add().component('font-awesome-icon', FontAwesomeIcon);

createApp(App).mount('#app');
