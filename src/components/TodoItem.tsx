import { Todo } from "../models/Todo";

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <>
      <div>
        <span>{todo.text}</span>
        <button>Toggle</button>
        <button>Delete</button>
      </div>
    </>
  );
};
