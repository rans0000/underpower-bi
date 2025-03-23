// import TransformedDataTable from "./transformed-data-table";
import { ReactFlowProvider } from "@xyflow/react";
import TransformedDataNodeGraph from "./transformed-data-graph";

function DataTransformer() {
  return (
    <div className="data-transformer-wrapper h-full">
      <h1>Data Transformer</h1>
      <ReactFlowProvider>
        <TransformedDataNodeGraph />
      </ReactFlowProvider>
    </div>
  );
}

export default DataTransformer;
