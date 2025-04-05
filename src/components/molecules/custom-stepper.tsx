import { LucideIcon } from "lucide-react";
import React from "react";

interface IStep {
  icon: LucideIcon;
  name: string;
}

interface IStepper {
  currentStep: number;
  steps: IStep[];
  stepRefs: React.RefObject<(HTMLDivElement | null)[]>;
}

const Stepper = ({ currentStep, steps, stepRefs }: IStepper) => {
  const activeColor = (index: number) =>
    currentStep >= index ? "bg-blue" : "bg-grey";
  const activeTextColor = (index: number) =>
    currentStep >= index - 1 ? "text-blue" : "text-light-grey";
  const isFinalStep = (index: number) => index === steps.length - 1;

  return (
    <div className="flex items-center w-full justify-start">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div
            className="flex items-center gap-1 min-w-max"
            ref={(el) => {
              stepRefs.current[index - 1] = el;
            }}
          >
            <step.icon className={activeTextColor(index)} />
            <h3
              className={
                currentStep >= index - 1
                  ? "cursor-pointer"
                  : "text-light-grey cursor-not-allowed"
              }
            >
              {step.name}
            </h3>
          </div>
          {!isFinalStep(index) && (
            <div className={`w-16 h-[1px] mx-4 ${activeColor(index)}`}></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stepper;
