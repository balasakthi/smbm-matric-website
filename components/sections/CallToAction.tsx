import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <section className="bg-accent text-accent-foreground py-16 sm:py-20">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Begin Your Child’s Journey at SMBM
        </h2>

        <p className="mt-4  sm:text-lg">
          Admissions are now open for the upcoming academic year. Join a school
          that nurtures excellence, discipline, and character.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/admissions">Admission Enquiry</Link>
          </Button>

          <Button size="lg" variant="white" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
