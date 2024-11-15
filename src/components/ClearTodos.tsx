import { useContext } from "react";
import { TodosDispatchContext } from "../contexts/TodoDispatchContext";
import { ActionType } from "../reducers/TodoReducer";

export const ClearTodos = () => {
  const dispatch = useContext(TodosDispatchContext);

  const clearTodos = () => {
    dispatch({
      type: ActionType.CLEARED,
      payload: "",
    });
  };

  return (
    <button
      onClick={clearTodos}
      className="self-end px-3 py-1 bg-red-700 text-white font-bold  hover:bg-red-800 transition active:scale-95 rounded-md shadow-todoShadow shadow-red-900"
    >
      Clear
    </button>
  );
};
