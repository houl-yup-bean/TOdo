function TodoList({todos, deleteTodo}) {
    return(        
        <>
            {
                todos.length === 0
                ? <li clssName="todo-item">할 일이 없습니다</li>
            : todos.map((todo, i) => {
                return(
                    <li key={i} className='todo-item'>
                        <input type='checkbox' />
                        <p>{todo}</p>
                        <button className='delete-button'
                        onClick={() => deleteTodo(i)}
                        >x</button>
                    </li>
                    )
                })
            }
        </>
    )
}

export default TodoList;