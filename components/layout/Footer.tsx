import Link from "next/link";
import { FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="container  gap-4  py-5 border-t border-black flex items-center justify-between">
      <p className="text-xs xl:text-xl font-normal font-inter">
        Powered by{" "}
        <a
          href="https://replicate.com/"
          target="_blank"
          rel="noopener noreferrer"
          className=" underline"
        >
          Replicate
        </a>{" "}
        and{" "}
        <a
          href="https://replicate.com/"
          target="_blank"
          rel="noopener noreferrer"
          className=" underline"
        >
          Bytescale
        </a>
        . Created by{" "}
        <a
          href="https://twitter.com/nutlope"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Hassan
        </a>
        ’s brother (hassan@hey.com).
      </p>
      <ul className=" inline-flex items-center gap-4">
        <li>
          <Link
            href="https://twitter.com/nutlope"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-2xl transition-all duration-500 hover:text-sky-300" />
          </Link>
        </li>
        <li>
          <Link
            href="https://twitter.com/nutlope"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl transition-all duration-500 hover:text-sky-300" />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
