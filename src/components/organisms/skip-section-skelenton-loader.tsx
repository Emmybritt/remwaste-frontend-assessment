const SkipCardSkeleton = () => {
  return (
    <div className="border-2 bg-[#1c1c1c] glassy-card rounded-lg p-[1.5rem] relative animate-pulse h-[30rem]">
      <div className="absolute right-12 top-10 bg-grey/40 h-6 w-24 rounded-4xl"></div>

      <div className="bg-grey/40 rounded-lg h-[210px] w-full mb-5"></div>

      <div className="space-y-3">
        <div className="h-6 bg-grey/40 w-2/3 rounded-md"></div>
        <div className="h-4 bg-grey/40 w-1/2 rounded-md"></div>
        <div className="h-5 bg-grey/40 w-3/4 rounded-md my-3"></div>
      </div>

      <div className="mt-6 h-[45px] bg-grey/40 rounded-md w-full"></div>
    </div>
  );
};

export default SkipCardSkeleton;
