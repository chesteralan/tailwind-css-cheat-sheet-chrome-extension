import {
  CategoryCollection,
  ContentEntity,
} from "@/__generated__/generatedTypes.ts";

export type CategoryData = CategoryCollection & {
  found: boolean | undefined;
  content2: ContentData[];
};

export type ContentData = ContentEntity & {
  found: boolean | undefined;
  table2: TableData[];
  noDot?: boolean | null;
  noCopy?: boolean | null;
};

export type TableData = {
  table: string[];
  found: boolean | undefined;
};
