import GithubIcon from "@/assets/logos/github.svg?react";
import LinkedInIcon from "@/assets/logos/linkedin.svg?react";
import ItchIoIcon from "@/assets/logos/itch-io.svg?react";

function Navbar() {
  return (
    <div>
      <div className="bg-white border-b border-white-grey text-dark-blue w-full">
        <div className="mx-auto flex flex-wrap gap-5 justify-between items-center px-5 py-4 max-w-[1320px]">
          <div className="flex text-base-title font-bold">Kai Chu</div>

          <div className="flex gap-15 items-center text-base-lg text-dark-blue">
            <a
              className="a-default"
              href="#portfolio"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              PORTFOLIO
            </a>
            <a
              className="a-default"
              href="#about"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              ABOUT ME
            </a>
          </div>
        </div>
      </div>
      <div className="bg-warm-white border-b border-white-grey text-dark-blue w-full">
        <div className="mx-auto flex flex-wrap gap-6 justify-end items-center px-5 py-2 max-w-[1320px]">
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
    </div>
  );
}

export default Navbar;
