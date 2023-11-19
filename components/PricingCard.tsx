import { cn } from "@/lib/utils";
import { IPricingCard } from "@/types";
import { FC } from "react";
import { FaCheck } from "react-icons/fa6";
import { Button } from "./ui/button";

interface CardProps {
  data: IPricingCard;
  isActiveCard: boolean;
  plan_status: "monthly" | "annually";
}

const PricingCard: FC<CardProps> = ({ data, isActiveCard, plan_status }) => {
  return (
    <div
      className={cn(
        "rounded-[25px] p-5 xl:p-7 space-y-5",
        isActiveCard ? "border-2 border-[#000]" : "border border-[#C2C2C2]"
      )}
    >
      <h3 className="text-3xl font-medium  text-dark-999">{data.name}</h3>
      <p className="text-sm xl:text-base font-normal text-dark-999">
        {data.des}
      </p>
      <div className="flex gap-1 items-end">
        <h2 className="font-semibold text-gray-1000  text-6xl">
          ${data.price}
        </h2>
        <h5 className=" mb-2 text-gray-550 text-base font-semibold">
          /{plan_status === "monthly" ? "monthly" : "yearly"}
        </h5>
      </div>
      <Button
        className=" h-10 w-full"
        variant={isActiveCard ? "default" : "outline"}
      >
        Buy plan
      </Button>
      <ul className="space-y-4">
        {data.features.map((f, index) => (
          <li key={index} className=" flex items-center gap-1">
            <FaCheck />
            <span className="text-base font-medium">{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
