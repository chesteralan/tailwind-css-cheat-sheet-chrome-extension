import { IconLinks } from "../IconLinks";
import SearchInput from "../SearchInput";

import { VersionSelector } from "../VersionSelector";

const Navigation = () => {
return (
    <div className="sticky top-0 z-50">
      <div className="row flex items-center justify-between gap-4 border border-gray-200 bg-gray-50 p-4 shadow-sm">
        <h1 className="relative flex flex-col items-center gap-4 whitespace-nowrap font-bold hidden sm:block">
          <span className="text-2xl">
            Tailwind CSS Cheat Sheet
          </span>
          <span className="text-xs absolute -bottom-3.5 left-1 text-gray-500">With Chrome Extension</span>
        </h1>
        <VersionSelector />
        <IconLinks />
        <div className="flex items-center basis-full gap-2">
        <SearchInput />
        
        </div>
      </div>
    </div>
  );
};

export default Navigation;
