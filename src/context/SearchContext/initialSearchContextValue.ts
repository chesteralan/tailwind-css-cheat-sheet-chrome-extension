import { createRef } from "react";

export const initialSearchContextValue = {
  inputRef: createRef<HTMLInputElement>(),
  searchValue: "",
  version: "3.4.3",
};
