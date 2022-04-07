import './App.css';
import {useEffect, useRef, useState} from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";

function App() {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('items')) || []);

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
      }
      return task
    })])
  }

  const taskList = tasks.map((task, idx) => (
    <TodoItem
      key={idx}
      handleToggleDoneTask={handleToggleDoneTask}
      task={task}
      handleDeleteTask={handleDeleteTask}
    />
    ))

    useEffect(() => {
      localStorage.setItem('items', JSON.stringify(tasks))
    }, [tasks])

    return (
    <div className="App">
      <header className="App-header">
        <div className="todo">
          <h1>Todo App</h1>
          <TodoList taskList={taskList} />
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
