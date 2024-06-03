import { type SearchDataType } from "../../context/SearchContext";
import { useSearchContext } from "../../hooks/useSearchContext";
import SearchInput from "../SearchInput";

const Navigation = () => {
  const { setVersion } = useSearchContext() as SearchDataType;
  return (
    <div className="sticky top-0 z-50">
      <div className="row flex items-center justify-between gap-4 border border-gray-200 bg-gray-50 p-4 shadow-sm">
        <h1 className="flex flex-row items-center gap-4 whitespace-nowrap font-bold">
          <a
            href="https://www.alchie.cc/"
            className="hidden text-3xl uppercase underline xl:flex"
          >
            ALCHIE.CC
          </a>
          <span className="hidden text-2xl md:flex md:uppercase xl:capitalize">
            Tailwind CSS Cheat Sheet
          </span>
          <span className="flex md:hidden">TWCS</span>
        </h1>
        <SearchInput />
        <select
          className="rounded border bg-gray-50 p-2"
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
