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
      <li className="flex mb-3 text-lg break-all items-center">
        <p
          className={`flex-grow p-1 text-xl font-Bebas border-b ${
            todo.done ? "text-gray-500 line-through" : "text-black"
          } `}
        >
          {todo.text}
        </p>
        <div className="flex justify-center p-2">
          <button
            className={`${
              todo.done
                ? "bg-gray-500"
                : "bg-green-700 hover:bg-green-800 border-b-2 border-green-950 mr-1"
            } px-1 rounded-sm text-white font-sm font-bold mr-1`}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.done ? "⟳" : "✓"}
          </button>
          <button
            className="bg-red-700 hover:bg-red-800 px-1 rounded-sm text-white font-sm font-bold border-b-2 border-red-950"
            onClick={() => removeTodo(todo.id)}
          >
            X
          </button>
        </div>
      </li>
    </>
  );
};
