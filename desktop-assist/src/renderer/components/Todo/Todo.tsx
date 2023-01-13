import React from 'react';
import { ITodo } from './ITodo';
import TrashIcon from '../../../../assets/svg/trash.svg';

function Todo({
  id,
  task,
  complete,
  toggleTodoCompleted,
  deleteTodo,
}: ITodo | any) {
  return (
    <div className="flex flex-row justify-between w-full p-2 border-b border-black">
      <div className="">
        <input
          className="mr-2"
          id={id.toString()}
          type="checkbox"
          defaultChecked={complete}
          onChange={() => toggleTodoCompleted(id)}
        />
        <label
          className={`text-md ${complete ? 'line-through' : ''}`}
          htmlFor={id}
        >
          {task}
        </label>
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => deleteTodo(id)}
        >
          <img
            src={TrashIcon}
            alt=""
            className="w-5 hover:rounded-full hover:bg-red-600"
          />
        </button>
      </div>
    </div>
  );
}

export default Todo;
