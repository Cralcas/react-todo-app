import {createContext, Dispatch} from "react";
import {IAction} from "../reducers/TodoReducer";

export const TodosDispatchContext = createContext<Dispatch<IAction>>(() => {
  return;
});
