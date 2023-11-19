import Image from "next/image";

const ResourcesCard = () => {
  return (
    <div>
      <h3 className="text-center text-xl font-normal  text-dark-999">
        Resource 1
      </h3>
      <div className="border border-border bg-white rounded-[6px]">
        <div className="flex  gap-3 items-center justify-end p-3">
          <button>
            <Image
              src={"/icons/Slide Up.svg"}
              alt="slide-up"
              width={12}
              height={12}
            />
          </button>
          <button>
            <Image
              src={"/icons/Slide Down.svg"}
              alt="slide-up"
              width={12}
              height={12}
            />
          </button>
          <button>
            <Image
              src={"/icons/Delete Trashsvg"}
              alt="slide-up"
              width={12}
              height={12}
            />
          </button>
        </div>
        <div className=" px-5  py-5">
          <ul className="space-y-4">
            <li className="flex items-center justify-between">
              <span className="text-sm opacity-60 font-normal text-black block">
                Category:
              </span>
              <span className="text-sm font-normal text-black block">PDF</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-sm opacity-60 font-normal text-black block">
                Reference:
              </span>
              <span className="text-sm font-normal text-black block">
                Math Textbook
              </span>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-end pt-4 pb-2  px-2">
          <Image src={"/icons/PDF.svg"} width={36} height={36} alt="pdf" />
        </div>
      </div>
    </div>
  );
};

export default ResourcesCard;
