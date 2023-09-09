import { createApp } from 'vue';
import { createPinia } from 'pinia';

// Styling
import './style.css';
import './style.scss';
import * as bootstrap from 'bootstrap';

import router from './router';
import App from './App.vue';

// Firebase
import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';

/* code from our Firebase console */
const firebaseConfig = {
  apiKey: "AIzaSyCADDPZK38h6kXH87DX54hCMRDPPsFgQdM",
  authDomain: "vue-firestore-yarn.firebaseapp.com",
  projectId: "vue-firestore-yarn",
  storageBucket: "vue-firestore-yarn.appspot.com",
  messagingSenderId: "606075661395",
  appId: "1:606075661395:web:309af8b5f96980d457aaa6",
  measurementId: "G-KGJGH9SD9E"
};

// Initialize Firebase
initializeApp(firebaseConfig)

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);

app.mount('#app');

