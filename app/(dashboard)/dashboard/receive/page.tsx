"use client"
import BreadCrumb from "@/components/breadcrumb";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { receiveSchema } from "@/validators/receive";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const inter = Inter({ subsets: ["latin"] });
type Input = z.infer<typeof receiveSchema>;


const breadcrumbItems = [{ title: "Receive Stream", link: "/dashboard/receive" }];
export default function Page() {
    const { toast } = useToast();
  const [formStep, setFormStep] = React.useState(0);
  const form = useForm<Input>({
    resolver: zodResolver(receiveSchema),
    defaultValues: {
      flowRate: "",
      duration: "",
      token: "",
    },
  });

  function onSubmit(data: Input) {
    toast({
      title: "Success",
      description: "Your transaction has been sent",
    });
    alert(JSON.stringify(data, null, 4));
    console.log(data);
  }
    return (
      <>
        <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
          <BreadCrumb items={breadcrumbItems} />
        </div>
        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Receive Stream</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="relative space-y-3 overflow-x-hidden"
            >
              <motion.div
                className={cn("space-y-3", {
                  // hidden: formStep == 1,
                })}
                // formStep == 0 -> translateX == 0
                // formStep == 1 -> translateX == '-100%'
                animate={{
                  translateX: `-${formStep * 100}%`,
                }}
                transition={{
                  ease: "easeInOut",
                }}
              >
                {/* FlowRate */}
                <FormField
                  control={form.control}
                  name="flowRate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Flow Rate</FormLabel>
                      <FormControl>
                        <Input placeholder="Flow Rate" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Duration */}
                <FormField
                  control={form.control}
                  name="duration"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Duration</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Duration in Seconds"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* token */}
                <FormField
                  control={form.control}
                  name="token"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Flux Token</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a token" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {['APTOSx', 'Other'].map((token) => {
                            return (
                              <SelectItem value={token.toString()} key={token}>
                                {token}
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
              
              <div className="flex gap-2">
                <Button
                  type="submit"
                  className={cn({
                  })}
                  onClick={() => {
                    // validation
                    form.trigger(["flowRate", "token", "duration"]);
                    const rateState = form.getFieldState("flowRate");
                    const tokenState = form.getFieldState("token");
                    const durationState = form.getFieldState("duration");

                    if (!rateState.isDirty || rateState.invalid) return;
                    if (!tokenState.isDirty || tokenState.invalid) return;
                    if (!durationState.isDirty || durationState.invalid) return;
                  }}
                >
                  Submit
                </Button>
                
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
      </>
    );
  }