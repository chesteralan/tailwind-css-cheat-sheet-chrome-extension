import jsonData from "../../data/cheatsheet3.0.24.json";
import { useSearchContext } from "../../context/SearchContext";
import { useMemo } from "react";
import { CategoryCollection } from "../../__generated__/generatedTypes.ts";

const useFilterData = () => {
  const search = useSearchContext();

  return useMemo<CategoryCollection[]>(() => {
    return jsonData
      ?.filter((category) => {
        return category.content.some((content) =>
          content.table.some((table) =>
            table.at(0)?.includes(search?.searchValue as string),
          ),
        );
      })
      .map((category) => {
        return {
          ...category,
          content: category.content
            .filter((content) =>
              content.table.some((table) =>
                table.at(0)?.includes(search?.searchValue as string),
              ),
            )
            .map((content) => {
              return {
                ...content,
                table: content.table.filter((table) =>
                  table.at(0)?.includes(search?.searchValue as string),
                ),
              };
            }),
        };
      });
  }, [search]);
};

export default useFilterData;
