const TodoInput = (props) => {
  return (
    <form onSubmit={props.handleAddTask}>
      <input
        ref={props.inputRef}
        className="todo__input"
        value={props.inputValue}
        onChange={props.handleInputUpdate}
        type="text" autoFocus={true} placeholder="Задача" />
      <button className="todo__btn todo__btn-add-task">Добавить</button>
    </form>
  )
}
export default TodoInput;