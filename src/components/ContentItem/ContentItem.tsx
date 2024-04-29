import { ContentEntity } from "../../__generated__/generatedTypes.ts";
import Table from "./Table.tsx";

type ContentItemProps = {
  data: ContentEntity;
};
const ContentItem = ({ data }: ContentItemProps) => {
  const { description, docs, table } = data;

  return (
    <div className="overflow-hidden bg-gray-100 p-3">
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
      <Table table={table} />
    </div>
  );
};

export default ContentItem;
