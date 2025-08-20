"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../lib/firebase";
import Cookies from "js-cookie";
import Wrapper from "../../../components/Wrapper";
const AdminLogin = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");       // store user email
  const [password, setPassword] = useState(""); // store password
  const [error, setError] = useState("");       // store error messages

  // Function called on form submission
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // prevent page reload

    try {
      // Authenticate with Firebase
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      // Get Firebase ID token
      const idToken = await userCredential.user.getIdToken();

      // Store ID token in a secure cookie (expires in 1 hour)
      Cookies.set("admin-token", idToken, { expires: 1, sameSite: "strict" });

      // Redirect to dashboard
      router.push("/admin/dashboard");
    } catch (err: any) {
      console.error(err);
      setError("Invalid email or password"); // show error message
    }
  };

  return (
    <div>
      <Wrapper>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <label className="block mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full border px-3 py-2 rounded mb-4"
          required
        />

        <label className="block mb-2">Password</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full border px-3 py-2 rounded mb-6"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
    </Wrapper>
    </div>
  );
};

export default AdminLogin;
