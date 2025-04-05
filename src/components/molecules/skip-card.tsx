import { Skip } from "@/domains/skip";
import SkipImg from "@/assets/skipImg.jpeg";
import Button from "../atoms/button";
import { cn } from "@/lib/utils";
import { ArrowRight, TriangleAlert } from "lucide-react";

interface ISkipCard {
  skipSizeData: Skip;
  selectedSkipData: Skip | null;
  handleSelectSkip: (skip: Skip) => void;
}

const SkipCard = ({
  skipSizeData,
  selectedSkipData,
  handleSelectSkip,
}: ISkipCard) => {
  const {
    size,
    hire_period_days,
    price_before_vat,
    allowed_on_road,
    allows_heavy_waste,
  } = skipSizeData;
  return (
    <div
      onClick={() => handleSelectSkip(skipSizeData)}
      className={cn(
        "border-2 bg-[#1c1c1c] glassy-card  cursor-pointer rounded-lg p-[1.5rem] relative hover:border-[#142975]",
        selectedSkipData?.id === skipSizeData.id ? "border-blue" : "border-grey"
      )}
    >
      <p className="absolute bg-blue px-3 py-1 rounded-4xl text-sm font-semibold right-12 top-10">
        {size} Yards
      </p>
      {(allowed_on_road || allows_heavy_waste) && (
        <div className="absolute top-43 space-y-2">
          {allowed_on_road && (
            <div className="text-warning py-1 flex space-x-2 items-center bg-[#0c0c0c] text-xs rounded-sm px-2">
              <TriangleAlert size={15} />
              <p>Private Property Only</p>
            </div>
          )}

          {allows_heavy_waste && (
            <div className="text-danger py-1 space-x-2 flex items-center bg-[#0c0c0c] text-xs rounded-sm px-2">
              <TriangleAlert size={15} />
              <p>Not Suitable for Heavy Waste</p>
            </div>
          )}
        </div>
      )}
      <img
        src={SkipImg}
        alt="skipImg"
        className="rounded-lg h-[210px] w-full"
      />
      <div className="">
        <h3 className="mt-5 text-xl">{size} Yard Skip</h3>
        <p className="text-text my-2">{hire_period_days} day hire period</p>
        <h3 className="text-text my-6 text-sm">
          <b className="text-blue text-2xl">£{price_before_vat}</b> per week
        </h3>
      </div>
      <Button
        onClick={() => handleSelectSkip(skipSizeData)}
        className={cn(
          "cursor-pointer py-[.7rem]",
          selectedSkipData?.id === skipSizeData.id
            ? "bg-blue"
            : "bg-grey text-white"
        )}
      >
        {selectedSkipData?.id === skipSizeData.id ? (
          "Selected"
        ) : (
          <div className="flex items-center justify-center gap-2">
            <p>Select This Skip</p>
            <ArrowRight size={15} />
          </div>
        )}
      </Button>
    </div>
  );
};

export default SkipCard;
