import Content from "../Content";
import Arrow from "../Arrow";
import useSearch from "@/hooks/useSearch";
import { useState } from "react";
import { CategoryData } from "@/types/dataTypes.ts";

type CategoryProps = {
  data: CategoryData;
  isOpened: boolean;
  onClick: () => void;
  className?: string;
};

const Category = ({
  data: { title, content2, found },
  isOpened,
  onClick,
  className
}: CategoryProps) => {
  const { isSearching } = useSearch();
  const isOpen = isSearching || isOpened;
  const [openContent, setOpenContent] = useState<number | null>(null);
  const hasClassName = content2.some((c2) => c2.table2.some((t2) => t2.found));
  return (
    <div
      className={`w-full cursor-pointer overflow-hidden rounded-xl bg-white border shadow-md ${found === true && hasClassName ? "" : "hidden"} ${className}`}
    >
      <button className="w-full" role="button" onClick={onClick}>
        <h2
          className={`${isOpen && "border-b border-gray-200"} flex items-center justify-between rounded-t-lg bg-gray-50 px-3 py-2.5`}
        >
          {title}
          <Arrow open={isOpen} />
        </h2>
      </button>
      {isOpen && (
        <>
          {content2?.map((data, index) => (
            <Content
              data={data}
              key={index}
              isOpened={openContent === index}
              onClick={() =>
                setOpenContent(openContent === index ? null : index)
              }
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Category;
