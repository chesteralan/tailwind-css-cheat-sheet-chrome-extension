import { useState } from "react";
import PackageJson from "../../../package.json";
import useFilterData from "../../hooks/useFilterData";
import Category from "../Category";

const Container = () => {
  const filteredData = useFilterData();
  const [openCategory, setOpenCategory] = useState<number | null>(null);
  const hasClassName = filteredData.some((category) =>
    category.content2.some((c2) => c2.table2.some((t2) => t2.found)),
  );
  return (
    <div className="flex flex-col gap-4 px-4 pb-10">
      {filteredData.map((category, index) => (
        <Category
          data={category}
          key={index}
          isOpened={openCategory === index}
          onClick={() => setOpenCategory(openCategory === index ? null : index)}
        />
      ))}
      {!hasClassName && <div>Nothing found!</div>}
      <div className="flex flex-row justify-between border-t pt-3 text-sm ">
        <div>
          Developed by{" "}
          <a
            href="https://www.alchie.cc/"
            className="underline"
            target="_blank"
          >
            Alchie
          </a>{" "}
          &middot; Other Projects:{" "}
          <a
            href="https://www.free-templates.cc/"
            className="underline"
            target="_blank"
          >
            Free Web Templates
          </a>
        </div>
        <div>
          <a
            className="text-sm underline"
            href="https://chromewebstore.google.com/detail/tailwind-css-cheat-sheet/fndbnfnjnhldjeppmglocapmfjdjkleh"
            target="_blank"
          >
            Install Chrome Extension
          </a>{" "}
          &middot;{" "}
          <a
            className="text-sm underline"
            href="https://github.com/chesteralan/tailwind-css-cheat-sheet-chrome-extension"
            target="_blank"
          >
            v{PackageJson.version}
          </a>
        </div>
      </div>
    </div>
  );
};
export default Container;
