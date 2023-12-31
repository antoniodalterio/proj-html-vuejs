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
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPinterestP } from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(
  faPhone,
  faFacebookF,
  faXTwitter,
  faPinterestP,
  faMagnifyingGlass,
  faCheck,
  faQuoteLeft,
  faCircle
);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
