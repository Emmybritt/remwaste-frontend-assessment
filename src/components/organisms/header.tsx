import {
  Calendar,
  CreditCard,
  MapPin,
  Shield,
  Trash2,
  Truck,
} from "lucide-react";
import { useState } from "react";
import Stepper from "../molecules/custom-stepper";

const steps = [
  {
    name: "Postcode",
    icon: MapPin,
  },
  {
    name: "Postcode",
    icon: Trash2,
  },
  {
    name: "Select Skip",
    icon: Truck,
  },
  {
    name: "Permit Check",
    icon: Shield,
  },
  {
    name: "Choose Date",
    icon: Calendar,
  },
  {
    name: "Payment",
    icon: CreditCard,
  },
];
const Header = () => {
  const [currentStep] = useState(1);

  return (
    <div className="overflow-x-auto snap-x pt-5">
      <div className="flex items-center mx-auto justify-center w-max gap-4 px-4">
        <Stepper currentStep={currentStep} steps={steps} />
      </div>
    </div>
  );
};

export default Header;
