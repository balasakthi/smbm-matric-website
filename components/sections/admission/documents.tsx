import Fade from "@/components/common/Fade";
import SectionHeading from "@/components/layout/sectionHeading";
import { CONTAINER_SITE } from "@/lib/ui-constants";
import { LucideIcon, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface Document {
  label?: string;
  icon?: string;
}

interface Props {
  title: string;
  intro?: string;
  documents: Document[];
  getIcon: (
    iconName: string,
    iconMap: Record<string, LucideIcon>,
    fallback: LucideIcon,
  ) => LucideIcon;
  iconMap: Record<string, LucideIcon>;
  fallbackIcon: LucideIcon;
  containerClassName?: string;
}

function Documents({
  title,
  intro,
  documents,
  getIcon,
  iconMap,
  fallbackIcon,
  containerClassName,
}: Props) {
  // ✅ Empty state protection
  if (!documents || documents.length === 0) return null;

  // ✅ Split documents into two columns
  const mid = Math.ceil(documents.length / 2);
  const leftDocs = documents.slice(0, mid);
  const rightDocs = documents.slice(mid);

  return (
    <section
      aria-labelledby="documents-required-heading"
      className="bg-secondary py-20"
    >
      <div className={cn(CONTAINER_SITE, containerClassName)}>
        {/* Section Heading */}
        <SectionHeading
          title={title}
          intro={intro}
          headingId="documents-required-heading"
        />

        <div className="mt-16 max-w-5xl mx-auto">
          <Fade direction="up" delay={0.3}>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
              {/* Grid */}
              <div className="grid md:grid-cols-2 gap-6 md:gap-12">
                {/* Left Column */}
                <ul className="space-y-4">
                  {leftDocs.map((doc, index) => {
                    const IconComponent = getIcon(
                      doc.icon || "",
                      iconMap,
                      fallbackIcon,
                    );

                    return (
                      <li
                        key={`left-${index}`}
                        className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 transition group"
                      >
                        <IconComponent className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5 group-hover:scale-110 transition" />
                        <span className="text-muted-foreground">
                          {doc.label || "Document"}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                {/* Right Column */}
                <ul className="space-y-4">
                  {rightDocs.map((doc, index) => {
                    const IconComponent = getIcon(
                      doc.icon || "",
                      iconMap,
                      fallbackIcon,
                    );

                    return (
                      <li
                        key={`right-${index}`}
                        className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 transition group"
                      >
                        <IconComponent className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5 group-hover:scale-110 transition" />
                        <span className="text-muted-foreground">
                          {doc.label || "Document"}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Info Box */}
              <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                <p className="text-sm">
                  <span className="font-semibold">Important:</span> Original
                  documents must be presented during verification along with
                  photocopies.
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default Documents;
