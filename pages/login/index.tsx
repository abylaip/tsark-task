import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "graphql/mutations";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser, loading] = useMutation(LOGIN, {
    variables: {
      email: email,
      password: password,
    },
    onCompleted: (data) => {
      console.log(data);
    },
    onError: (data) => {
      alert(data);
    },
  });

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center space-y-2">
      <div className="block text-4xl uppercase text-purple-600 font-extrabold">
        <p>Tsarka</p>
        <p>Frontend</p>
        <p>Task</p>
      </div>
      <div className="p-5 lg:p-10 rounded-xl shadow-2xl shadow-violet-300 w-11/12 lg:w-4/12 space-y-4">
        <section className="flex justify-center">
          <h1 className="text-4xl font-extrabold text-slate-800">
            Вход в Tsarka
          </h1>
        </section>
        <section className="space-y-2">
          <p className="font-thin">Email</p>
          <input
            type="email"
            className="w-full p-3 rounded-lg bg-purple-50 outline-none border border-white focus:border-purple-600 focus:bg-white"
            placeholder="username@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </section>
        <section className="space-y-2">
          <p className="font-thin">Password</p>
          <input
            type="password"
            className="w-full p-3 rounded-lg bg-purple-50 outline-none border border-white focus:border-purple-600 focus:bg-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </section>
        <section>
          <button
            onClick={() => loginUser()}
            className="w-full p-3 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-lg"
          >
            Sign in
          </button>
        </section>
      </div>
    </div>
  );
};

export default LoginPage;

// header
// nav
// footer
// section *
// main
// article *
// aside
// figure
// mark
// address
// time
