import SearchInput from "../SearchInput";

const Navigation = () => {
  return (
    <div className="sticky top-0 z-50">
      <div className="row flex items-center justify-between gap-4 border border-gray-200 bg-gray-50 p-4 shadow-sm">
        <h1 className="whitespace-nowrap text-2xl font-bold uppercase">
          Tailwind CSS Cheat Sheet
        </h1>
        <SearchInput />
        v3.0.24
      </div>
    </div>
  );
};

export default Navigation;
