import { createRef } from "react";
import { DEFAULT_VERSION } from "@/utils/constants/versions";

export const initialSearchContextValue = {
  inputRef: createRef<HTMLInputElement>(),
  searchValue: "",
  version: DEFAULT_VERSION,
};
