import { useState } from "react";
import useFilterData from "@/hooks/useFilterData";
import useSearch from "@/hooks/useSearch";
import { lazy } from "react";

const Footer = lazy(() => import('@/components/Footer'));
const Category = lazy(() => import('@/components/Category'));

const Container = () => {
  const filteredData = useFilterData();
  const { isSearching } = useSearch();
  const [openCategory, setOpenCategory] = useState<number | null>(null);
  const hasClassName = filteredData.some((category) =>
    category.content2.some((c2) => c2.table2.some((t2) => t2.found)),
  );
  return (
    <div className="flex flex-col gap-4 h-[calc(100vh-88px)] justify-between">
      <div className={`flex flex-wrap gap-4 px-4`}>
      {hasClassName ? filteredData.map((category, index) => (
        <Category
          data={category}
          key={index}
          isOpened={openCategory === index}
          onClick={() => setOpenCategory(openCategory === index ? null : index)}
          className={`${isSearching ? "" : "lg:w-[calc(50%-16px)] xl:w-[calc(33.3333%-11px)]"}`}
        />
      )) : <div>Nothing found!</div>}
      </div>
      <Footer />
    </div>
  );
};

export default Container;
