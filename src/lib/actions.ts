"use server";

import { TUploadFormState } from "./types";

export const uploadFile = async (
  prevState: TUploadFormState,
  formData: FormData
): Promise<TUploadFormState> => {
  const file = formData.get("file");
  console.log(formData);

  return { file, status: "yes" } as TUploadFormState;
};
