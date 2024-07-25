"use client"

import { useForm } from "react-hook-form"
import FormButton from "./form-button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

type TAuthFormProps = {
  type: "signIn" | "signUp"
}

export default function AuthForm({ type }: TAuthFormProps) {
  const { getValues, register } = useForm()
  return (
    <form
      action={() => {
        const formData = getValues()

        if (type === "signUp") {
          // TODO SIGN IN FUNCTION WILL GO HERE
        } else if (type === "signIn") {
          // TODO SIGN UP FUNCTION WILL GO HERE
        }
      }}
      className="space-y-5"
    >
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" {...register("email")} type="email" />
      </div>

      <div>
        <Label htmlFor="password">Password</Label>
        <Input id="password" {...register("password")} type="password" />
      </div>

      {type === "signUp" && (
        <div>
          <Label htmlFor="confirmpassword">Confirm password</Label>
          <Input id="confirmpassword" type="password" />
        </div>
      )}

      <FormButton>{type === "signIn" ? "Sign in" : "Sign up"}</FormButton>
    </form>
  )
}
