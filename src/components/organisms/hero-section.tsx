const HeroSection = () => {
  return (
    <div className="flex items-center flex-col justify-center">
      <h3
        className="text-center font-bold mb-[.4rem] mt-[2rem]"
        style={{ fontSize: "clamp(23px, 5vw, 30px)" }}
      >
        Choose Your Skip Size
      </h3>
      <p className="text-[16px] text-center text-text">
        Select the skip size that best suits your needs
      </p>
    </div>
  );
};

export default HeroSection;
