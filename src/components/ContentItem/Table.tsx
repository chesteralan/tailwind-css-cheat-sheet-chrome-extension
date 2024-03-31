import TableRow from "./TableRow.tsx";

type TableProps = {
  table: Array<string[] | null> | null | undefined;
};
const Table = ({ table }: TableProps) => {
  return (
    <table className="mb-4 mt-4 w-full rounded bg-gray-100 dark:bg-gray-800">
      <tbody>
        {table?.map((row, index) => <TableRow row={row} key={index} />)}
      </tbody>
    </table>
  );
};

export default Table;
