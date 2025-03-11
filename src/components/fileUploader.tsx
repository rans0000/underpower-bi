"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { uploadFile } from "@/lib/actions";
import { TUploadFormState } from "@/lib/types";
import { useActionState } from "react";

const initialValue: TUploadFormState = { file: [] };

function FileUploader() {
  const [state, formAction, isPending] = useActionState(
    uploadFile,
    initialValue
  );
  return (
    <div className="p-3">
      <form className="flex flex-col gap-2 w-3/12" action={formAction}>
        <Label htmlFor="file">Upload CSV</Label>
        <Input id="file" type="file" />
        <Button type="submit" className="cursor-pointer" disabled={isPending}>
          Upload
        </Button>
        {state.status && <p>{state.status}</p>}
      </form>
    </div>
  );
}

export default FileUploader;
