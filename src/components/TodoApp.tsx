import {useReducer} from "react";
import {AddTodo} from "./AddTodo";
import {ActionType, TodoReducer} from "../reducers/TodoReducer";
import {Todos} from "./Todos";
import {Todo} from "../models/Todo";
import {TodosContext} from "../contexts/TodosContext";
import {TodosDispatchContext} from "../contexts/TodoDispatchContext";
import {useLocalStorage} from "../hooks/useLocalStorage";

export const TodoApp = () => {
  const [todos, setTodos] = useLocalStorage<Todo[]>("todoList", []);

  const todoStateManager = (
    state: Todo[],
    action: {type: ActionType; payload: string}
  ) => {
    const updatedTodos = TodoReducer(state, action);

    setTodos(updatedTodos);

    return updatedTodos;
  };

  const [todosListState, dispatch] = useReducer(todoStateManager, todos);

  return (
    <>
      <TodosDispatchContext.Provider value={dispatch}>
        <div className="mx-auto">
          <h1 className="font-Bebas text-center text-neutral-900 text-[48px] p-5">
            TODO
          </h1>
          <div className="flex flex-col items-center gap-8 mt-10">
            <AddTodo />
            <TodosContext.Provider value={todosListState}>
              <Todos />
            </TodosContext.Provider>
          </div>
        </div>
      </TodosDispatchContext.Provider>
    </>
  );
};
