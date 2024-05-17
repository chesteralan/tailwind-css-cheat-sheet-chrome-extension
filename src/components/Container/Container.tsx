import Category from "../Category";
import useFilterData from "../../hooks/useFilterData";
import { useState } from "react";

const Container = () => {
  const filteredData = useFilterData();
  const [openCategory, setOpenCategory] = useState<number | null>(null);
  const hasClassName = filteredData.some((category) =>
    category.content2.some((c2) => c2.table2.some((t2) => t2.found)),
  );
  return (
    <div className="flex flex-col gap-4 px-4 pb-10">
      {filteredData.map((category, index) => (
        <Category
          data={category}
          key={index}
          isOpened={openCategory === index}
          onClick={() => setOpenCategory(openCategory === index ? null : index)}
        />
      ))}
      {!hasClassName && <div>Nothing found!</div>}
    </div>
  );
};
export default Container;
