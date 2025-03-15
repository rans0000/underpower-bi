import { DataContext } from "@/lib/data-provider";
import React, { useContext } from "react";

function DataTransformer() {
  const {
    data: { original },
  } = useContext(DataContext);
  return (
    <div className="data-transformer-wrapper">
      <h1>DataTransformer</h1>
      {JSON.stringify(original)}
      --
      {original instanceof Array &&
        original.length > 0 &&
        Object.keys(original[0])}
    </div>
  );
}

export default DataTransformer;
