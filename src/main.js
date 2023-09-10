import { createApp } from 'vue';
import { createPinia } from 'pinia';

// Styling
import './style.css';
import './style.scss';
import * as bootstrap from 'bootstrap'; // let this be

import router from './router';
import App from './App.vue';

// Firebase
import { initializeApp } from 'firebase/app';

/* code from our Firebase console */
// More info: https://vitejs.dev/guide/env-and-mode.html
const firebaseConfig = {
	apiKey: import.meta.env.VITE_API_KEY,
	authDomain: import.meta.env.VITE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_APP_ID,
	measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

// Initialize Firebase
initializeApp(firebaseConfig)

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);

app.mount('#app');

