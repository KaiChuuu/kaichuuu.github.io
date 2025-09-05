import GithubIcon from "@/assets/logos/github.svg?react";
import LinkedInIcon from "@/assets/logos/linkedin.svg?react";
import ItchIoIcon from "@/assets/logos/itch-io.svg?react";

function Footer() {
  return (
    <div className="pt-12 items-center flex flex-col bg-vert-grey-grey-gradient text-black">
      <div className="flex text-base-title font-bold">Kai Chu</div>

      <div className="mt-8 mb-3 flex gap-7 items-center text-base-lg text-dark-blue">
        <a className="a-default" href="#portfolio">
          PORTFOLIO
        </a>
        <a className="a-default" href="#about">
          ABOUT ME
        </a>
      </div>

      <div className="mt-3 p-5 flex gap-7 items-center text-base-lg text-dark-blue bg-warm-white w-full justify-center">
        <a
          href="https://www.linkedin.com/in/kaichuuu/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <LinkedInIcon className="a-default w-8 h-8" />
        </a>
        <a
          href="https://github.com/KaiChuuu"
          rel="noopener noreferrer"
          target="_blank"
        >
          <GithubIcon className="a-default w-8 h-8" />
        </a>
        <a
          href="https://happyteam.itch.io/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <ItchIoIcon className="a-default w-8 h-8" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
