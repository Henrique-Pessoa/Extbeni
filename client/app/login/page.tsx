"use client";
import { useState } from "react";
import { tree } from "next/dist/build/templates/app-page";

export default function Home() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <main className="w-screen h-screen max-h-max bg-slate-200 flex items-center flex-col">
      <h1 className="text-5xl mt-5">Crie sua conta e apoie a causa</h1>
      <div className="bg-emerald-100 w-[50rem] flex-wrap h-[40rem] mt-16 rounded-3xl border-4 border-black flex flex-col content-center justify-center text-center gap-10">
        <h2 className="text-3xl font-bold">Login</h2>
        <input
          type="text"
          placeholder="Name"
          className="w-80 h-10 rounded-lg outline-none border-b-2 border-black text-center font-extrabold text-emerald-800"
          onChange={(e: any) => setName(e.target.value)}
        />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="w-80  h-10 rounded-lg  outline-none  border-b-2 border-black text-center font-extrabold text-emerald-900"
          onChange={(e: any) => setPassword(e.target.value)}
        />
        <button className="w-44 font-mono bg-emerald-600 rounded-xl h-12 ml-20">
          Logar
        </button>
        <p className="font-mono text-2xl">
          Não tem uma conta?{" "}
          <a className="underline font-bold text-2xl">Registrar</a>
        </p>
      </div>
    </main>
  );
}
