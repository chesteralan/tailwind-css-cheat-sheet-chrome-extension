import jsonData_3_0_24 from "../../data/cheatsheet3.0.24.json";
import jsonData_3_4_3 from "../../data/cheatsheet3.4.3.json";
import { SearchDataType, useSearchContext } from "../../context/SearchContext";
import { useMemo } from "react";
import { CategoryCollection } from "../../__generated__/generatedTypes.ts";
import useSearch from "../useSearch";

const chooseJsonData = (version: string): CategoryCollection[] => {
  switch (version) {
    case "3.4.3":
      return jsonData_3_4_3;
    case "3.0.24":
      return jsonData_3_0_24;
    default:
      return jsonData_3_4_3;
  }
};

const useFilterData = () => {
  const { searchValue, version } = useSearchContext() as SearchDataType;
  const { isSearching } = useSearch();
  const jsonData = chooseJsonData(version);

  return useMemo<CategoryCollection[]>(() => {
    return jsonData
      ?.filter((category) =>
        category.content?.some(
          (content) =>
            content.title.toLowerCase().includes(searchValue) ||
            content.table?.some((table) => table?.at(0)?.includes(searchValue)),
        ),
      )
      ?.map((category) => {
        return {
          ...category,
        };
      })
      .map((category) => {
        return {
          ...category,
          content: category.content
            ?.filter(
              (content) =>
                content.title.toLowerCase().includes(searchValue) ||
                content.table?.some((table) =>
                  table?.at(0)?.includes(searchValue),
                ),
            )
            .map((content) => {
              return {
                ...content,
                table: content.table
                  ?.filter(
                    (table) =>
                      content.title.toLowerCase().includes(searchValue) ||
                      table?.at(0)?.includes(searchValue),
                  )
                  .map((table) => [...(table ? table : [])]),
              };
            }),
        };
      });
  }, [jsonData, isSearching, searchValue]);
};

export default useFilterData;
