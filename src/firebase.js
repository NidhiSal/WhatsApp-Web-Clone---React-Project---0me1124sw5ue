
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDN9GJIpOvpFGbarHSSJFAhf9_rp2AvOQ8",
  authDomain: "whatsapp-web-clone-8abe7.firebaseapp.com",
  projectId: "whatsapp-web-clone-8abe7",
  storageBucket: "whatsapp-web-clone-8abe7.appspot.com",
  messagingSenderId: "62464040310",
  appId: "1:62464040310:web:0583cce45d47610ebaee57"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
