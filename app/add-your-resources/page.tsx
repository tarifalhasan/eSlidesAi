"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
  category: z.string({
    required_error: "please select a resource category",
  }),
  id: z
    .string({
      required_error: "please enter an resource id",
    })
    .min(5, {
      message: "id must me at least 5 characters",
    }),
  reference: z
    .string({
      required_error: "please enter a resourcereference",
    })
    .min(4, {
      message: "reference must me at least 4 characters",
    }),

  order: z.string({ required_error: "please enter an resource order" }).min(4, {
    message: "order must me at least 4 characters",
  }),
});

import GenaratePresention1 from "@/components/GenaratePresention1";
import ResourcesCard from "@/components/ResourceCard";
import AuthenticHeader from "@/components/layout/AuthenticHeader";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface IResources {
  category: string;
  id: string;
  reference: string;
  order: string;
}

const AddyourResources = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [genaratePresentionOpen, setGenaratePresentionOpen] = useState(false);

  const [resources, setResouces] = useState<IResources[]>([
    {
      category: "URL",
      reference: "Math",
      order: "1",
      id: "1",
    },
    {
      category: "PDF",
      reference: "Math Textbook",
      order: "2",
      id: "2",
    },
    {
      category: "Text File",
      reference: "Math",
      order: "3",
      id: "3",
    },
    {
      category: "Video",
      reference: "Khan Academy",
      order: "4",
      id: "4",
    },
  ]);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      category: "video",
      id: "",
      reference: "",
      order: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);

    setResouces([...resources, data]);
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
    // router.push("/add-your-resources");
  }

  const handleGenaratePresention = async () => {
    setGenaratePresentionOpen((prev) => !prev);
    // Simulating a delay (you can replace this with your fetch logic)
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    // setGenaratePresentionLoading(false);
  };
  return (
    <div className="flex-1 min-h-screen bg-gradient1 bg-cover bg-no-repeat">
      <AuthenticHeader></AuthenticHeader>
      <div className=" max-w-[1510px] w-full mx-auto px-3">
        <div className="grid  xl:grid-cols-2 relative overflow-hidden ">
          <div className=" w-full min-h-screen border-r border-black border-opacity-20">
            <div className=" max-w-[399px]   mx-auto">
              <h3 className="heading1 py-7 xl:py-10">Add your resources</h3>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="w-full space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Resource Category</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a verified email to display" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="video">Video</SelectItem>
                            <SelectItem value="url">Url</SelectItem>
                            <SelectItem value="pdf">PDF</SelectItem>
                            <SelectItem value="txt_file">Text File</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          This is the category of resource you&apos;re
                          importing.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="id"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Resource ID</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter resource ID" {...field} />
                        </FormControl>
                        <FormDescription>
                          This is your resource ID.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid gap-7 grid-cols-2">
                    <FormField
                      control={form.control}
                      name="reference"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Reference</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter reference" {...field} />
                          </FormControl>
                          <FormDescription>
                            Separated by commas.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="order"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Reference Order</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter reference order"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Separated by commas.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="lg:max-w-[274px] py-5 xl:py-7  mx-auto">
                    <div className="flex  flex-col  items-center gap-5 justify-center">
                      <Button
                        variant={"outline"}
                        type="submit"
                        className=" h-[40px] w-full text-sm xl:text-base"
                      >
                        Add this resource
                      </Button>
                      <Button
                        className="h-[40px] w-full text-sm xl:text-base"
                        type="button"
                        onClick={handleGenaratePresention}
                      >
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
                          "Generate your Presentation"
                        )}
                      </Button>
                    </div>
                  </div>
                </form>
              </Form>
            </div>
          </div>

          <div className=" w-full max-w-[558px] mx-auto">
            <h2 className="text-center heading1 py-7 xl:py-10">
              Your resource list
            </h2>
            <div className="grid gap-10 md:grid-cols-2">
              {resources.map((data, index) => (
                <ResourcesCard key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {genaratePresentionOpen ? (
        <GenaratePresention1
          handleGenaratePresention={setGenaratePresentionOpen}
          open={genaratePresentionOpen}
        />
      ) : null}
    </div>
  );
};

export default AddyourResources;
