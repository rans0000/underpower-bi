"use client";

import { uploadFile } from "@/lib/actions";
import { DataContext } from "@/lib/data-provider";
import { useActionState, useContext, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TUploadFormState } from "@/lib/types";

const initialValue: TUploadFormState = { file: null, data: null };
function UploadForm() {
  const [state, formAction, isPending] = useActionState(
    uploadFile,
    initialValue
  );
  const { dispatch } = useContext(DataContext);

  useEffect(() => {
    if (state.data) {
      dispatch({ type: "original", payload: state.data });
    }
  }, [state.status]);

  return (
    <form className="flex flex-col gap-2" action={formAction}>
      <Label htmlFor="file">Upload CSV</Label>
      <Input id="file" name="file" type="file" />
      <Button type="submit" className="cursor-pointer" disabled={isPending}>
        Upload
      </Button>
      {state.status && <p>{state.status}</p>}
    </form>
  );
}

export default UploadForm;
