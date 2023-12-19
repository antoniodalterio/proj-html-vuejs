import { createApp } from 'vue';
// file scss
import './assets/scss/style.scss';

// Font nunito
import '@fontsource/nunito';

import App from './App.vue';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */

/* add icons to the library */
library.add();

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
