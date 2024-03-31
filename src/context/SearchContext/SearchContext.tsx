import {
  createContext,
  createRef,
  Dispatch,
  RefObject,
  SetStateAction,
  useContext,
} from "react";

export interface SearchDataType {
  inputRef: RefObject<HTMLInputElement>;
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

export const initialSearchContextValue = {
  inputRef: createRef<HTMLInputElement>(),
};

const searchContextRef = createRef<SearchDataType>();

export const SearchContext = createContext(searchContextRef.current);

export const SearchProvider = SearchContext.Provider;

export const useSearchContext = () => useContext(SearchContext);
