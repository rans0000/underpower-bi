"use client";

import React, { createContext, useReducer } from "react";
import { TData, TDataAction, TDataList, TState } from "./types";

const initialReducer: TState = {};
const initialContext: TData = { data: initialReducer, dispatch: () => {} };
export const DataContext = createContext(initialContext);

const reducer = (state: TState, action: TDataAction) => {
  switch (action.type) {
    case "original":
      state = { ...state, original: action.payload as TDataList };
      break;

    case "transformed":
      state = { ...state, transformed: action.payload as TDataList };
      break;

    default:
      throw new Error("Unknown action type");
  }
  return state;
};

function DataProvider({ children }: { children: React.ReactElement }) {
  const [data, dispatch] = useReducer(reducer, initialReducer);

  return (
    <DataContext.Provider value={{ data, dispatch }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
