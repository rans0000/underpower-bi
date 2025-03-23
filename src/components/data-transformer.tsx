import { DataContext } from "@/lib/data-provider";
import { useContext } from "react";
// import TransformedDataTable from "./transformed-data-table";
import TransformedDataNodeGraph from "./transformed-data-graph";

function DataTransformer() {
  const {
    data: { transformed },
  } = useContext(DataContext);
  return (
    <div className="data-transformer-wrapper h-full">
      <h1>Data Transformer</h1>
      {/* {transformed?.data && transformed?.data.length > 0 && (
        <TransformedDataTable />
      )} */}
      {(true || transformed) && <TransformedDataNodeGraph />}
    </div>
  );
}

export default DataTransformer;
