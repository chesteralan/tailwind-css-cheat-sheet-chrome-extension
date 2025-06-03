import TableRow from "./TableRow.tsx";
import { TableData } from "@/types/dataTypes.ts";

type TableProps = {
  table: TableData[];
  noDot?: boolean | null;
  noCopy?: boolean | null;
};
const Table = ({ table, noDot = false, noCopy = false }: TableProps) => {
  return (
    <table className="mb-4 mt-4 w-full rounded bg-gray-100">
      <tbody>
        {table?.map((data, index) => <TableRow data={data} key={index} noDot={noDot} noCopy={noCopy} />)}
      </tbody>
    </table>
  );
};

export default Table;
