import {FormEvent, useContext, useState} from "react";
import {TodosDispatchContext} from "../contexts/TodoContext";
import {ActionType} from "../reducers/TodoReducer";

export const AddTodo = () => {
  const [todoText, setTodoText] = useState("");
  const dispatch = useContext(TodosDispatchContext);

  if (!dispatch) {
    throw new Error("dispatch is not defined");
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch({
      type: ActionType.ADDED,
      payload: todoText.trim(),
    });

    setTodoText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 text-lg">
      <input
        className="rounded-md border px-2"
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="What todo..."
        minLength={3}
        required
      />
      <button className="px-4 py-1.5 bg-green-800 rounded-md text-white font-bold">
        Add
      </button>
    </form>
  );
};
