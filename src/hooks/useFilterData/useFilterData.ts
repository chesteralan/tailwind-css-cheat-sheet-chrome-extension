import jsonData_3_0_24 from "../../data/cheatsheet3.0.24.json";
import jsonData_3_4_3 from "../../data/cheatsheet3.4.3.json";
import { SearchDataType } from "../../context/SearchContext";
import { useMemo } from "react";
import {
  CategoryCollection,
  ContentEntity,
} from "../../__generated__/generatedTypes.ts";
import { useSearchContext } from "../useSearchContext";
import { CategoryData } from "../../types/dataTypes.ts";

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

const searchCategory = (category: CategoryCollection, searchValue: string) =>
  category.content?.some(
    (content) =>
      content.title.toLowerCase().includes(searchValue) ||
      content.table?.some((table) => table?.at(0)?.includes(searchValue)),
  );

const searchContent = (content: ContentEntity, searchValue: string) =>
  content.title.toLowerCase().includes(searchValue) ||
  content.table?.some((table) => table?.at(0)?.includes(searchValue));

const searchTable = (table: string[] | null, searchValue: string) =>
  table?.at(0)?.includes(searchValue);

const useFilterData = () => {
  const { searchValue, version } = useSearchContext() as SearchDataType;
  const jsonData = chooseJsonData(version);

  return useMemo<CategoryData[]>(() => {
    return jsonData?.map((category) => {
      return {
        ...category,
        found: searchCategory(category, searchValue),
        content2:
          category.content?.map((content) => {
            return {
              ...content,
              found: searchContent(content, searchValue),
              table2:
                content.table?.map((table) => ({
                  table: [...(table ? table : [])],
                  found: searchTable(table, searchValue),
                })) ?? [],
            };
          }) ?? [],
      };
    });
  }, [jsonData, searchValue]);
};

export default useFilterData;
