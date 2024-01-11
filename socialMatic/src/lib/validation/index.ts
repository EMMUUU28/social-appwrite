import * as z from "zod"


export const SignupSchema = z.object({
    name: z.string().min(2,{ message : " Too Short "}),
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().email({message:"Should be a valid email"}),
    password: z.string().min(8,{message:"Length is too short"}),
  })