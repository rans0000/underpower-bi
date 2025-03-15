"use client";

import FileUploader from "@/components/file-uploader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TCurrentTab } from "@/lib/types";
import { useState } from "react";
import DataTransformer from "./data-transformer";

function TabsWrapper() {
  const [currentTab, setCurrentTab] = useState<TCurrentTab>("upload-file");
  return (
    <div className="tabs-wrapper">
      <Tabs defaultValue="account" value={currentTab}>
        <TabsList className="w-[400px] grid grid-cols-2">
          <TabsTrigger
            onClick={() => setCurrentTab("upload-file")}
            value="upload-file"
          >
            Upload File
          </TabsTrigger>
          <TabsTrigger
            onClick={() => setCurrentTab("upload-file")}
            value="transform-data"
          >
            Transform
          </TabsTrigger>
        </TabsList>
        <TabsContent value="upload-file">
          <FileUploader changeTab={setCurrentTab} />
        </TabsContent>
        <TabsContent value="transform-data">
          <DataTransformer />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default TabsWrapper;
