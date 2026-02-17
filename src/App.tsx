import { learningAreas } from "@/data/learningData";
import { useProgress } from "@/hooks/useProgress";
import { LearningItem } from "@/components/LearningItem";
import { TotalProgress } from "@/components/TotalProgress";

export default function App() {
  const { checked, toggle, getAreaProgress, totalProgress } = useProgress();

  return (
    <div className="min-h-screen bg-[#0D1117] text-[#C9D1D9] py-14 px-4">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight mb-3">
            Plan Nauki 2026
          </h1>
          <p className="text-[#8B949E] text-lg">Backend Development Journey</p>
        </header>

        <div className="rounded-xl border border-[#30363D] border-l-4 border-l-[#3ECF8E] bg-[#161B22] p-7 mb-10">
          <h2 className="text-[#3ECF8E] font-semibold text-lg mb-3">
            Strategia Nauki JavaScript &amp; TypeScript
          </h2>
          <div className="space-y-1.5 text-sm text-[#C9D1D9] leading-relaxed">
            <p>
              <strong className="text-white">JavaScript i TypeScript</strong>{" "}
              uczę się przez cały rok w sposób pasywny i ciągły, równolegle ze
              wszystkimi obszarami.
            </p>
            <p>Bierne oglądanie kursów w wolnym czasie</p>
            <p>Rozwiązywanie quizów do utrwalania wiedzy</p>
            <p>
              Systematyczne utrwalanie podstaw, średnio-zaawansowanych i
              zaawansowanych zagadnień
            </p>
            <p className="mt-3 italic text-[#8B949E]">
              Każde nowe zagadnienie z JS/TS natychmiast stosuję w praktyce przy
              realizacji projektów!
            </p>
          </div>
        </div>

        <TotalProgress progress={totalProgress()} />

        <div className="space-y-4">
          {learningAreas.map((area) => (
            <LearningItem
              key={area.id}
              area={area}
              checked={checked}
              onToggle={toggle}
              progress={getAreaProgress(area.id)}
            />
          ))}
        </div>

        {/* Footer */}
        <footer className="text-center mt-16 pt-8 border-t border-[#30363D] text-[#8B949E] text-sm space-y-1">
          <p>Konsekwencja i cierpliwość prowadzą do mistrzostwa</p>
          <p>Backend Developer Journey 2026</p>
        </footer>
      </div>
    </div>
  );
}
