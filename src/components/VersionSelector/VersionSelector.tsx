import { VERSIONS } from "@/utils/constants/versions";
import { useSearchContext } from "@/hooks/useSearchContext";
import { type SearchDataType } from "@/context/SearchContext";


export const VersionSelector = () => {
  const { setVersion } = useSearchContext() as SearchDataType;
  return <select
  className="rounded border bg-gray-50 p-2"
  onChange={(e) => setVersion(e.target.value)}
>
  {VERSIONS.map((version: string) => (
    <option value={version} key={version}>v{version}</option>
  ))}
</select>;
};