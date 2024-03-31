import { CategoryCollection } from "../../__generated__/generatedTypes.ts";
import Content from "../Content";
import { useState } from "react";
import Arrow from "../Arrow";
import useSearch from "../../hooks/useSearch";

type CategoryProps = {
  data: CategoryCollection;
};
const Category = ({ data: { title, content } }: CategoryProps) => {
  const { isSearching } = useSearch();
  const [open, setOpen] = useState(false);
  const isOpen = isSearching || open;
  return (
    <div className="cursor-pointer overflow-hidden rounded-xl border border-gray-100 bg-white hover:shadow-lg">
      <div onClick={() => setOpen(!open)}>
        <h2
          className={`${isOpen && "border-b border-gray-200"} flex items-center justify-between rounded-t-lg bg-gray-50 px-3 py-2.5`}
        >
          {title}
          <Arrow open={isOpen} />
        </h2>
      </div>
      {isOpen && (
        <>
          {content?.map((data, index) => <Content data={data} key={index} />)}
        </>
      )}
    </div>
  );
};

export default Category;
