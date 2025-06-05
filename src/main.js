import '@/assets/css/main.css';

import {createApp} from 'vue';
import App from '@/App.vue';
import router from '@/router';

const app = createApp(App);

router.isReady().then(() => {
  const redirectUrl = localStorage.getItem('redirectUrl');
  if (redirectUrl) {
    router.push(redirectUrl);
    localStorage.removeItem('redirectUrl');
  }
});

app.use(router);

app.mount('#app');
