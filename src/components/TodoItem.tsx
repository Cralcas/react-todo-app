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
      <div className="flex justify-between gap-1 text-lg break-all">
        <span
          className={`${
            todo.done ? "text-gray-500 line-through" : "text-black"
          } border-b  w-full`}
        >
          {todo.text}
        </span>
        <div className="flex items-start gap-2.5">
          <button
            className={`${
              todo.done ? "bg-gray-500" : "bg-green-500"
            } px-1 rounded-sm text-white font-sm`}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.done ? "⟳" : "✓"}
          </button>
          <button
            className="bg-red-500 px-1 rounded-sm text-white"
            onClick={() => removeTodo(todo.id)}
          >
            X
          </button>
        </div>
      </div>
    </>
  );
};
