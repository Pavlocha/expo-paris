import type { NextPage } from "next";
import Card from "../component/card";

import { useActivites } from "./services/config";

const Activities: NextPage = () => {
  const { status, data, error, isFetching } = useActivites();

  return (
    <div className="mx-auto my-0 w-full max-w-5xl px-1 py-0 ">
      <div>
        {status === "loading" ? (
          "Loading..."
        ) : status === "error" ? (
          <span>Error: {error.message}</span>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-4 ">
              {data.records.map(({ record: { fields } }) => (
                <Card key={fields.id} {...fields} />
              ))}
            </div>

            <div>{isFetching ? "Background Updating..." : " "}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Activities;
