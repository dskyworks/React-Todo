const TodoItem = ({handleToggleDoneTask, task, handleDeleteTask}) => {
  return (
    <li
      className="todo__item">
      <span
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