import Category from "../Category";
import useFilterData from "../../hooks/useFilterData";

const Container = () => {
  const jsonData = useFilterData();

  return (
    <div className="flex flex-col gap-4 px-4 pb-10">
      {jsonData?.map((category, index) => (
        <Category data={category} key={index} />
      ))}
    </div>
  );
};
export default Container;
