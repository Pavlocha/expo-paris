import { useQuery } from "@tanstack/react-query";
import { schema } from "./types";

const BASE_URL = "https://opendata.paris.fr/api/v2/";

const ROUTES = {
  ACTIVITIES_RECORD: "/catalog/datasets/que-faire-a-paris-/records?limit=100",
};

export function useActivites() {
  return useQuery({
    queryKey: ["activites"],
    queryFn: async () => {
      const response = await fetch(BASE_URL + ROUTES.ACTIVITIES_RECORD);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return schema.parse(await response.json());
    },
  });
}
