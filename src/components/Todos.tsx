import {useContext} from "react";
import {TodoItem} from "./TodoItem";
import {TodosContext} from "../contexts/TodosContext";

export const Todos = () => {
  const todos = useContext(TodosContext);
  return (
    <>
      {todos.length > 0 && (
        <ul
          className={`flex flex-col w-[300px] md:w-[500px] max-h-[350px] p-3 bg-slate-100 rounded-md border border-opacity-95 ${
            todos.length > 6 ? "overflow-y-scroll" : ""
          } scrollbar-hidden`}
        >
          {todos.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
        </ul>
      )}
    </>
  );
};
