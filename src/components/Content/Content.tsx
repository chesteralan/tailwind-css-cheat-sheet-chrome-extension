import ContentItem from "../ContentItem";
import Arrow from "../Arrow";
import useSearch from "../../hooks/useSearch";
import { type ContentEntity } from "../../__generated__/generatedTypes";

type ContentProps = {
  data: ContentEntity;
  isOpened: boolean;
  onClick: () => void;
};
const Content = ({ data, isOpened, onClick }: ContentProps) => {
  const { title } = data;
  const { isSearching } = useSearch();
  const isOpen = isSearching || isOpened;

  return (
    <div>
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
      {isOpen && <ContentItem data={data} />}
    </div>
  );
};

export default Content;
