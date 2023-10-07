import React from "react";
import Table from "../components/Table";

function TablePage() {
  const data = [
    { name: "Apple", color: "bg-red-500", score: 5 },
    { name: "Orange", color: "bg-orange-500", score: 3 },
    { name: "Grape", color: "bg-purple-500", score: 1 },
    { name: "Banana", color: "bg-yellow-500", score: 2 },
    { name: "Lime", color: "bg-green-500", score: 4 },
  ];

  const config = [
    { label: "Fruits", render: (fruit) => fruit.name },
    {
      label: "Color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`} />,
    },
    { label: "Score", render: (fruit) => fruit.score },
  ];

  const keyFn = (data) => {
    return data.name;
  };

  return (
    <div>
      <Table data={data} config={config} keyFn={keyFn}></Table>
    </div>
  );
}
export default TablePage;
