"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { CopyToClipboard } from "react-copy-to-clipboard";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";
interface IGenaratePresention1 {
  handleGenaratePresention: (open: boolean) => void;
  open: boolean;
}
const GenaratePresention1: FC<IGenaratePresention1> = ({
  handleGenaratePresention,
  open,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [countdown, setCountdown] = useState(3);
  const [copied, setCopied] = useState(false);
  const [presentationUrl, setPresentationUrl] = useState(
    "www.github.com/tarifalhasan"
  );
  const router = useRouter();
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 1) {
          setIsLoading(false); // Set isLoading to false after countdown finishes
          clearInterval(timer); // Clear the interval when countdown reaches 0
          return 0;
        }
        return prevCountdown - 1; // Decrease countdown by 1 every second
      });
    }, 1000); // Update countdown every second (1000 milliseconds)

    return () => clearInterval(timer);
  }, []);
  return (
    <Dialog open={open} onOpenChange={handleGenaratePresention}>
      {/* <DialogTrigger>Open</DialogTrigger> */}
      <DialogContent className="h-[360px] flex justify-center items-center max-w-[879px]">
        <div className="flex w-full items-center flex-col space-y-5">
          <Image
            src={"/icons/logo.png"}
            width={116}
            height={103}
            alt="logo"
            className=""
          />
          <h2 className="text-center text-4xl font-semibold">
            {isLoading
              ? "Loading presentation..."
              : "Your all-new presentation is ready!"}
          </h2>
          {isLoading ? (
            <p className="text-center max-w-[440px] mx-auto bg-[#F0F1F7] justify-center w-full flex items-center h-[39px] px-10 rounded font-semibold text-base">
              This could take up to {countdown} seconds
            </p>
          ) : (
            <p className="text-center mx-auto bg-[#F0F1F7] justify-center w-auto flex items-center h-[39px] px-10 rounded font-semibold text-base">
              {presentationUrl}
            </p>
          )}

          {!isLoading && (
            <div className="flex items-center justify-center gap-4">
              <TooltipProvider>
                <Tooltip
                  open={copied}
                  onOpenChange={() => setCopied((prev) => !prev)}
                >
                  <TooltipTrigger>
                    <CopyToClipboard
                      text={presentationUrl}
                      onCopy={() => setCopied(true)}
                    >
                      <Button
                        className="!text-base h-[37px]"
                        variant={"secondary"}
                      >
                        Copy
                      </Button>
                    </CopyToClipboard>
                  </TooltipTrigger>
                  <TooltipContent onMouseEnter={() => setCopied(false)}>
                    {copied ? <p>Copied</p> : <p>Copy URL</p>}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <Button className="!text-base h-[37px]" variant={"secondary"}>
                Share
              </Button>
              <Button className="!text-base h-[37px]">
                <a
                  href={`https://${presentationUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open
                </a>
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GenaratePresention1;
