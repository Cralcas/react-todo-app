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
      <li className="flex gap-1.5 text-lg break-all mb-3">
        <p
          className={`w-full p-1 font-Bebas border-b ${
            todo.done ? "text-gray-500 line-through" : "text-black"
          } `}
        >
          {todo.text}
        </p>
        <div className="flex gap-x-2.5 items-center">
          <button
            className={`${
              todo.done ? "bg-gray-500" : "bg-green-700"
            } px-1 rounded-sm text-white font-sm font-bold`}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.done ? "⟳" : "✓"}
          </button>
          <button
            className="bg-red-700 px-1 rounded-sm text-white font-sm font-bold"
            onClick={() => removeTodo(todo.id)}
          >
            X
          </button>
        </div>
      </li>
    </>
  );
};
