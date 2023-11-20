"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const UnAuthenticHeader = () => {
  const router = useRouter();
  return (
    <div className="  bg-white border-b border-black border-opacity-30 ">
      <div className="flex h-[73px] container items-center justify-between">
        <Link href={"/"}>
          <Image
            alt="eslider"
            src={"/images/logo.png"}
            width={108}
            height={38}
          />
        </Link>
        <Button className=" active:opacity-60 hover:opacity-60 text-sm xl:text-base xl:font-semibold h-[37px]">
          <Link href={"/answer-some-questions"}> Generate your slides</Link>
        </Button>
      </div>
    </div>
  );
};

export default UnAuthenticHeader;
