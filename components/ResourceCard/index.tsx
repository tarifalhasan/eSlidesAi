import Image from "next/image";
import { FC } from "react";

import { FaTrashCan } from "react-icons/fa6";
import {
  IoChevronDownCircleOutline,
  IoChevronUpCircleOutline,
} from "react-icons/io5";

interface IResourcesCard {
  category: string;
  reference: string;
  index: number;
}

const ResourcesCard: FC<IResourcesCard> = ({ category, reference, index }) => {
  return (
    <div>
      <h3 className="text-center text-xl font-normal  text-dark-999">
        Resource {index}
      </h3>
      <div className="border border-border bg-white rounded-[6px]">
        <div className="flex  gap-2 items-center justify-end p-3">
          <button>
            <IoChevronDownCircleOutline size={25} />
          </button>
          <button>
            <IoChevronUpCircleOutline size={25} />
          </button>
          <button>
            <FaTrashCan size={21} />
          </button>
        </div>
        <div className=" px-5  py-5">
          <ul className="space-y-4">
            <li className="flex items-center justify-between">
              <span className="text-sm opacity-60 font-normal text-black block">
                Category:
              </span>
              <span className="text-sm font-normal text-black block">
                {category}
              </span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-sm opacity-60 font-normal text-black block">
                Reference:
              </span>
              <span className="text-sm font-normal text-black block">
                {reference}
              </span>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-end pt-4 pb-2  px-2">
          {category.toLocaleLowerCase() === "pdf" ? (
            <Image src={"/icons/PDF.svg"} width={36} height={36} alt="pdf" />
          ) : category.toLocaleLowerCase() === "video" ? (
            <Image
              src={"/icons/Video.svg"}
              width={38}
              height={38}
              alt="video"
            />
          ) : category.toLocaleLowerCase().replace(/\s+/g, "") ===
            "textfile" ? (
            <Image
              src={"/icons/Edit Text File.svg"}
              width={38}
              height={38}
              alt="Edit Text File"
            />
          ) : category.toLocaleLowerCase() === "url" ? (
            <Image
              src={"/icons/Website.svg"}
              width={38}
              height={38}
              alt="Edit Text File"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ResourcesCard;
