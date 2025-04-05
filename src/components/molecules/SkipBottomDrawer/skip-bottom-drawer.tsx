import Button from "@/components/atoms/button";
import "./SkipBottomDrawer.css";
import CenteredContainer from "@/components/templates/centered-container";
import { ArrowRight } from "lucide-react";

interface IBottomDrawer {
  isOpen: boolean;
  yardSize?: number;
  hirePeriodDays?: number;
}
const BottomDrawer = ({ hirePeriodDays, isOpen, yardSize }: IBottomDrawer) => {
  return (
    <div>
      <div className={`drawer border-t-2 glassy-card  ${isOpen ? "open" : ""}`}>
        <CenteredContainer>
          <div className="flex lg:flex-row flex-col lg:items-center items-end justify-between py-[1rem] px-3">
            <div className="text-text items-center mb-3 lg:mb-auto text-sm flex gap-2">
              <p className="mr-2">{yardSize}</p>
              <div className="flex">
                <b className="text-blue text-2xl">
                  £{" "}
                  <span className="text-sm text-text font-normal">
                    {hirePeriodDays} day hire
                  </span>
                </b>
              </div>
            </div>
            <div className="flex items-center gap-[1rem]  w-full lg:w-auto">
              <Button className="bg-[#2a2a2a] w-full text-sm px-[1rem] py-[.5rem]">
                Back
              </Button>
              <Button className="bg-blue justify-center gap-2 text-sm flex items-center px-[1rem] py-[.5rem] ">
                Continue
                <ArrowRight size={15} />
              </Button>
            </div>
          </div>
        </CenteredContainer>
      </div>
    </div>
  );
};

export default BottomDrawer;
