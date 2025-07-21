import { DEFAULT_VERSION, VERSION_DOC_URLS } from "@/utils/constants/versions";
import { useSearchContext } from "../useSearchContext";

const useSearch = () => {
  const searchContext = useSearchContext();
  const searchValue = searchContext?.searchValue as unknown as string;
  const isSearching = (searchContext?.searchValue as string).length > 0;
  const currentVersion = searchContext?.version || DEFAULT_VERSION;
  return {
    searchValue,
    isSearching,
    version: currentVersion,
    docsUrl: VERSION_DOC_URLS[currentVersion as keyof typeof VERSION_DOC_URLS],
  };
};

export default useSearch;
