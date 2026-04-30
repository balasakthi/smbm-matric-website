import { AlertCircle } from "lucide-react";

import { Fade } from "@/components/common/Fade";
import { SimpleIcon } from "@/components/common/simpleIcon";

interface Document {
  label?: string;
  icon?: string;
}

const DocumentItem = ({ doc }: { doc: Document }) => (
  <li className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 transition group">
    <SimpleIcon
      icon={doc.icon || "School"}
      category="document"
      size="sm"
      strokeWidth={1.6}
      hasBorder={false}
    />
    <span className="text-muted-foreground">{doc.label || "Document"}</span>
  </li>
);

interface Props {
  documents: Document[];
}

function Documents({ documents }: Props) {
  if (!documents || documents.length === 0) return null;

  const mid = Math.ceil(documents.length / 2);
  const leftDocs = documents.slice(0, mid);
  const rightDocs = documents.slice(mid);

  return (
    <div className="mt-16 max-w-5xl mx-auto">
      <Fade direction="up" delay={0.3}>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12">
            <ul className="space-y-4">
              {leftDocs.map((doc, i) => (
                <DocumentItem key={`left-${i}`} doc={doc} />
              ))}
            </ul>

            <ul className="space-y-4">
              {rightDocs.map((doc, i) => (
                <DocumentItem key={`right-${i}`} doc={doc} />
              ))}
            </ul>
          </div>

          <div className="mt-8 bg-accent border border-primary/40 rounded-lg p-4 flex items-start gap-3">
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
  );
}

export { Documents };
