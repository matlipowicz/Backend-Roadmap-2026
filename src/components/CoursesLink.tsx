import type { CoursesLink } from "@/data/learningData";
import { Separator } from "@radix-ui/react-separator";
import { ExternalLink } from "lucide-react";

export interface CoursesLinkProps {
  links: CoursesLink[] | undefined;
  areaTitle: string;
}

export function CoursesLink({ links, areaTitle }: CoursesLinkProps) {
  if (!links) return null;
  if (links?.length === 0) return null;

  console.log("Links inside the CoursesLink component:", links);

  return (
    <div className="mt-6">
      <Separator className="mb-4 bg-[#30363D]" />
      <p className="text-xs font-semibold uppercase tracking-widest text-[#8B949E] mb-3">
        Course: {areaTitle}
      </p>
      <div className="flex flex-wrap gap-2">
        {links?.map((link) => (
          <a
            key={hasUrlProperty(link) ? link.url : link}
            href={hasUrlProperty(link) ? link.url : link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium
                bg-[#21262D] text-[#3ECF8E] border border-[#30363D]
                hover:border-[#3ECF8E] hover:bg-[#3ECF8E]/10
                transition-all duration-200"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            {hasUrlProperty(link) ? link.label : null}
          </a>
        ))}
      </div>
    </div>
  );
}

const hasUrlProperty = (
  link: CoursesLink
): link is { label: string; url: string } => {
  return typeof link === "object" && "url" && "label" in link;
};
