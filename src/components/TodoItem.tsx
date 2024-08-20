import {useContext} from "react";
import {Todo} from "../models/Todo";
import {TodosDispatchContext} from "../contexts/TodoDispatchContext";
import {ActionType} from "../reducers/TodoReducer";

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem = ({todo}: TodoItemProps) => {
  const dispatch = useContext(TodosDispatchContext);

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
      <div className="flex justify-between gap-1.5 text-lg break-all">
        <span
          className={`${
            todo.done ? "text-gray-500 line-through" : "text-black"
          } border-b  w-full font-Bebas tracking-wide`}
        >
          {todo.text}
        </span>
        <div className="flex items-start gap-2.5">
          <button
            className={`${
              todo.done ? "bg-gray-500" : "bg-green-700"
            } px-1 rounded-sm text-white font-sm font-bold`}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.done ? "⟳" : "✓"}
          </button>
          <button
            className="bg-red-700 px-1 rounded-sm text-white font-bold"
            onClick={() => removeTodo(todo.id)}
          >
            X
          </button>
        </div>
      </div>
    </>
  );
};
