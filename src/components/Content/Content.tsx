import ContentItem from "../ContentItem";
import Arrow from "../Arrow";
import useSearch from "../../hooks/useSearch";
import { ContentData } from "../../types/dataTypes.ts";

type ContentProps = {
  data: ContentData;
  isOpened: boolean;
  onClick: () => void;
};
const Content = ({ data, isOpened, onClick }: ContentProps) => {
  const { title, found, table2 } = data;
  const { isSearching } = useSearch();
  const isOpen = isSearching || isOpened;
  const hasClassNames = table2.some((t) => t.found);
  return (
    <div className={found === true && hasClassNames ? "" : "hidden"}>
      <div
        onClick={onClick}
        className={`
          group flex cursor-pointer items-center border-b border-gray-100 px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900
          ${isOpen ? "bg-gray-100" : ""}
        `}
      >
        <h3 className="flex-1 font-mono text-sm">{title}</h3>
        <Arrow open={isOpen} />
      </div>
      <ContentItem data={data} isOpen={isOpen} />
    </div>
  );
};

export default Content;
