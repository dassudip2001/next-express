import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function login() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[500px] bg-white rounded-xl py-5 px-10">
        <h1 className="text-4xl  font-bold text- bg-gradient-to-r from-pink-400 to-purple-300 text-transparent bg-clip-text">
          Clash of Clans
        </h1>
        <h1 className="mt-3 font-bold text-3xl">Login</h1>
        <p>WelCome back</p>
        <form action="">
          <div className="mt-4">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mt-4">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your Password"
            />
          </div>
          <div className="text-right font-bold">
            <Link href="/register" className="">
              Forgot Password
            </Link>
          </div>
          <div className="mt-4">
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
        </form>
        <p className="text-center mt-2">
          Dont have an account ?{" "}
          <strong>
            <Link href="/register">Register</Link>{" "}
          </strong>{" "}
        </p>
      </div>
    </div>
  );
}
