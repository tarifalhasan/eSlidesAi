import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const UnAuthenticHeader = () => {
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
        <Button className=" active:opacity-60 hover:opacity-60 text-sm xl:text-xl xl:font-semibold h-[37px]">
          Generate your slides
        </Button>
      </div>
    </div>
  );
};

export default UnAuthenticHeader;
