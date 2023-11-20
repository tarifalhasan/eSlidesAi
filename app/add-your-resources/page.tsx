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
import Spinner from "../Spinner";

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
      <AuthenticHeader show_tabs_link={true} />
      <div className=" max-w-[1510px] pt-[110px] pb-6 w-full mx-auto px-3">
        <div className="grid  xl:grid-cols-2 relative overflow-hidden ">
          <div className=" w-full  xl:border-r border-black border-opacity-20">
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
                            <SelectItem value="textfile">Text File</SelectItem>
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
                        {isLoading ? <Spinner /> : "  Add this resource"}
                      </Button>
                      <Button
                        className="h-[40px] w-full text-sm xl:text-base"
                        type="button"
                        onClick={handleGenaratePresention}
                      >
                        {"Generate your Presentation"}
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
                <ResourcesCard
                  category={data.category}
                  reference={data.reference}
                  index={index + 1}
                  key={index}
                />
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
