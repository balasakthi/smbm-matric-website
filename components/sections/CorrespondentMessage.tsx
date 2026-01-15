import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function CorrespondentMessage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Correspondent’s Message
          </h2>
          <p className="mt-4 text-muted-foreground sm:text-lg">
            A vision rooted in values, discipline, and academic excellence.
          </p>
        </div>

        {/* Content */}
        <Card className="mt-12 max-w-5xl mx-auto rounded-xl shadow-md">
          <CardContent className="p-6 sm:p-10 grid gap-8 md:grid-cols-3 items-center">
            {/* Image */}
            <div className="md:col-span-1 flex justify-center">
              <div className="relative h-50 w-50 overflow-hidden rounded-xl bg-muted">
                <Image
                  src="/images/correspondent.webp"
                  alt="Correspondent of SMBM Matriculation Higher Secondary School"
                  className="size-full object-cover h-50 w-50"
                  width={300}
                  height={300}
                />
              </div>
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <p className="text-foreground/80 leading-relaxed line-clamp-4">
                At SMBM Matriculation Higher Secondary School, our mission is to
                provide a nurturing environment where students grow not only in
                academic excellence but also in character, discipline, and
                social responsibility. Education, in our belief, is the
                foundation for building confident individuals prepared to face
                the challenges of the future.
              </p>

              <div className="mt-6">
                <p className="font-semibold text-lg">— Correspondent</p>
                <p className="text-sm text-muted-foreground">
                  SMBM Matriculation Higher Secondary School
                </p>
              </div>
              <Link
                href="/about/correspondent"
                className="mt-4 inline-flex items-center text-sm font-medium text-brand-gold hover:underline"
              >
                Read Full Message →
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
