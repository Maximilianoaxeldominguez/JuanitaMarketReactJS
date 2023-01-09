import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyB8rxUFK-RHvaJWsKpBSv7OD67ninA6qxU",
  authDomain: "juanitamarket-82a46.firebaseapp.com",
  projectId: "juanitamarket-82a46",
  storageBucket: "juanitamarket-82a46.appspot.com",
  messagingSenderId: "1074479856014",
  appId: "1:1074479856014:web:bafcd7524398de5e32ccdf",
  measurementId: "G-2VRV9YHE63"
};


const app = initializeApp(firebaseConfig);

export const initFirestore = () => app

const analytics = getAnalytics(app);



