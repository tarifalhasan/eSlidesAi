import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className=" h-[469px] sm:h-[440px] lg:h-[881px] bg-hero bg-opacity-70 flex items-center justify-center">
      <div className="flex flex-col items-center space-y-5">
        <h1 className=" font-normal text-center text-4xl xl:text-7xl">
          Generate Powerful <br /> Presentations in{" "}
          <b className=" font-semibold">Two Steps</b>
        </h1>
        <p className="text-base xl:text-xl">
          Subtext subtext subtext subtext subtext subtext
        </p>
        <div className=" grid grid-cols-2 py-3  gap-4 max-w-[calc(203px*2)] ">
          <Button>Get Started Now</Button>
          <Button variant={"outline"}>How to Use</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
