import { useState } from "react";

import UpArrowIcon from "@/assets/up-arrow.svg?react";

interface DropdownProps {
  name?: string;
  width?: string;
  options: string[];
  onSelect: (value: string) => void;
}

export default function Dropdown({
  name = "",
  width = "w-40",
  options,
  onSelect,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (value: string) => {
    setSelected(value);
    onSelect(value.toLowerCase());
    setIsOpen(false);
  };

  return (
    <div className={`relative ${width}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-interact-grey px-4 py-2 text-left shadow-lg flex justify-between items-center"
      >
        <span>{selected || name}</span>
        <div
          className={`flex items-center justify-center transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <UpArrowIcon className="w-4 h-4" />
        </div>
      </button>

      {isOpen && (
        <div className="absolute mt-1 w-full text-base-lg bg-dark-grey shadow-lg z-10">
          <div
            key=""
            onClick={() => handleSelect("")}
            className="px-4 py-2 hover:bg-interact-grey cursor-pointer"
          >
            {"Any"}
          </div>
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 hover:bg-interact-grey cursor-pointer"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
