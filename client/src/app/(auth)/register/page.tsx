"use client";
import Register from "@/components/auth/Register";
import Link from "next/link";
export default function register() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[500px] bg-white rounded-xl py-5 px-10">
        <h1 className="text-4xl text-center font-bold text- bg-gradient-to-r from-pink-400 to-purple-300 text-transparent bg-clip-text">
          Clash of Clans
        </h1>
        <h1 className="mt-3 font-bold text-3xl">Login</h1>
        <p>Welcome back</p>
        <Register />
        <p className="text-center mt-2">
          Already have an account ?{" "}
          <strong>
            <Link href="/login">Login</Link>{" "}
          </strong>{" "}
        </p>
      </div>
    </div>
  );
}
