const TodoList = (props) => {
  return (
    <ul className="todo__list">
      {props.taskList}
    </ul>
  )
}

export default TodoList;