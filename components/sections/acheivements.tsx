import Fade from "@/components/common/Fade";
import { ACADEMIC_RESULT_QUERY } from "@/lib/sanityQuery";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CONTAINER_SITE } from "@/lib/ui-constants";
import { Marquee } from "@/components/ui/marquee";
import { SanityImageSource } from "@sanity/image-url";
import { fetchSectionData } from "@/lib/sanityFetch";
import { urlFor } from "@/sanity/sanity-image";

interface Student {
  studentName: string;
  className: "Class 10" | "Class 12";
  group?: string;
  centum?: number;
  score: number;
  achievement?: string;
  photo?: SanityImageSource;
}

interface AcademicResultData {
  title: string;
  intro: string;
  year: string;
  class10Students: Student[];
  class12Students: Student[];
}

const StudentList = ({ students }: { students: Student[] }) =>
  students.map((student, index) => {
    const total = student.className === "Class 10" ? 500 : 600;

    return (
      <div
        key={index}
        className="min-w-96 max-w-sm rounded-2xl border bg-secondary/50 shadow-sm hover:shadow-lg transition-all duration-300 p-6 m-2"
      >
        {/* Top Section */}
        <div className="flex items-center gap-4">
          <Avatar className="size-20 border">
            {student.photo && (
              <AvatarImage
                src={urlFor(student.photo).url()}
                alt={student.studentName}
              />
            )}
            <AvatarFallback className="bg-primary text-primary-foreground font-semibold text-lg">
              {student.studentName?.charAt(0)}
            </AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <p className="font-semibold text-lg leading-none">
              {student.studentName}
            </p>

            <p className="text-sm text-muted-foreground mt-1">
              {student.className}
            </p>

            <p className="text-sm text-muted-foreground">
              {student.group && `${student.group}`}
            </p>
          </div>
        </div>

        {/* Marks Section */}
        <div className="mt-6 flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide">
              Marks
            </p>
            <p className="text-2xl font-bold">
              {student.score}
              <span className="text-sm font-medium text-muted-foreground">
                /{total}
              </span>
            </p>
          </div>

          {student.centum && (
            <Badge variant="secondary">{student.centum} Centum</Badge>
          )}
        </div>

        {/* Achievement */}
        {student.achievement && (
          <div className="mt-5">
            <Badge className="text-sm px-4">{student.achievement}</Badge>
          </div>
        )}
      </div>
    );
  });

const Achievements = async () => {
  const academics = await fetchSectionData<AcademicResultData>(
    ACADEMIC_RESULT_QUERY,
  );

  const class10Students = academics?.class10Students || [];
  const class12Students = academics?.class12Students || [];

  return (
    <section aria-labelledby="achievements-heading" className="py-20 md:py-28">
      <div className={`${CONTAINER_SITE} max-w-7xl`}>
        <Fade direction="up">
          <h2
            id="achievements-heading"
            className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight text-center"
          >
            {academics?.title}
          </h2>
        </Fade>

        <Fade direction="up" delay={0.15}>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed text-center">
            {academics?.intro}
          </p>
        </Fade>

        <div className="relative mt-14">
          <div className="absolute inset-y-0 left-0 z-10 w-[15%] bg-linear-to-r from-background to-transparent" />
          <div className="absolute inset-y-0 right-0 z-10 w-[15%] bg-linear-to-l from-background to-transparent" />
          <Fade direction="up" delay={0.2}>
            <Marquee pauseOnHover className="[--duration:30s]">
              <StudentList students={class10Students} />
            </Marquee>
          </Fade>

          <Fade direction="up" delay={0.25}>
            <Marquee pauseOnHover reverse className="[--duration:30s]">
              <StudentList students={class12Students} />
            </Marquee>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
