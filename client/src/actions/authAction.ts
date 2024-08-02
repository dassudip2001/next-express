"use server";
import { REGISTER_URL } from "@/lib/apiEndpoint";
import axios from "axios";
export async function registerAction(formData: FormData) {
  console.log(formData);
  try {
    await axios.post(REGISTER_URL, {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirm_password: formData.get("confirm_password"),
    });
    return { state: 1, message: "Registration successful", errors: {} };
  } catch (error) {
    console.log(error);
  }
}
