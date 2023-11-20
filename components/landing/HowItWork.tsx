import lines from "@/public/icons/lines.svg";
import { ArrowUp, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { FaQuestion } from "react-icons/fa";
import { Button } from "../ui/button";
interface ICARD_DATA {
  icon: string | ReactNode;
  title: string;
  description: string;
}

const HowItWork = () => {
  const CARD_DATA: ICARD_DATA[] = [
    {
      icon: <ArrowUp size={45} />,
      title: "Sign Up",
      description: "Create an account in less than 10 seconds",
    },
    {
      icon: <FaQuestion size={45} />,
      title: "Answer Some Questions",
      description: "-----------",
    },
    {
      icon: <Plus size={45} />,
      title: "Add Resources",
      description:
        "Provide some resources that you want the presentation to be about - then enjoy your brand new presentation!",
    },
  ];

  return (
    <div id="how_it_work" className=" py-5 space-y-8 xl:py-8 container">
      <div>
        <h2 className=" text-3xl md:text-4xl lg:text-6xl font-semibold">
          How it Works
        </h2>
        <p className=" text-xl font-normal sm:text-3xl">So Simple...</p>
      </div>
      <div className=" grid md:grid-cols-2 xl:grid-cols-3 gap-16">
        {CARD_DATA.map((data, index) => (
          <div
            className="rounded-[10px] bg-dark-gray-25 shadow-card-sm h-[447px] flex  justify-center"
            key={index}
          >
            <div className="flex pt-16 max-w-[284px] flex-col items-center space-y-5">
              <div className="  w-[85px] h-[85px] bg-black text-white z-30 rounded-full grid place-items-center relative">
                {data.icon}
                <Image
                  src={lines}
                  alt="lines"
                  className=" z-20 absolute top-[calc(85/2)] right-[4.7rem]"
                />
              </div>
              <h2 className="font-normal  text-center text-3xl xl:text-[2.8125em]">
                {data.title}
              </h2>
              <p className="font-normal  text-center text-xl ">
                {data.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className=" py-10 xl:py-14 flex justify-center">
        <Button>
          <Link href={"/answer-some-questions"}>
            Generate a presentation now!
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default HowItWork;
