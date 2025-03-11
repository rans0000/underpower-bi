"use server";

import csvParser from "csv-parser";
import { PassThrough } from "stream";
import { TUploadFormState } from "./types";

export const uploadFile = async (
  prevState: TUploadFormState,
  formData: FormData
): Promise<TUploadFormState> => {
  const file: File | null = formData.get("file") as unknown as File;
  if (!file) {
    return { file, status: "error" };
  }

  const bytes = await file.arrayBuffer();
  const bufferStream = new PassThrough();
  bufferStream.end(Buffer.from(bytes));

  const results: unknown[] = [];
  bufferStream
    .pipe(csvParser())
    .on("data", (data: unknown) => results.push(data))
    .on("end", () => {
      console.log(results);
    });

  return { file, status: "success" } as TUploadFormState;
};
