import type { FC, SVGProps } from "react";

import CppIcon from "@/assets/logos/cpp.svg?react";
import CsharpIcon from "@/assets/logos/csharp.svg?react";

export default function LogoMap({ name }: { name: string }) {
  const logos: Record<string, FC<SVGProps<SVGSVGElement>>> = {
    cpp: CppIcon,
    csharp: CsharpIcon,
  };

  const Logo = logos[name];

  return (
    <div className="w-10 h-10 flex items-center justify-center bg-white border-black border-1 rounded-full">
      <Logo className={"w-8 h-8 text-blue"} />
    </div>
  );
}
