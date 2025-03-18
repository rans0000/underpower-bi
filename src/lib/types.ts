import { ActionDispatch } from "react";

export type TUploadFormState = {
  file: File | null;
  status?: "error" | "success";
  data: null | unknown;
};

export type TCurrentTab = "upload-file" | "transform-data";

export type TDataAction =
  | { type: "original"; payload: unknown }
  | { type: "transformed"; payload: unknown };
export type TDataList =
  | {
      headers: { label: string; selected: boolean }[];
      data: unknown[];
    }
  | undefined;
export type TState = {
  original?: TDataList;
  transformed?: TDataList;
};
export type TData = {
  data: TState;
  dispatch: ActionDispatch<[action: TDataAction]>;
};
