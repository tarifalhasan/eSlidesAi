"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
const FormSchema = z.object({
  title: z.string().min(2, {
    message: "title must be at least 2 characters.",
  }),
  major_field: z.string().min(5, {
    message: "Major/field of the presentation must be at least 5 characters.",
  }),
  keywords: z.string().min(2, {
    message: "Please add at least 2 keywords",
  }),
  presentation_topic: z
    .string()
    .min(10, {
      message: "Presentation topic must be at least 10 characters.",
    })
    .max(100, {
      message: "Presentation topic must be at most 100 characters.",
    }),
});

import AuthenticHeader from "@/components/layout/AuthenticHeader";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AnswerSomeQuestion = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      major_field: "",
      keywords: "",
      presentation_topic: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);

    // Simulating a delay (you can replace this with your fetch logic)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Perform your API call or any other action
    // await fetch("/api/submit", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // });

    setIsLoading(false);
    router.push("/add-your-resources");
  }
  return (
    <div className="space-y-5 h-full bg-gradient1 bg-cover w-full  bg-no-repeat xl:space-y-10 min-h-screen flex flex-col">
      <AuthenticHeader />
      <div className=" container max-w-[525px]">
        <div className="space-y-3">
          <p className="text-base  text-center opacity-30">Step 1/2</p>
          <h3 className="heading1 text-center">Answer some questions</h3>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title of the presentation</FormLabel>
                  <FormControl>
                    <Input placeholder="History of Democracy" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="major_field"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Major/field of the presentation</FormLabel>
                  <FormControl>
                    <Input placeholder="World History" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="keywords"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Key words</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="History, democracy, etc..."
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Separated by commas.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="presentation_topic"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Topic of the presentation</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Democracy is generally associated with the efforts of the ancient Greeks, whom 18th-century intellectuals considered the founders of Western civilization"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    The more information you provide, the more accurate the
                    presentation will be.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center">
              <Button className="h-[40px]" type="submit">
                {isLoading ? (
                  <div className=" inline-flex items-center gap-1">
                    <div role="status">
                      <svg
                        aria-hidden="true"
                        className="w-7 h-7 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                    </div>
                    Loading...
                  </div>
                ) : (
                  " Next Step: Add Resources"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default AnswerSomeQuestion;
