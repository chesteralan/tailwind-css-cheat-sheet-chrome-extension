import { useContext } from "react";
import { SearchContext, SearchDataType } from "../../context/SearchContext";

export const useSearchContext = () =>
  useContext<SearchDataType | null>(SearchContext);
