"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { uploadFile } from "@/lib/actions";
import { DataContext } from "@/lib/data-provider";
import { TCurrentTab, TUploadFormState } from "@/lib/types";
import { Dispatch, useActionState, useContext, useEffect } from "react";

const initialValue: TUploadFormState = { file: null, data: null };

function FileUploader({ changeTab }: { changeTab: Dispatch<TCurrentTab> }) {
  const [state, formAction, isPending] = useActionState(
    uploadFile,
    initialValue
  );
  const { dispatch } = useContext(DataContext);

  useEffect(() => {
    dispatch({ type: "original", payload: state.data });
    if (state.data) {
      changeTab("transform-data");
    }
  }, [state.status]);

  return (
    <div className="p-3">
      <form className="flex flex-col gap-2 w-3/12" action={formAction}>
        <Label htmlFor="file">Upload CSV</Label>
        <Input id="file" name="file" type="file" />
        <Button type="submit" className="cursor-pointer" disabled={isPending}>
          Upload
        </Button>
        {state.status && <p>{state.status}</p>}
      </form>
    </div>
  );
}

export default FileUploader;
