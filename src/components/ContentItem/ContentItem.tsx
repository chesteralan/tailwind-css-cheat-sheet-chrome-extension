import Table from "./Table.tsx";
import { ContentData } from "@/types/dataTypes.ts";

type ContentItemProps = {
  data: ContentData;
  isOpen: boolean;
};
const ContentItem = ({ data, isOpen = false }: ContentItemProps) => {
  const { description, table2, noDot = false, noCopy = false } = data;

  return (
    <div
      className={`overflow-hidden bg-gray-100 p-3 ${isOpen ? "" : "hidden"}`}
    >
      <p className="relative w-full text-sm font-semibold leading-tight text-gray-800">
        {description}
      </p>
      <Table table={table2} noDot={noDot} noCopy={noCopy} />
    </div>
  );
};

export default ContentItem;
