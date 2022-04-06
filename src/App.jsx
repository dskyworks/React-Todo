import logo from './assets/logo.svg';
import './App.css';
import {useRef, useState} from "react";
import TodoInput from "./components/TodoInput";

function App() {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState([]);

  const inputRef = useRef(null);

  function handleInputUpdate(e) {
    setInputValue(e.target.value)
  }

  function handleAddTask(e) {
    e.preventDefault();
    inputRef.current.focus();
    if (inputValue.trim() !== '') {
      const newTask = {
        done: false,
        value: inputValue
      }
      setTasks([...tasks, newTask]);
      setInputValue('');
    }
  }

  function handleDeleteTask(taskToDelete) {
    setTasks([...tasks.filter(f => f !== taskToDelete)])
  }

  function handleToggleDoneTask(e, taskToToggleDone) {
    e.stopPropagation();
    setTasks([...tasks.map(task => {
      if (task === taskToToggleDone) {
        task.done = !task.done;
        console.log(taskToToggleDone)
      }
      return task
    })])
  }

  const taskList = tasks.map((t, idx) => (
    <li
      key={idx}
      className="todo__item">
      <span
        onClick={(e) => handleToggleDoneTask(e, t)}
        className={
          t.done
            ? "todo__name todo__name--done"
            : "todo__name"}>{t.value}
      </span>
      <button
        className="todo__btn todo__btn-delete-task"
        onClick={() => handleDeleteTask(t)}>
        x
      </button>
    </li>))

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="todo">
          <h1>Todo App</h1>
          <ul className="todo__list">
            {taskList}
          </ul>
          <TodoInput
            handleAddTask={handleAddTask}
            inputRef={inputRef}
            inputValue={inputValue}
            handleInputUpdate={handleInputUpdate} />
        </div>
      </header>
    </div>
  );
}

export default App;
