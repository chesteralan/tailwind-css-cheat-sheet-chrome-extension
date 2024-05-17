import {
  createContext,
  createRef,
  Dispatch,
  RefObject,
  SetStateAction,
} from "react";

export interface SearchDataType {
  inputRef: RefObject<HTMLInputElement>;
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  version: string;
  setVersion: Dispatch<SetStateAction<string>>;
}

const searchContextRef = createRef<SearchDataType>();

export const SearchContext = createContext(searchContextRef.current);

export const SearchProvider = SearchContext.Provider;
