import { DataContext } from "@/lib/data-provider";
import React, { useContext } from "react";
import DisplayTransformedData from "./display-transformed-data";

function DataTransformer() {
  const {
    data: { transformed },
  } = useContext(DataContext);
  return (
    <div className="data-transformer-wrapper">
      <h1>DataTransformer</h1>
      {transformed?.data && transformed?.data.length > 0 && (
        <DisplayTransformedData />
      )}
    </div>
  );
}

export default DataTransformer;
