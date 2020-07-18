import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { AppState } from "../rootReducer";

export interface DefaultSchema {
  allIds: number[];
  byId: {
    [key in number]: {};
  };
}

export type ThunkType = ThunkAction<void, AppState, null, Action<string>>;

export type GenericThunkAction = () => ThunkType;
