"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { IoIosArrowForward } from "react-icons/io";

interface IHeaderProps {
  show_tabs_link?: boolean;
}
const AuthenticHeader: FC<IHeaderProps> = ({ show_tabs_link = false }) => {
  const pathName = usePathname();

  const createSuccessPath = pathName + "?success";

  console.log();
  return (
    <div className="  z-[9999] fixed left-0 right-0 top-0 bg-white border-b flex items-center justify-between border-black border-opacity-30 ">
      <div className="flex h-[73px] container items-center justify-between">
        <Link href={"/"}>
          <Image
            alt="eslider"
            src={"/images/logo.png"}
            width={108}
            height={38}
          />
        </Link>
        {show_tabs_link && (
          <ul className={cn(" hidden lg:flex items-center gap-4")}>
            <li
              className={cn(
                pathName === "/answer-some-questions"
                  ? "opacity-100"
                  : " opacity-30"
              )}
            >
              <Link
                href={"/answer-some-questions"}
                className="inline-flex items-center gap-2"
              >
                <span
                  className={cn(
                    " w-5 h-5 rounded  bg-dark-999 grid place-items-center text-base text-center text-white"
                  )}
                >
                  1
                </span>
                <span className={cn(" font-medium  text-sm xl:text-base")}>
                  Fill in some infomation
                </span>
              </Link>
            </li>
            <IoIosArrowForward />
            <li
              className={cn(
                pathName === "/add-your-resources"
                  ? "opacity-100"
                  : " opacity-30"
              )}
            >
              <Link
                href={"/add-your-resources"}
                className="inline-flex items-center gap-2"
              >
                <span
                  className={cn(
                    " w-5 h-5 rounded  bg-dark-999 grid place-items-center text-base text-center text-white"
                  )}
                >
                  2
                </span>
                <span className={cn(" font-medium text-sm xl:text-base ")}>
                  Add your resources
                </span>
              </Link>
            </li>
            <li
              className={cn(
                createSuccessPath === "/add-your-resources?success"
                  ? "opacity-100"
                  : " opacity-30"
              )}
            >
              <Link
                href={"/add-your-resources"}
                className="inline-flex items-center gap-2"
              >
                <span
                  className={cn(
                    " w-5 h-5 rounded  bg-dark-999 grid place-items-center text-base text-center text-white"
                  )}
                >
                  3
                </span>
                <span className={cn(" font-medium  text-sm xl:text-base")}>
                  Enjoy your generated slides!
                </span>
              </Link>
            </li>
          </ul>
        )}

        <ul className="flex items-center gap-4">
          <li>
            <Link
              className="text-xl text-dark-999 font-normal"
              href={"/pricing"}
            >
              Pricing
            </Link>
          </li>
          <li>
            <div className="credit_count">
              <h3 className=" font-medium pl-3 text-xs md:text-xl">
                2 credits
              </h3>
              <Avatar className=" w-5 h-5 sm:w-9 sm:h-9">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AuthenticHeader;
