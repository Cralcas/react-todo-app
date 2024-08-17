import { useContext } from "react";
import { TodoItem } from "./TodoItem";
import { TodosContext } from "../contexts/TodoContext";

export const Todos = () => {
  const todos = useContext(TodosContext);
  return (
    <>
      <section>
        {todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
      </section>
    </>
  );
};
