import TableRow from "./TableRow.tsx";
import { TableData } from "@/types/dataTypes.ts";

type TableProps = {
  table: TableData[];
};
const Table = ({ table }: TableProps) => {
  return (
    <table className="mb-4 mt-4 w-full rounded bg-gray-100">
      <tbody>
        {table?.map((data, index) => <TableRow data={data} key={index} />)}
      </tbody>
    </table>
  );
};

export default Table;
