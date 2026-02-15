import { Progress } from "@/components/ui/progress";

interface TotalProgressProps {
  progress: number;
}

export function TotalProgress({ progress }: TotalProgressProps) {
  return (
    <div className="rounded-xl border border-[#30363D] bg-[#161B22] p-5 mb-8">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium text-[#8B949E]">Całkowity postęp nauki</span>
        <span className="text-lg font-bold text-[#3ECF8E]">{progress}%</span>
      </div>
      <Progress
        value={progress}
        className="h-3 bg-[#21262D] [&>div]:bg-gradient-to-r [&>div]:from-[#3ECF8E] [&>div]:to-[#2DA771] [&>div]:transition-all [&>div]:duration-500"
      />
    </div>
  );
}
