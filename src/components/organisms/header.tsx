import {
  Calendar,
  CreditCard,
  MapPin,
  Shield,
  Trash2,
  Truck,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Stepper from "../molecules/custom-stepper";

const steps = [
  { name: "Postcode", icon: MapPin },
  { name: "Waste Type", icon: Trash2 },
  { name: "Select Skip", icon: Truck },
  { name: "Permit Check", icon: Shield },
  { name: "Choose Date", icon: Calendar },
  { name: "Payment", icon: CreditCard },
];
const Header = () => {
  const [currentStep] = useState(1);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const currentRef = stepRefs.current[currentStep];
      if (currentRef) {
        currentRef.scrollIntoView({
          behavior: "smooth",
          inline: "start",
          block: "nearest",
        });
      }
    };

    handleScroll();

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("resize", handleScroll);
    };
  }, [currentStep]);

  return (
    <div className="overflow-x-auto snap-x pt-5 mx-3">
      <div className="flex items-center mx-auto justify-center w-max gap-4 px-4">
        <Stepper currentStep={currentStep} steps={steps} stepRefs={stepRefs} />
      </div>
    </div>
  );
};

export default Header;
