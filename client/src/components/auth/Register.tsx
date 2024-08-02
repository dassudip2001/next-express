import { registerAction } from "@/actions/authAction";
import { SubmitButton } from "@/components/common/submitBtn";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "lucide-react";
// import { useFormStatus } from "react-dom";

export default function Register() {
  // const initialState = {
  //     state:0,
  //     message:"",
  //     errors:{}
  // };

  // const [state, formAction] = useFormStatus(registerAction, initialState);

  return (
    <>
      <form action={registerAction}>
        {/* name */}
        <div className="mt-4">
          <Label htmlFor="name">Name</Label>
          <Input
            type="name"
            name="name"
            id="name"
            placeholder="Enter your name"
          />
        </div>
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
        <div className="mt-4">
          <Label htmlFor="password">Confirm Password</Label>
          <Input
            type="password"
            id="password"
            name="confirm_password"
            placeholder="Enter  Password Confirmation"
          />
        </div>
        <div className="text-right font-bold">
          <Link href="/register" className="">
            Forgot Password
          </Link>
        </div>
        <div className="mt-4">
          {/* <Button type="submit" className="w-full">
              Login
            </Button> */}
          <SubmitButton />
        </div>
      </form>
    </>
  );
}
