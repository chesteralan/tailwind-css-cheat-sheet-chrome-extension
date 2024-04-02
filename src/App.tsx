import Navigation from "./components/Navigation";
import CheatsheetContainer from "./components/Container";
import {
  initialSearchContextValue,
  SearchProvider,
} from "./context/SearchContext";
import { useState } from "react";
import useKeyPress from "./hooks/useKeyPress";
import { isInPopup } from "./utils/helpers/isInPopup";

function App() {
  const [searchValue, setSearchValue] = useState<string>("");
  useKeyPress(initialSearchContextValue.inputRef);

  const minWidth = isInPopup() ? 780 : 345;

  return (
    <SearchProvider
      value={{ ...initialSearchContextValue, searchValue, setSearchValue }}
    >
      <div
        className={`relative flex w-full flex-col gap-4`}
        style={{ minWidth: minWidth }}
      >
        <Navigation />
        <CheatsheetContainer />
      </div>
    </SearchProvider>
  );
}

export default App;
