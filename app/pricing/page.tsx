import PricingCard from "@/components/PricingCard";
import AuthenticHeader from "@/components/layout/AuthenticHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IPricingCard } from "@/types";

const Pricing = () => {
  const MonthlyPricingData: IPricingCard[] = [
    {
      name: "Basic",
      des: "Secondary text here that states a fact about this particular plan",
      price: 5,
      features: [
        "3 presentations / day",
        "20 MB / presentation ",
        "50 pages / presentation",
      ],
    },
    {
      name: "Pro",
      des: "Secondary text here that states a fact about this particular plan",
      price: 12,
      features: [
        "3 presentations / day",
        "20 MB / presentation ",
        "50 pages / presentation",
      ],
    },
    {
      name: "Advanced",
      des: "Secondary text here that states a fact about this particular plan",
      price: 25,
      features: [
        "3 presentations / day",
        "20 MB / presentation ",
        "50 pages / presentation",
        "",
        "",
        "",
        "",
      ],
    },
  ];
  const AnnuallyPricingData: IPricingCard[] = [
    {
      name: "Basic",
      des: "Secondary text here that states a fact about this particular plan",
      price: 60,
      features: [
        "3 presentations / day",
        "20 MB / presentation ",
        "50 pages / presentation",
      ],
    },
    {
      name: "Pro",
      des: "Secondary text here that states a fact about this particular plan",
      price: 144,
      features: [
        "3 presentations / day",
        "20 MB / presentation ",
        "50 pages / presentation",
      ],
    },
    {
      name: "Advanced",
      des: "Secondary text here that states a fact about this particular plan",
      price: 300,
      features: [
        "3 presentations / day",
        "20 MB / presentation ",
        "50 pages / presentation",
        "",
        "",
        "",
        "",
      ],
    },
  ];
  return (
    <div>
      <AuthenticHeader />
      <div className="pt-[105px]">
        <div className="container  py-5 xl:py-12 space-y-12">
          <h2 className=" text-[3.5rem] md:text-[5.375em] leading-tight md:leading-[93.023%] text-center text-black">
            Simple, affordable <br /> pricing
          </h2>
          <Tabs defaultValue="monthly">
            <div className="flex items-center justify-center">
              <TabsList className="">
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="annually">Annually</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="monthly">
              <div className="grid py-2 lg:py-8 sm:grid-cols-2 xl:grid-cols-3 gap-7 xl:gap-10">
                {MonthlyPricingData.map((data, index) => (
                  <PricingCard
                    isActiveCard={index === 1}
                    data={data}
                    key={index}
                    plan_status="monthly"
                  />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="annually">
              <div className="grid lg:py-8 sm:grid-cols-2 xl:grid-cols-3 gap-7 xl:gap-10">
                {AnnuallyPricingData.map((data, index) => (
                  <PricingCard
                    isActiveCard={index === 1}
                    data={data}
                    key={index}
                    plan_status="annually"
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
