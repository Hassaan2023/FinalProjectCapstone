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
  export const PostValidation = z.object({
    caption: z.string().min(5, { message: "Minimum 5 characters." }).max(2200, { message: "Maximum 2,200 caracters" }),
    file: z.custom<File[]>(),
    location: z.string().min(1, { message: "This field is required" }).max(1000, { message: "Maximum 1000 characters." }),
    tags: z.string(),
  });