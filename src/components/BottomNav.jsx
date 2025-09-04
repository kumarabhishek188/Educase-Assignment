import React from "react";
import { Home, ChevronLeft, ChevronRight } from "lucide-react";

const BottomNav = ({ currentStep = 1, totalSteps = 4, onPrev, onNext, onHome }) => {
  const canPrev = typeof onPrev === "function";
  const canNext = typeof onNext === "function";

  return (
    <div className="w-full flex items-center justify-center py-4 gap-6 text-gray-700">
      <button
        aria-label="Home"
        onClick={onHome}
        className="rounded-full p-2 hover:bg-gray-200 transition-colors"
      >
        <Home size={22} />
      </button>

      <button
        aria-label="Previous"
        onClick={onPrev}
        disabled={!canPrev}
        className={`p-2 rounded hover:bg-gray-200 transition-colors ${
          canPrev ? "opacity-100" : "opacity-40 cursor-not-allowed"
        }`}
      >
        <ChevronLeft size={22} />
      </button>

      <span className="text-sm select-none">{currentStep} of {totalSteps}</span>

      <button
        aria-label="Next"
        onClick={onNext}
        disabled={!canNext}
        className={`p-2 rounded hover:bg-gray-200 transition-colors ${
          canNext ? "opacity-100" : "opacity-40 cursor-not-allowed"
        }`}
      >
        <ChevronRight size={22} />
      </button>
    </div>
  );
};

export default BottomNav;
