import { useSearchContext } from "@/hooks/useSearchContext";
import { type SearchDataType } from "@/context/SearchContext";

let timeout: NodeJS.Timeout;

const SearchInput = () => {
  const search = useSearchContext();

  const onChangeHandler = () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      (search as SearchDataType).setSearchValue(
        search?.inputRef.current?.value.toLowerCase() || "",
      );
    }, 500);
  };

  return (
    <div className="flex w-full sm:flex">
      <div className="relative w-full">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            className="h-5 w-5 text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          className="block w-full rounded-lg border border-gray-300 bg-white p-2.5 py-2 pl-10 text-gray-900 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          placeholder="Search Class Name"
          ref={search?.inputRef}
          onChange={onChangeHandler}
        />
      </div>
    </div>
  );
};

export default SearchInput;
