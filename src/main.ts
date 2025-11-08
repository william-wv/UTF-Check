import { bootstrapApplication } from '@angular/platform-browser';
import { appConfigComponent } from './app/app.config.component';
import { App } from './app/app';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyC_-i8sgUc9OcgZqdrqak52GkwGOU_P_k4",
  authDomain: "utfcheckapi.firebaseapp.com",
  projectId: "utfcheckapi",
  storageBucket: "utfcheckapi.firebasestorage.app",
  messagingSenderId: "764300684295",
  appId: "1:764300684295:web:9f567fe670d69ebb22cea2",
  measurementId: "G-5ZLCJT39LC"
};

bootstrapApplication(App, appConfigComponent)
  .catch((err) => console.error(err));

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);