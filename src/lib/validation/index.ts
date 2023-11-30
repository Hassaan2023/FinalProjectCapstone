import * as z from "zod"

// USER
//username and password requirments for signup 

export const SignupValidation = z.object({
    name: z.string().min(6, { message: "Minimum 6 characters required." }),
    username: z.string().min(6, { message: "Minimum 6 characters required." }),
    email: z.string().email(),
    password: z.string().min(4, { message: "Minimum 4 characters required" }),
  });

  export const SigninValidation = z.object({
    email: z.string().email(),
    password: z.string().min(4, { message: "Minimum 4 characters required" }),
  });
