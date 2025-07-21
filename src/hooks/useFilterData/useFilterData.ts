import { useEffect, useMemo, useState } from "react";
import {
  CategoryCollection,
  ContentEntity,
} from "@/__generated__/generatedTypes.ts";
import { CategoryData } from "@/types/dataTypes.ts";
import useSearch from "../useSearch";

const json3_0_24 = import("@/data/3.0.24.json");
const json3_4_3 = import("@/data/3.4.3.json");
const json4_1 = import("@/data/4.1.json");

const jsonMap = {
  "4.1": json4_1,
  "3.4.3": json3_4_3,
  "3.0.24": json3_0_24,
};

const searchCategory = (category: CategoryCollection, searchValue: string, startsWithDot: boolean) =>
  category.content?.some(
    (content) => searchContent(content, searchValue, startsWithDot),
  );

const searchContent = (content: ContentEntity, searchValue: string, startsWithDot: boolean) =>
  searchTitle(content.title, searchValue, startsWithDot) ||
  content.table?.some((table) => searchTable(table, searchValue, startsWithDot));

const searchTable = (table: string[] | null, searchValue: string, startsWithDot: boolean) => startsWithDot ? table?.at(0)?.startsWith(searchValue.slice(1)) :
  table?.at(0)?.includes(searchValue);

const searchTitle = (title: string, searchValue: string, startsWithDot: boolean) => startsWithDot ? title.startsWith(searchValue.slice(1)) : title.includes(searchValue);

const useFilterData = () => {
  const { searchValue, version } = useSearch();
  const [jsonData, setJsonData] = useState<CategoryCollection[]>([]);
  useEffect(() => {
    const loadJson = async () => {
      const jsonVersion = await jsonMap[version as keyof typeof jsonMap];
      setJsonData(jsonVersion.default as CategoryCollection[]);
    }
    loadJson();
  }, [version]);

  return useMemo<CategoryData[]>(() => {

    const startsWithDot = searchValue?.startsWith(".");

    return jsonData?.map((category) => {
      return {
        ...category,
        found: searchCategory(category, searchValue, startsWithDot),
        content2:
          category.content?.map((content) => {
            return {
              ...content,
              found: searchContent(content, searchValue, startsWithDot),
              table2:
                content.table?.map((table) => ({
                  table: [...(table ? table : [])],
                  found: searchTable(table, searchValue, startsWithDot),
                })) ?? [],
            };
          }) ?? [],
      };
    });
  }, [jsonData, searchValue]);
};

export default useFilterData;
