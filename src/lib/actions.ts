"use server";

import { TUploadFormState } from "./types";

export const uploadFile = async (
  prevState: TUploadFormState,
  formData: FormData
): Promise<TUploadFormState> => {
  const file: File | null = formData.get("file") as unknown as File;
  if (!file) {
    return { file, status: "error" };
  }
  //   console.log(formData);
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  console.log(buffer);

  return { file, status: "success" } as TUploadFormState;
};
