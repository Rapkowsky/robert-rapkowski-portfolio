"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { formSchema } from "@/lib/schemas";
import { send } from "@/lib/email";
import { toast } from "sonner";
import SectionWrapper from "@/components/SectionWrapper";
import TitleSlideLeft from "@/components/TitleSlideLeft";
import Image from "next/image";
import { motion } from "framer-motion";
import { easefadeInUp, mainAnim } from "@/lib/Animations";
import rrImg from "@/public/images/IMG_3944retkadr.jpg";
import ButtonWrapper from "@/components/ButtonWrapper";

export default function ContactForm() {
  //  Define form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  // Define a submit handler
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await send(values);
      toast.success(
        values.firstName + " " + ", your message was sent correctly!",
        { className: "text-2xl" },
      );
      form.reset();
    } catch {
      toast.error(
        "An error occurred while sending the message. Please try again.",
      );
    }
  }

  //   const [formData, setFormData] = useState({
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     message: "",
  //   });

  //   const handleChange = (
  //     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  //   ) => {
  //     const { name, value } = e.target;
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       [name]: value,
  //     }));
  //   };

  //   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     console.log("Form submitted:", formData);
  //     setFormData({
  //       firstName: "",
  //       lastName: "",
  //       email: "",
  //       message: "",
  //     });
  //   };

  return (
    <SectionWrapper className="mt-[min(100vw,100px)] overflow-hidden">
      <div className="relative flex max-w-[331px] justify-between md:max-w-[527px] lg:max-w-full">
        <TitleSlideLeft
          text="Let's work together"
          animateAutomatically
          titleClassName="text-left w-min lg:w-[initial]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: easefadeInUp }}
          className="absolute right-0 flex-none lg:top-[30px] xl:top-[90px]"
        >
          <Image
            alt={"image"}
            src={rrImg}
            className="ml-auto h-[min(30vw,100px)] w-[min(30vw,100px)] rounded-full object-cover object-top md:h-[150px] md:w-[150px]"
          />
        </motion.div>
      </div>
      <Card>
        <CardContent className="space-y-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: mainAnim }}
              >
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your first name" {...field} />
                      </FormControl>

                      <div className="h-[32px] w-full">
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </motion.div>
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: mainAnim }}
              >
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your last name" {...field} />
                      </FormControl>

                      <div className="h-[32px] w-full">
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: mainAnim }}
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your email" {...field} />
                      </FormControl>

                      <div className="h-[32px] w-full">
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </motion.div>
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: mainAnim }}
              >
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          id="message"
                          rows={5}
                          placeholder="Type in your message here"
                          {...field}
                        />
                      </FormControl>

                      <div className="h-[32px] w-full">
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </motion.div>
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: mainAnim }}
                viewport={{ once: true }}
                className="ml-auto mr-[20%] mt-10 w-fit"
              >
                <motion.div className="relative duration-3000 ease-rrEaseBtnHover active:scale-[0.25]">
                  <ButtonWrapper className="relative flex h-[150px] w-[150px] cursor-pointer items-center justify-center rounded-full bg-rrDark font-medium text-white dark:bg-primary md:h-[170px] md:w-[170px] xl:h-[200px] xl:w-[200px]">
                    <Button
                      type="submit"
                      className="!absolute inset-0 z-20 flex h-full items-center justify-center text-lg"
                    >
                      Submit
                    </Button>
                  </ButtonWrapper>
                </motion.div>
              </motion.div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
