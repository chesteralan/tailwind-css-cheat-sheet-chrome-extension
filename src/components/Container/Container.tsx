import Category from "../Category";
import useFilterData from "../../hooks/useFilterData";
import { useState } from "react";

const Container = () => {
  const jsonData = useFilterData();
  const [openCategory, setOpenCategory] = useState<number | null>(null);
  return (
    <div className="flex flex-col gap-4 px-4 pb-10">
      {jsonData?.map((category, index) => (
        <Category
          data={category}
          key={index}
          isOpened={openCategory === index}
          onClick={() => setOpenCategory(openCategory === index ? null : index)}
        />
      ))}
    </div>
  );
};
export default Container;
