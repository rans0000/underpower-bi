"use client";

import { TCurrentTab } from "@/lib/types";
import { Dispatch } from "react";
import DisplayOriginalData from "./display-original-data";
import { Button } from "./ui/button";
import UploadForm from "./upload-form";

function FileUploader({ changeTab }: { changeTab: Dispatch<TCurrentTab> }) {
  return (
    <div className="p-3 flex gap-12">
      <section className="left-wrapper flex-3/12">
        <UploadForm />
      </section>
      <aside className="flex-9/12">
        <DisplayOriginalData />
      </aside>
      <div>
        <Button
          onClick={() => {
            changeTab("transform-data");
          }}
        ></Button>
      </div>
    </div>
  );
}

export default FileUploader;
