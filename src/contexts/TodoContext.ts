import { createContext, Dispatch } from "react";
import { Todo } from "../models/Todo";
import { IAction } from "../reducers/TodoReducer";

export const TodosContext = createContext<Todo[]>([]);
export const TodosDispatchContext = createContext<
  Dispatch<IAction> | undefined
>(undefined);
