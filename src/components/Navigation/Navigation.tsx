import SearchInput from "../SearchInput";

const Navigation = () => {
  return (
    <div className="sticky top-0 z-50">
      <div className="flex flex-col items-center justify-between border border-gray-200 bg-gray-50 p-4 shadow-sm sm:flex-row dark:border-gray-700 dark:bg-gray-800">
        <SearchInput />
      </div>
    </div>
  );
};

export default Navigation;
