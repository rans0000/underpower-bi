import { DataContext } from "@/lib/data-provider";
import React, { useContext } from "react";
import TransformedDataTable from "./transformed-data-table";

function DataTransformer() {
  const {
    data: { transformed },
  } = useContext(DataContext);
  return (
    <div className="data-transformer-wrapper">
      <h1>DataTransformer</h1>
      {transformed?.data && transformed?.data.length > 0 && (
        <TransformedDataTable />
      )}
    </div>
  );
}

export default DataTransformer;
