// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { bootstrapApplication } from "@angular/platform-browser";
import { App } from "./app/app";
import { routes } from "./app/app.routes";
import { provideRouter } from "@angular/router";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_-i8sgUc9OcgZqdrqak52GkwGOU_P_k4",
  authDomain: "utfcheckapi.firebaseapp.com",
  projectId: "utfcheckapi",
  storageBucket: "utfcheckapi.firebasestorage.app",
  messagingSenderId: "764300684295",
  appId: "1:764300684295:web:5499379d6ce955a722cea2",
  measurementId: "G-BE13YFGE07"
};

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
  ],
});

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);