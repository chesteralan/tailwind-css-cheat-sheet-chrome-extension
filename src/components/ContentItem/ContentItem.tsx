import Table from "./Table.tsx";
import { ContentData } from "../../types/dataTypes.ts";

type ContentItemProps = {
  data: ContentData;
  isOpen: boolean;
};
const ContentItem = ({ data, isOpen = false }: ContentItemProps) => {
  const { description, docs, table2 } = data;

  return (
    <div
      className={`overflow-hidden bg-gray-100 p-3 ${isOpen ? "" : "hidden"}`}
    >
      <p className="relative w-full text-sm font-semibold leading-tight text-gray-800">
        {description}
        <a
          className="absolute right-0 font-mono text-xs text-blue-600 hover:underline"
          href={docs}
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          View docs
        </a>
      </p>
      <Table table={table2} />
    </div>
  );
};

export default ContentItem;
