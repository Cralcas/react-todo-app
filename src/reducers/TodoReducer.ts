import { Todo } from "../models/Todo";

export interface IAction {
  type: ActionType;
  payload: string;
}

export enum ActionType {
  ADDED,
}

export const TodoReducer = (todos: Todo[], action: IAction): Todo[] => {
  switch (action.type) {
    case ActionType.ADDED:
      return [...todos, new Todo(action.payload)];

    default:
      return todos;
  }
};
