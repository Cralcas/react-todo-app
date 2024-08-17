import { FormEvent, useContext, useState } from "react";
import { TodosDispatchContext } from "../contexts/TodoContext";
import { ActionType } from "../reducers/TodoReducer";

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
      payload: todoText,
    });

    setTodoText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="What todo..."
      />
      <button>Add</button>
    </form>
  );
};
