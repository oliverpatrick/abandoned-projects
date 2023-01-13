/* eslint-disable react/jsx-no-bind */
import moment from 'moment';
import React, { ReactElement } from 'react';
import TodoForm from '../components/Todo/TodoForm';
import TodoList from '../components/Todo/TodoList';

const data = [
  {
    id: 1,
    task: 'Give dog a bath',
    complete: true,
  },
  {
    id: 2,
    task: 'Do laundry',
    complete: true,
  },
  {
    id: 3,
    task: 'Vacuum floor',
    complete: false,
  },
  {
    id: 4,
    task: 'Feed cat',
    complete: true,
  },
  {
    id: 5,
    task: 'Change light bulbs',
    complete: false,
  },
  {
    id: 6,
    task: 'Go to Store',
    complete: true,
  },
  {
    id: 7,
    task: 'Fill gas tank',
    complete: true,
  },
  {
    id: 8,
    task: 'Change linens',
    complete: false,
  },
  {
    id: 9,
    task: 'Rake leaves',
    complete: true,
  },
  {
    id: 10,
    task: 'Bake Cookies',
    complete: false,
  },
  {
    id: 11,
    task: 'Take nap',
    complete: true,
  },
  {
    id: 12,
    task: 'Read book',
    complete: true,
  },
  {
    id: 13,
    task: 'Exercise',
    complete: false,
  },
  {
    id: 14,
    task: 'Give dog a bath',
    complete: false,
  },
  {
    id: 15,
    task: 'Do laundry',
    complete: false,
  },
  {
    id: 16,
    task: 'Vacuum floor',
    complete: false,
  },
  {
    id: 17,
    task: 'Feed cat',
    complete: true,
  },
  {
    id: 18,
    task: 'Change light bulbs',
    complete: false,
  },
  {
    id: 19,
    task: 'Go to Store',
    complete: false,
  },
  {
    id: 20,
    task: 'Fill gas tank',
    complete: false,
  },
];

const TimerPage = (): ReactElement<Element> => {
  const [todoList, setToDoList] = React.useState(data);

  function toggleTodoCompleted(id: number): void {
    const updatedTodos = todoList.map((todo) => {
      if (id === todo.id) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setToDoList(updatedTodos);
  }

  function deleteTodo(id: number): void {
    const remainingTodos = todoList.filter((todo) => id !== todo.id);
    setToDoList(remainingTodos);
  }

  function addTodo(addedTodo: string): void {
    const newTodo = {
      id: todoList.length + 2,
      task: addedTodo,
      complete: false,
    };
    setToDoList([...todoList, newTodo]);
  }

  return (
    <div className="flex flex-col w-full">
      <h2 className="text-xl font-semibold text-center m-1">
        {moment().format('dddd')}
      </h2>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todoList={todoList}
        deleteTodo={deleteTodo}
        toggleTodoCompleted={toggleTodoCompleted}
      />
    </div>
  );
};

export default TimerPage;
