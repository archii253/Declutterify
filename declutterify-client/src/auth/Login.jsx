import { useState } from "react";
import { auth, googleProvider } from "./FirebaseConfig";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const loginEmail = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, pass);
    } catch (err) {
      alert(err.message);
    }
  };

  const loginGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto text-center">
      <h2 className="text-2xl mb-4 font-semibold">Login to Declutterify</h2>
      <input
        className="block w-full mb-2 border p-2 rounded"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="block w-full mb-2 border p-2 rounded"
        type="password"
        placeholder="Password"
        onChange={(e) => setPass(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 w-full mb-2 rounded"
        onClick={loginEmail}
      >
        Login
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 w-full rounded"
        onClick={loginGoogle}
      >
        Login with Google
      </button>
    </div>
  );
}