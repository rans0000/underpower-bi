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
    return { file, status: "error", data: undefined };
  }

  const bytes = await file.arrayBuffer();
  const bufferStream = new PassThrough();
  bufferStream.end(Buffer.from(bytes));

  const data: unknown[] = [];
  return new Promise((resolve) => {
    bufferStream
      .pipe(csvParser())
      .on("data", (row: unknown) => data.push(row))
      .on("end", () => {
        console.log(data);
        if (data.length > 0 && data[0] instanceof Object) {
          const headers = Object.keys(data[0]).map((label) => ({
            label,
            selected: false,
          }));
          resolve({ file, status: "success", data: { headers, data } });
        } else {
          resolve({ file, status: "error", data: undefined });
        }
      });
  });
};
