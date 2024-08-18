import {Todo} from "../models/Todo";

export interface IAction {
  type: ActionType;
  payload: string;
}

export enum ActionType {
  ADDED,
  REMOVED,
  TOGGLED,
}

export const TodoReducer = (todos: Todo[], action: IAction): Todo[] => {
  switch (action.type) {
    case ActionType.ADDED:
      return [...todos, new Todo(action.payload)];

    case ActionType.REMOVED:
      return todos.filter((todo) => todo.id !== +action.payload);

    case ActionType.TOGGLED:
      return todos.map((todo) =>
        todo.id === +action.payload ? {...todo, done: !todo.done} : todo
      );

    default:
      return todos;
  }
};
