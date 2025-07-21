import Navigation from "@/components/Navigation";
import CheatsheetContainer from "@/components/Container";
import { SearchProvider } from "@/context/SearchContext";
import { useState } from "react";
import useKeyPress from "@/hooks/useKeyPress";
import { isInPopup } from "@/utils/helpers/isInPopup";
import { initialSearchContextValue } from "@/context/SearchContext/initialSearchContextValue";
import { DEFAULT_VERSION } from "@/utils/constants/versions";

function App() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [version, setVersion] = useState<string>(DEFAULT_VERSION);

  useKeyPress(initialSearchContextValue.inputRef);

  const minWidth = isInPopup() ? 780 : 345;

  return (
    <SearchProvider
      value={{
        ...initialSearchContextValue,
        searchValue,
        setSearchValue,
        version,
        setVersion,
      }}
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
