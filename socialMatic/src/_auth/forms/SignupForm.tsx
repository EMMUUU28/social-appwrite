import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { createUserAccount } from "@/lib/appwrite/api";
import { appwriteConfig } from "@/lib/appwrite/config";
import { SignupSchema } from "@/lib/validation";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"


const SignupForm = () => {

  

  const form = useForm<z.infer<typeof SignupSchema>>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      name: "",
      username: "",
      email:"",
      password:"",
    },
  })


  async function onSubmit(values: z.infer<typeof SignupSchema>) {
    const newuser = await createUserAccount(values);
    console.log(newuser)
  }


  return (
    
      <Form  {...form}>
        <div className=" sm:w-420     flex-center flex-col  ">
          <img className="sm:mb-5" src="/assets/images/logo.svg" alt=""></img>
          <p className="h3-bold md:h4-bold pt:5  ">Create a new Account</p>
          <p className="text-light-3 pt-4 small-medium md:base-regular ">Enter you details to create a new account</p>
        
      <form  onSubmit={form.handleSubmit(onSubmit)} className=" flex flex-col w-full ">
        <FormField 
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="pb-4">
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input type="text" className="shad-input " placeholder="name" {...field} />
              </FormControl>
              
              <FormMessage className= "text-red"/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="pb-4">
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input type="text"  className=" shad-input" placeholder="" {...field} />
              </FormControl>
              <FormMessage className= "text-red" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="pb-4">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input  className="shad-input" placeholder="example@example.com" {...field} />
              </FormControl>
              <FormMessage className= "text-red" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="pb-4">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input autoComplete="current-password" type="password" className="shad-input"  {...field} />
              </FormControl>
              <FormMessage className= "text-red" />
            </FormItem>
          )}
        />
        <Button className="shad-button_primary w-full "  type="submit">Submit</Button>
        <p className="text-sm text-light-2 text-center mt-2">Already have an account..?  <a className="text-primary-500 text-small-semibold" href="/signin">Log in</a></p>
        
      </form>
      </div>
    </Form>
    
    
  )
}

export default SignupForm