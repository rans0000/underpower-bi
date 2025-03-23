"use client";

import { TCurrentTab } from "@/lib/types";
import { Dispatch, useContext } from "react";
import OriginalDataTable from "./original-data-table";
import { Button } from "./ui/button";
import UploadForm from "./upload-form";
import { DataContext } from "@/lib/data-provider";

function FileUploader({ changeTab }: { changeTab: Dispatch<TCurrentTab> }) {
  const { data, dispatch } = useContext(DataContext);
  const goToNextPage = () => {
    dispatch({ type: "transformed", payload: data.original });
    changeTab("transform-data");
  };
  return (
    <div className="p-3 flex gap-12 flex-wrap">
      <section className="left-wrapper basis-3/12">
        <UploadForm />
      </section>
      <aside className="grow">
        <OriginalDataTable />
      </aside>
      <div className="w-full">
        <Button variant="secondary" onClick={goToNextPage}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default FileUploader;
