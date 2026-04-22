import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Fade } from "@/components/common/Fade";
import { Marquee } from "@/components/ui/marquee";

import { urlFor } from "@/sanity/sanity-image";
import { Card, CardContent, CardFooter } from "../ui/card";

import type { Student, AcademicResult } from "@/app/types";

interface Props {
  academicResults?: AcademicResult[];
}

const extractStudents = (
  results: AcademicResult[] = [],
  className: "Class 10" | "Class 12",
) =>
  results.flatMap(
    (r) => r.topStudents?.filter((s) => s.className === className) || [],
  );

const StudentCard = ({ student }: { student: Student }) => {
  const total = student.className === "Class 10" ? 500 : 600;

  return (
    <Card className="group relative w-80 shrink-0 overflow-hidden bg-secondary p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
      <div className="absolute -right-4 -top-4 size-24 rounded-full bg-primary/5 blur-3xl transition-opacity group-hover:opacity-100" />

      <CardContent className="p-0 flex items-center gap-4">
        <div className="relative">
          <Avatar className="size-16 ring-2 ring-background ring-offset-2 ring-offset-border/50 group-hover:ring-primary/20 transition-all">
            {student.photo && (
              <AvatarImage
                src={urlFor(student.photo).url()}
                alt={student.studentName}
                className="object-cover"
              />
            )}
            <AvatarFallback className="bg-secondary text-secondary-foreground uppercase">
              {student.studentName?.charAt(0)}
            </AvatarFallback>
          </Avatar>
          {student.centum && (
            <div className="absolute -bottom-1 -right-1 flex size-6 items-center justify-center rounded-full bg-amber-500 text-[10px] font-bold text-white shadow-sm">
              100
            </div>
          )}
        </div>

        <div className="space-y-1">
          <h4 className="font-bold leading-tight tracking-tight text-foreground">
            {student.studentName}
          </h4>
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {student.className} {student.group ? `• ${student.group}` : ""}
          </p>
        </div>
      </CardContent>

      <CardFooter className="p-0 mt-6 flex items-end justify-between">
        <div>
          <span className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70">
            Total Score
          </span>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-black tracking-tighter text-primary">
              {student.score}
            </span>
            <span className="text-sm font-semibold text-muted-foreground/50">
              /{total}
            </span>
          </div>
        </div>

        {student.achievement && (
          <Badge className="bg-background text-foreground px-2 py-0.5 text-[10px] font-bold uppercase">
            {student.achievement}
          </Badge>
        )}
      </CardFooter>
    </Card>
  );
};

function Achievements({ academicResults = [] }: Props) {
  const class10Students = extractStudents(academicResults, "Class 10");
  const class12Students = extractStudents(academicResults, "Class 12");

  if (!academicResults.length) return null;

  return (
    <section className="relative w-full space-y-4 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-32 bg-linear-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-32 bg-linear-to-l from-background to-transparent" />

      <Fade direction="up" delay={0.1}>
        <Marquee className="py-4 [--gap:1.5rem] [--duration:40s]" pauseOnHover>
          {class10Students.map((s, i) => (
            <StudentCard key={i} student={s} />
          ))}
        </Marquee>
      </Fade>

      <Fade direction="up" delay={0.2}>
        <Marquee
          reverse
          className="py-4 [--gap:1.5rem] [--duration:45s]"
          pauseOnHover
        >
          {class12Students.map((s, i) => (
            <StudentCard key={i} student={s} />
          ))}
        </Marquee>
      </Fade>
    </section>
  );
}

export { Achievements };
