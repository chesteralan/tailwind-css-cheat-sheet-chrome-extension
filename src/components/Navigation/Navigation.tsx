import SearchInput from "../SearchInput";
import {
  type SearchDataType,
  useSearchContext,
} from "../../context/SearchContext";

const Navigation = () => {
  const { setVersion } = useSearchContext() as SearchDataType;
  return (
    <div className="sticky top-0 z-50">
      <div className="row flex items-center justify-between gap-4 border border-gray-200 bg-gray-50 p-4 shadow-sm">
        <h1 className="whitespace-nowrap text-2xl font-bold uppercase">
          <span className="hidden md:flex">Tailwind CSS Cheat Sheet</span>
          <span className="flex md:hidden">TWCS</span>
        </h1>
        <SearchInput />
        <select
          className="bg-gray-50"
          onChange={(e) => setVersion(e.target.value)}
        >
          <option value="3.4.3">v3.4.3</option>
          <option value="3.0.24">v3.0.24</option>
        </select>
      </div>
    </div>
  );
};

export default Navigation;
