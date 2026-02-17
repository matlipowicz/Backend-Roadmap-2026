import type { RoadmapLink } from "@/data/learningData";
import { Separator } from "@/components/ui/separator";
import { ExternalLink } from "lucide-react";

interface RoadmapLinksProps {
  links: RoadmapLink[];
  areaTitle: string;
}

export function RoadmapLinks({ links, areaTitle }: RoadmapLinksProps) {
  if (!links) return null;
  if (links.length === 0) return null;

  return (
    <div className="mt-6">
      <Separator className="mb-4 bg-[#30363D]" />
      <p className="text-xs font-semibold uppercase tracking-widest text-[#8B949E] mb-3">
        Detailed Roadmap: {areaTitle}
      </p>
      <div className="flex flex-wrap gap-2">
        {links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium
              bg-[#21262D] text-[#3ECF8E] border border-[#30363D]
              hover:border-[#3ECF8E] hover:bg-[#3ECF8E]/10
              transition-all duration-200"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
