import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBMAjKQWqJJz3naup8LLVCMxKXIDx5bbKw",
  authDomain: "declutterify-17554.firebaseapp.com",
  projectId: "declutterify-17554",
  storageBucket: "declutterify-17554.firebasestorage.app",
  messagingSenderId: "1026024274879",
  appId:"1:1026024274879:web:b39eceecf6deaab2f07f0a",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, storage };