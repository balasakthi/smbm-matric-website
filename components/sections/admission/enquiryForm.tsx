"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { admissionSchema, AdmissionFormData } from "@/lib/admission";
import { enquiryUrl } from "@/lib/env";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ActionButton } from "@/components/layout/actionButton";

function EnquiryForm() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AdmissionFormData>({
    resolver: zodResolver(admissionSchema),
  });

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const [formStartTime] = useState<number>(() => Date.now());

  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => setStatus("idle"), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const onSubmit = async (data: AdmissionFormData) => {
    setStatus("idle");

    try {
      const response = await fetch(enquiryUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          formTime: formStartTime,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        reset();

        toast.success("Enquiry Sent", {
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

      toast.error("Network Error", {
        description: "Could not connect to server",
      });
    }
  };

  return (
    <section aria-labelledby="admission-enquiry-form">
      <Card className="py-0 shadow-none bg-transparent border-0">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-center">
            Admission Enquiry
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form
            id="admission-enquiry-form"
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
            aria-label="Admission enquiry form"
          >
            {/* 🛡️ Honeypot */}
            <input
              type="text"
              {...register("website")}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            {/* Student + Parent */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="studentName">Student Name</Label>
                <Input
                  id="studentName"
                  placeholder="e.g. Arun Kumar"
                  {...register("studentName")}
                  aria-invalid={!!errors.studentName}
                  aria-describedby={
                    errors.studentName ? "studentName-error" : undefined
                  }
                />
                {errors.studentName && (
                  <p id="studentName-error" className="text-sm text-red-500">
                    {errors.studentName.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="parentName">Parent Name</Label>
                <Input
                  id="parentName"
                  placeholder="e.g. Mr. Kumar"
                  {...register("parentName")}
                  aria-invalid={!!errors.parentName}
                  aria-describedby={
                    errors.parentName ? "parentName-error" : undefined
                  }
                />
                {errors.parentName && (
                  <p id="parentName-error" className="text-sm text-red-500">
                    {errors.parentName.message}
                  </p>
                )}
              </div>
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="e.g. parent@gmail.com"
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

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="e.g. 9876543210"
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
            </div>

            {/* Grade */}
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="grade">Class Applying For</Label>
              <Select onValueChange={(value) => setValue("grade", value)}>
                <SelectTrigger
                  className="w-full"
                  id="grade"
                  aria-label="Select class"
                >
                  <SelectValue placeholder="Select Class" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Class</SelectLabel>
                    {[
                      "LKG",
                      "UKG",
                      "I",
                      "II",
                      "III",
                      "IV",
                      "V",
                      "VI",
                      "VII",
                      "VIII",
                      "IX",
                      "X",
                      "XI",
                      "XII",
                    ].map((cls) => (
                      <SelectItem key={cls} value={cls}>
                        {cls}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              {errors.grade && (
                <p className="text-sm text-red-500">{errors.grade.message}</p>
              )}
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Any additional details..."
                {...register("message")}
                className="min-h-[100px]"
              />
            </div>

            {/* Submit */}
            <ActionButton
              text="Submit Enquiry"
              type="submit"
              size="lg"
              className="w-full"
              disabled={isSubmitting || status === "success"}
              aria-label="Submit admission enquiry form"
              isLoading={isSubmitting}
            ></ActionButton>

            {/* 🔊 Screen reader live region */}
            <div aria-live="polite" role="status" className="sr-only">
              {status === "success" && "Enquiry sent successfully"}
              {status === "error" && message}
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}

export { EnquiryForm };
