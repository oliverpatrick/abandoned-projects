import React from 'react';
import TimerList from '../components/Timer/TimerList';
import TimerControlBar from '../components/Timer/TimerControlBar';

const TimerPage = () => {
  const [timerList, setTimerList] = React.useState([{}]);

  // function toggleTodoCompleted(id: number): void {
  //   const updatedTodos = todoList.map((todo) => {
  //     if (id === todo.id) {
  //       return { ...todo, complete: !todo.complete };
  //     }
  //     return todo;
  //   });
  //   setToDoList(updatedTodos);
  // }

  // function deleteTodo(id: number): void {
  //   const remainingTodos = timerList.filter((timer) => id !== timer.id);
  //   setTimerList(remainingTodos);
  // }

  function addTimer(newTask: string, newDescription?: string): void {
    const newTimer = {
      id: timerList.length + 2,
      task: newTask,
      description: newDescription,
      complete: false,
    };
    setTimerList([...timerList, newTimer]);
  }

  return (
    <>
      <TimerControlBar addTimer={addTimer} />
      {/* <TimerList timerListItem={} /> */}
    </>
  );
};

export default TimerPage;
