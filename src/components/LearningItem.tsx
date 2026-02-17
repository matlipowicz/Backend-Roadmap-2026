import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";
import type { LearningArea } from "@/data/learningData";
import { RoadmapLinks } from "./RoadmapLinks";
import { CoursesLink } from "./CoursesLink";

interface LearningItemProps {
  area: LearningArea;
  checked: Record<string, boolean>;
  onToggle: (itemId: string) => void;
  progress: number | null;
}

const levelColors: Record<string, { badge: string; dot: string }> = {
  beginner: {
    badge: "bg-[#3ECF8E]/15 text-[#3ECF8E] border-transparent",
    dot: "bg-[#3ECF8E]",
  },
  intermediate: {
    badge: "bg-[#FFB84D]/15 text-[#FFB84D] border-transparent",
    dot: "bg-[#FFB84D]",
  },
  advanced: {
    badge: "bg-[#FF6B6B]/15 text-[#FF6B6B] border-transparent",
    dot: "bg-[#FF6B6B]",
  },
};

const levelLabels: Record<string, string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

export function LearningItem({
  area,
  checked,
  onToggle,
  progress,
}: LearningItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isCompleted = progress === 100;
  const hasItems = area.sections.length > 0;

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <div
        className={`rounded-xl border transition-all duration-200
          ${
            isCompleted
              ? "border-[#3ECF8E] bg-[#3ECF8E]/5"
              : isOpen
              ? "border-[#3ECF8E]/60 bg-[#161B22]"
              : "border-[#30363D] bg-[#161B22] hover:border-[#3ECF8E]/60"
          }`}
      >
        <CollapsibleTrigger asChild>
          <div className="flex items-center gap-4 p-5 cursor-pointer select-none">
            <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-[#3ECF8E] to-[#2DA771] flex items-center justify-center">
              <span className="text-[#0D1117] font-bold text-lg">
                {area.id}
              </span>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-white font-semibold text-base leading-tight">
                  {area.title}
                </h3>
                {isCompleted && (
                  <Badge className="bg-[#3ECF8E]/15 text-[#3ECF8E] border-transparent text-xs">
                    Ukończony
                  </Badge>
                )}
              </div>
              {hasItems && progress !== null && (
                <div className="mt-2 flex items-center gap-2">
                  <Progress
                    value={progress}
                    className="h-1.5 flex-1 bg-[#21262D] [&>div]:bg-gradient-to-r [&>div]:from-[#3ECF8E] [&>div]:to-[#2DA771]"
                  />
                  <span className="text-xs text-[#3ECF8E] font-semibold tabular-nums w-9 text-right">
                    {progress}%
                  </span>
                </div>
              )}
            </div>

            <ChevronDown
              className={`h-5 w-5 text-[#8B949E] flex-shrink-0 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <div className="px-5 pb-6 border-t border-[#30363D]">
            {hasItems && (
              <>
                {/* Area progress summary */}
                <div className="mt-5 mb-4 p-3 rounded-lg bg-[#21262D] border border-[#30363D]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-[#8B949E] font-medium">
                      Postęp obszaru
                    </span>
                    <span className="text-sm font-bold text-[#3ECF8E]">
                      {progress}%
                    </span>
                  </div>
                  <Progress
                    value={progress ?? 0}
                    className="h-2 bg-[#30363D] [&>div]:bg-gradient-to-r [&>div]:from-[#3ECF8E] [&>div]:to-[#2DA771]"
                  />
                </div>

                {/* Sections */}
                {area.sections.map((section) => {
                  const colors = levelColors[section.level];
                  const checkedInSection = section.items.filter(
                    (i) => checked[i.id]
                  ).length;
                  return (
                    <div key={section.labelPL} className="mt-5">
                      <div className="flex items-center gap-2 mb-3">
                        <h4 className="text-sm font-semibold text-[#C9D1D9]">
                          {section.labelPL}
                        </h4>
                        <Badge className={`text-xs ${colors.badge}`}>
                          {levelLabels[section.level]}
                        </Badge>
                        <span className="ml-auto text-xs text-[#8B949E]">
                          {checkedInSection}/{section.items.length}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {section.items.map((item) => (
                          <li key={item.id} className="flex items-start gap-3">
                            <Checkbox
                              id={item.id}
                              checked={!!checked[item.id]}
                              onCheckedChange={() => onToggle(item.id)}
                              className="mt-0.5 flex-shrink-0 border-[#30363D] data-[state=checked]:bg-[#3ECF8E] data-[state=checked]:border-[#3ECF8E] data-[state=checked]:text-[#0D1117]"
                            />
                            <label
                              htmlFor={item.id}
                              className={`text-sm leading-snug cursor-pointer transition-colors ${
                                checked[item.id]
                                  ? "text-[#8B949E] line-through"
                                  : "text-[#C9D1D9]"
                              }`}
                            >
                              {item.label}
                            </label>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </>
            )}

            <CoursesLink links={area.coursesLink} areaTitle={area.title} />
            <RoadmapLinks links={area.roadmapLinks} areaTitle={area.title} />
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}
