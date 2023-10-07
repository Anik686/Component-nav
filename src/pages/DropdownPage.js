import React, { useState } from "react";
import Dropdown from "../components/Dropdown";

function DropdownPage() {
  const options = [
    { label: "I See REEEEEEED", value: "red" },
    { label: "I See GREEEEEEN", value: "green" },
    { label: "I See BLUEEEEEE", value: "blue" },
  ];

  const [select, setSelect] = useState(null);

  const handleSelect = (selection) => {
    setSelect(selection);
  };

  return <Dropdown options={options} value={select} onChange={handleSelect} />;
}

export default DropdownPage;
