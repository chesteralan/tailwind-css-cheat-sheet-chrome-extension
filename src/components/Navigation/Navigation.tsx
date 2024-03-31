import SearchInput from "../SearchInput";

const Navigation = () => {
  return (
    <div className="sticky top-0 z-50">
      <div className="row flex items-center justify-between border border-gray-200 bg-gray-50 p-4 shadow-sm">
        <SearchInput />
        v3.0.24
      </div>
    </div>
  );
};

export default Navigation;
