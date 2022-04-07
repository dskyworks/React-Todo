const TodoItem = ({handleToggleDoneTask, task, handleDeleteTask}) => {

  const keyPress = (e) => {
    if (e.code === 'Space' || e.code === 'Enter') {
      e.preventDefault();
      handleToggleDoneTask(e, task);
    }
  }

  return (
    <li
      className="todo__item">
      <span
        tabIndex={0}
        onKeyDown={keyPress}
        onClick={(e) => handleToggleDoneTask(e, task)}
        className={
          task.done
            ? "todo__name todo__name--done"
            : "todo__name"}>{task.value}
      </span>
      <button
        className="todo__btn todo__btn-delete-task"
        onClick={() => handleDeleteTask(task)}>
      </button>
    </li>
  )
}

export default TodoItem;
