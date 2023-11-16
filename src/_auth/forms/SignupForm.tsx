import { zodResolver } from "@hookform/resolvers/zod"
import { Link, useNavigate } from 'react-router-dom'

import { useForm } from "react-hook-form"
import {Form, FormControl, FormField, FormItem, FormLabel,FormMessage,} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SignupValidation } from "@/lib/validation"
import { z } from "zod"
import { User } from "lucide-react"
import { useCreateUserAccount, useSignInAccount } from "@/lib/react-query/queriesAndMutations"
import { useUserContext } from "@/context/AuthContext"

const SignupForm = () => {
  const { checkAuthUser, isLoading: isUserLoading } = useUserContext();
  const navigate = useNavigate();
  
  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name: '',
      username: '',
      email:'',
      password:''
    },
  })
  
  const { mutateAsync: createUserAccount, isPending: isCreatingUser } = useCreateUserAccount();
  const { mutateAsync: signInAccount, isPending: isSigningInUser } = useSignInAccount();
  
  async function onSubmit(values: z.infer<typeof SignupValidation>) {
   const newUser = await createUserAccount(values);

  if(!newUser) {
    return;
  }

  const session = await signInAccount({
    email: values.email,
    password: values.password,
  });

  if(!session){
    return
  }

    const isLoggedIn = await checkAuthUser();

    if(isLoggedIn) {
      form.reset();

      navigate('./')
    } else {
      return 
    }

  }
  return (
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col">
      <img src="/public/images/Monalisa.jpg" alt="logo" /> 
        <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">
          New Here? Create An Account, We'd Love To Have You! 
        </h2>
        <p className="text-light-3 small-medium md:base-regular mt-2">
          Enter details below.
        </p>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5 w-full mt-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">Name</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">Username</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">Email</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">Password</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="">
              {isCreatingUser ? (
                <div className="flex-center gap-2">
                  Loading...
                </div>
              ): "Sign up"}
          </Button>

          <p className="text-small-regular text-light-2 text-center mt-2">
            Already have an account?
            <Link to="/sign-in" className="text-primary-500 text-small-semibold ml-1">Log In</Link>
          </p>
        </form>
      </div>
    </Form>
  )
}

export default SignupForm