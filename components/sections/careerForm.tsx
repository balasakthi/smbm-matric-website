"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { ActionButton } from "@/components/common/actionButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { enquiryUrl } from "@/lib/env";
import { CareerFormData, careerSchema } from "@/lib/schema";

function CareerForm({ formTitle }: { formTitle: string }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CareerFormData>({ resolver: zodResolver(careerSchema) });

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const [formStartTime] = useState<number>(() => Date.now());

  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => setStatus("idle"), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const onSubmit = async (data: CareerFormData) => {
    setStatus("idle");

    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("phone", data.phone);
    formData.append("email", data.email ?? "");
    formData.append("role", data.role ?? "");
    formData.append("message", data.message ?? "");
    formData.append("formTime", formStartTime.toString());
    formData.append("type", "career");

    if (data.resume && data.resume[0]) {
      formData.append("resume", data.resume[0]);
    }

    try {
      const response = await fetch(enquiryUrl, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        reset();

        toast.success("Message Sent", {
          description: "We will contact you shortly.",
        });
      } else {
        setStatus("error");
        setMessage(result.message || "Something went wrong");

        toast.error("Error", {
          description: result.message || "Something went wrong",
        });
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setMessage("Could not connect to server");

      toast.error("Error", {
        description: "Something went wrong",
      });
    }
  };

  return (
    <section aria-labelledby="career-form">
      <Card className="shadow-none border-0 p-0">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-center">
            {formTitle}
          </CardTitle>
        </CardHeader>

        <CardContent className="p-0">
          <form
            id="career-form"
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            {/* Honeypot */}
            <input
              type="text"
              {...register("website")}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Your name"
                {...register("name")}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Your phone number"
                {...register("phone")}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
              {errors.phone && (
                <p id="phone-error" className="text-sm text-red-500">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="email">Email (optional)</Label>
              <Input
                id="email"
                type="email"
                placeholder="Your email"
                {...register("email")}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Preferred Role */}
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="preferredRole">
                Position You’re Interested In
              </Label>
              <Input
                id="preferredRole"
                placeholder="e.g. Teacher, Admin"
                {...register("role")}
              />
            </div>

            {/* Resume Upload */}
            <div className="flex flex-col gap-1.5">
              <Label>Upload Resume</Label>
              <Input
                type="file"
                accept=".pdf,.doc,.docx"
                {...register("resume", { required: true })}
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="How can we help you?"
                {...register("message")}
                className="min-h-25"
              />
            </div>

            <ActionButton
              text="Apply Now"
              type="submit"
              size="lg"
              className="w-full"
              disabled={isSubmitting || status === "success"}
              aria-label="Submit career form"
              isLoading={isSubmitting}
            />

            {/* 🔊 Screen reader live region */}
            <div aria-live="polite" role="status" className="sr-only">
              {status === "success" && "Application submitted successfully"}
              {status === "error" && message}
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}

export { CareerForm };
