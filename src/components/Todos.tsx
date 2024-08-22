import {useContext} from "react";
import {TodoItem} from "./TodoItem";
import {TodosContext} from "../contexts/TodosContext";

export const Todos = () => {
  const todos = useContext(TodosContext);
  return (
    <>
      {todos.length > 0 && (
        <ul
          className={`scrollbar-hidden flex flex-col w-[300px] md:w-[500px] max-h-[350px] p-3 bg-slate-100 border-2 border-slate-300 rounded-md shadow-todoShadow shadow-slate-300 overflow-auto ${
            todos.length > 6 ? "overflow-y-scroll" : ""
          } `}
        >
          {todos.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
        </ul>
      )}
    </>
  );
};
