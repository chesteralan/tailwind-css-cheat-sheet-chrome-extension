import { useState } from "react";
import { TableData } from "../../types/dataTypes.ts";

type TableRowProps = {
  data: TableData;
};
const TableRow = ({ data }: TableRowProps) => {
  const { table: row, found } = data;
  const [copied, setCopied] = useState(false);

  const hasClassName = (row?.at(0) as string)?.length > 0;
  const onClickHandler = () => {
    if (!hasClassName) return;
    if (!copied) navigator.clipboard.writeText(row?.at(0) as string);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };
  return (
    <tr
      className={`group cursor-pointer 
      ${hasClassName && "hover:bg-gray-200"} 
      ${row?.at(0) === "no" ? "hidden" : ""}
      ${found === true || row?.at(0) === "" ? "" : "hidden"}
      `}
      onClick={onClickHandler}
    >
      <td className="whitespace-nowrap border-b border-gray-300 p-2 font-mono text-xs text-purple-700 ">
        {row?.at(0) ? `.${row?.at(0)}` : ""}
      </td>
      <td className="border-b border-gray-300 p-2 font-mono text-xs text-blue-700">
        {row?.at(1) && (
          <span
            dangerouslySetInnerHTML={{
              __html: (row?.at(1) as string)?.replace("\n", "<br />"),
            }}
          ></span>
        )}
      </td>
      <td className="border-b border-gray-300 p-2 font-mono text-xs text-gray-500">
        {row?.at(2) && (
          <span
            dangerouslySetInnerHTML={{
              __html: (row?.at(2) as string)?.replace("\n", "<br />"),
            }}
          ></span>
        )}
      </td>
      <td className="border-b border-gray-300 p-2 font-mono text-xs">
        {row?.at(3) ? (
          <div
            className={`h-4 w-4 border`}
            style={{ backgroundColor: `${row?.at(3)}` }}
          ></div>
        ) : null}
      </td>
      <td className="relative cursor-pointer border-b border-gray-300 p-2 font-mono text-xs text-blue-600 opacity-0 group-hover:opacity-100">
        {hasClassName ? (
          <span
            className={`absolute right-0 top-1/3 -translate-y-1/2 ${copied && "text-red-600"}`}
          >
            {copied ? `copied` : `copy`}
          </span>
        ) : null}
      </td>
    </tr>
  );
};

export default TableRow;
