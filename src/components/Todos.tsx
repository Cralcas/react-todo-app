import {useContext} from "react";
import {TodoItem} from "./TodoItem";
import {TodosContext} from "../contexts/TodosContext";

export const Todos = () => {
  const todos = useContext(TodosContext);
  return (
    <>
      {todos.length > 0 && (
        <div className="flex flex-col gap-6 w-[300px] md:w-[500px] p-2 rounded-md border border-opacity-95">
          {todos.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
        </div>
      )}
    </>
  );
};
