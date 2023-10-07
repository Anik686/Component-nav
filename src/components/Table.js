import React from "react";

function Table({ data, config, keyFn }) {
  const renderedHeaders = config.map((item) => {
    return <th key={item.label}>{item.label}</th>;
  });

  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((cell) => {
      return (
        <td key={cell.label} className="p-3">
          {cell.render(rowData)}
        </td>
      );
    });

    return (
      <tr key={keyFn(rowData)} className="border-b">
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
