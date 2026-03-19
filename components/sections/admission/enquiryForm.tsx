"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { admissionSchema, AdmissionFormData } from "@/lib/admission";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function EnquiryForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<AdmissionFormData>({
    resolver: zodResolver(admissionSchema),
  });

  const onSubmit = async (data: AdmissionFormData) => {
    console.log(data);
  };

  return (
    <section>
      <Card className="py-0 shadow-none bg-transparent border-0">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-center">
            Admission Enquiry
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            {/* Row: Student Name + Parent Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Student Name */}
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="studentName">Student Name</Label>
                <Input
                  id="studentName"
                  {...register("studentName")}
                  placeholder="Enter student name"
                />
                {errors.studentName && (
                  <p className="text-sm text-red-500">
                    {errors.studentName.message}
                  </p>
                )}
              </div>

              {/* Parent Name */}
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="parentName">Parent Name</Label>
                <Input
                  id="parentName"
                  {...register("parentName")}
                  placeholder="Enter parent name"
                />
                {errors.parentName && (
                  <p className="text-sm text-red-500">
                    {errors.parentName.message}
                  </p>
                )}
              </div>
            </div>

            {/* Row: Email + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="Enter email"
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  {...register("phone")}
                  placeholder="Enter phone"
                />
                {errors.phone && (
                  <p className="text-sm text-red-500">{errors.phone.message}</p>
                )}
              </div>
            </div>

            {/* Grade */}
            <div className="flex flex-col gap-1.5">
              <Label>Class Applying For</Label>
              <Select onValueChange={(value) => setValue("grade", value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Class" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Class</SelectLabel>
                    <SelectItem value="lkg">LKG</SelectItem>
                    <SelectItem value="ukg">UKG</SelectItem>
                    <SelectItem value="1">I</SelectItem>
                    <SelectItem value="2">II</SelectItem>
                    <SelectItem value="3">III</SelectItem>
                    <SelectItem value="4">IV</SelectItem>
                    <SelectItem value="5">V</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {errors.grade && (
                <p className="text-sm text-red-500">{errors.grade.message}</p>
              )}
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="message">Message (Optional)</Label>
              <Textarea
                id="message"
                {...register("message")}
                placeholder="Any additional details..."
                className="resize-none min-h-[100px]"
              />
            </div>

            {/* Submit */}
            <Button
              className="w-full"
              size="lg"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Enquiry"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
