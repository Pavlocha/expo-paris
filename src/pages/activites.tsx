import type { NextPage } from "next";
import { useBearStore } from "../store/bearstore";
import { useActivites } from "./services/config";

const Activities: NextPage = () => {
  const { status, data, error, isFetching } = useActivites();
  const bears = useBearStore((state) => state.bears);
  const increasePopulation = useBearStore((state) => state.increase);

  return (
    <div>
      <h1>{bears} around here ...</h1>
      <button
        onClick={() => {
          increasePopulation(1);
        }}
      >
        one up
      </button>

      <div>
        {status === "loading" ? (
          "Loading..."
        ) : status === "error" ? (
          <span>Error: {error.message}</span>
        ) : (
          <>
            <div className="grid grid-cols-4 gap-4 ">
              {data.records.map(({ record: { fields } }) => (
                <p className="bg-red-600" key={fields.id}>
                  <a>{fields.title}</a>
                </p>
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
