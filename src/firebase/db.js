import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCS3jL7q07On15cRhgrSkomuHOoeCg59L8",
  authDomain: "mtm6404-contact-book-rea-2e35d.firebaseapp.com",
  projectId: "mtm6404-contact-book-rea-2e35d",
  storageBucket: "mtm6404-contact-book-rea-2e35d.firebasestorage.app",
  messagingSenderId: "802205212590",
  appId: "1:802205212590:web:43f901d4f4138b3111323f",
  measurementId: "G-T24TB857C9"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);