import { ITodo } from './ITodo';
import { ITodoList } from './ITodoList';
import Todo from './Todo';

function TodoList({
  todoList,
  deleteTodo,
  toggleTodoCompleted,
}: ITodoList | any) {
  return (
    <div className="overflow-scroll">
      {todoList.map((todo: ITodo) => {
        return (
          <Todo
            id={todo.id}
            task={todo.task}
            complete={todo.complete}
            toggleTodoCompleted={toggleTodoCompleted}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </div>
  );
}

export default TodoList;
