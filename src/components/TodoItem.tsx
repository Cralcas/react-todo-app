import {useContext} from "react";
import {Todo} from "../models/Todo";
import {TodosDispatchContext} from "../contexts/TodoContext";
import {ActionType} from "../reducers/TodoReducer";

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem = ({todo}: TodoItemProps) => {
  const dispatch = useContext(TodosDispatchContext);

  if (!dispatch) {
    throw new Error("dispatch is not defined");
  }
  const removeTodo = (id: number) => {
    dispatch({
      type: ActionType.REMOVED,
      payload: id.toString(),
    });
  };

  const toggleTodo = (id: number) => {
    dispatch({
      type: ActionType.TOGGLED,
      payload: id.toString(),
    });
  };

  return (
    <>
      <div>
        <span>{todo.text}</span>
        <button onClick={() => toggleTodo(todo.id)}>
          {todo.done ? "Not done" : "Done"}
        </button>
        <button onClick={() => removeTodo(todo.id)}>X</button>
      </div>
    </>
  );
};
