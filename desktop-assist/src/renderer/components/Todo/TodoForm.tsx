import React, { useState } from 'react';
import AddIcon from '../../../../assets/svg/plusCircle.svg';

type TodoFormProps = {
  addTodo: (task: string) => void;
};

function TodoForm({ addTodo }: TodoFormProps) {
  const [task, setTask] = useState<string>('');

  function handleSubmit(e: any) {
    e.preventDefault();
    if (!task.trim()) {
      return;
    }
    addTodo(task);
    setTask('');
  }

  function handleChange(e: any) {
    setTask(e.target.value);
  }

  return (
    <form className="" onSubmit={handleSubmit}>
      <div className="flex justify-center items-center w-full">
        <input
          type="text"
          id="new-todo-input"
          className="border-b outline-none w-full text-center focus:border-black mb-2"
          name="text"
          autoComplete="off"
          value={task}
          onChange={handleChange}
        />
        <button type="submit">
          <img src={AddIcon} alt="" className="w-8 mb-2" />
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
