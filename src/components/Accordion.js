import React, { useState } from "react";
import { GoChevronDown, GoChevronRight } from "react-icons/go";

function Accordion({ items }) {
  const [expandedIndex, setIndex] = useState(0);

  const handleClick = (CIndex) => {
    expandedIndex === CIndex ? setIndex(-1) : setIndex(CIndex);
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = expandedIndex === index;

    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronRight />}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          className="flex justify-between items-center mb-0.5 p-3 border-b bg-gray-100 rounded-lg cursor-pointer"
          onClick={() => {
            handleClick(index);
          }}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="rounded">{renderedItems}</div>;
}
export default Accordion;
