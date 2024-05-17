import { useSearchContext } from "../useSearchContext";

const useSearch = () => {
  const search = useSearchContext();
  const searchValue = search?.setSearchValue as unknown as string;
  const isSearching = (search?.searchValue as string).length > 0;
  return {
    searchValue,
    isSearching,
  };
};

export default useSearch;
