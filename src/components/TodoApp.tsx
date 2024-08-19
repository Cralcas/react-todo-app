import {useReducer} from "react";
import {AddTodo} from "./AddTodo";
import {TodoReducer} from "../reducers/TodoReducer";
import {Todos} from "./Todos";
import {Todo} from "../models/Todo";
import {TodosContext} from "../contexts/TodosContext";
import {TodosDispatchContext} from "../contexts/TodoDispatchContext";

export const TodoApp = () => {
  const todoExample: Todo[] = [{id: 1, text: "Example", done: false}];
  const [todos, dispatch] = useReducer(TodoReducer, todoExample);

  return (
    <>
      <TodosDispatchContext.Provider value={dispatch}>
        <div className="mx-auto">
          <h1 className="text-center text-xl font-bold p-5">TODO</h1>
          <div className="flex flex-col items-center gap-8">
            <AddTodo />
            <TodosContext.Provider value={todos}>
              <Todos />
            </TodosContext.Provider>
          </div>
        </div>
      </TodosDispatchContext.Provider>
    </>
  );
};
