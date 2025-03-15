import { ActionDispatch } from "react";

export type TUploadFormState = {
  file: File | null;
  status?: "error" | "success";
  data: null | unknown;
};

export type TCurrentTab = "upload-file" | "transform-data";

export type TDataAction = { type: "original"; payload: unknown };
export type TTransformed =
  | {
      keys: { label: string; selected: boolean }[];
      data: unknown;
    }
  | undefined;
export type TState = {
  original?: unknown | undefined;
  transformed?: TTransformed | undefined;
};
export type TData = {
  data: TState;
  dispatch: ActionDispatch<[action: TDataAction]>;
};
