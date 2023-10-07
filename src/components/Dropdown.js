import React, { useEffect, useState, useRef } from "react";
import { GoChevronDown, GoChevronRight } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
  const [isOpened, setOpen] = useState(false);
  const divEl = useRef();

  const Icon = (
    <span className="text-2xl">
      {isOpened ? <GoChevronDown /> : <GoChevronRight />}
    </span>
  );

  const handleClick = (option) => {
    onChange(option);
    setOpen(!isOpened);
  };

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }

      if (!divEl.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center rounded cursor-pointer"
        onClick={() => setOpen(!isOpened)}
      >
        {value?.label || "Select Colour"}
        {Icon}
      </Panel>
      {isOpened && (
        <Panel className="absolute top-full rounded ">{renderedOptions}</Panel>
      )}
    </div>
  );
}

export default Dropdown;
