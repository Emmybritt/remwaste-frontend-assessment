import { fetchSkips } from "@/actions";
import { Skip } from "@/domains/skip";
import { useEffect, useState } from "react";
import SkipCard from "../molecules/skip-card";
import BottomDrawer from "../molecules/SkipBottomDrawer/skip-bottom-drawer";
import SkipCardSkeleton from "./skip-section-skelenton-loader";

const SelectSkipSection = () => {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);

  useEffect(() => {
    const getSkips = async () => {
      setLoading(true);
      const data = await fetchSkips();
      console.log(data, "this is the skips data");
      setSkips(data);
      setLoading(false);
    };
    getSkips();
  }, []);
  if (loading) {
    return (
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[1.5rem] mb-[9rem] mx-6 mt-[2.5rem]">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkipCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  const handleSelectSkip = (skip: Skip) => {
    setSelectedSkip(skip);
  };

  return (
    <div className="px-6">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[1.5rem] mb-[9rem] mt-[2.5rem]">
        {skips.map((skip: Skip) => (
          <SkipCard
            handleSelectSkip={handleSelectSkip}
            skipSizeData={skip}
            key={skip.id}
            selectedSkipData={selectedSkip}
          />
        ))}
      </div>
      <BottomDrawer
        isOpen={selectedSkip !== null}
        hirePeriodDays={selectedSkip?.hire_period_days}
        yardSize={selectedSkip?.size}
      />
    </div>
  );
};

export default SelectSkipSection;
