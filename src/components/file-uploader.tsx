"use client";

import { TCurrentTab } from "@/lib/types";
import { Dispatch } from "react";
import DisplayOriginalData from "./display-original-data";
import { Button } from "./ui/button";
import UploadForm from "./upload-form";

function FileUploader({ changeTab }: { changeTab: Dispatch<TCurrentTab> }) {
  return (
    <div className="p-3 flex gap-12 flex-wrap">
      <section className="left-wrapper basis-3/12">
        <UploadForm />
      </section>
      <aside className="grow">
        <DisplayOriginalData />
      </aside>
      <div className="w-full">
        <Button
          variant="secondary"
          onClick={() => {
            changeTab("transform-data");
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default FileUploader;
