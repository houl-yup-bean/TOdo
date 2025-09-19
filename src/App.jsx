
import { useState } from 'react'
import './reset.css'
import './App.css'


function App() {
  // const dbTodos =

  const dbTodos = ['자바스크립트 공부하기','찜질방 운영하기','림버스컴퍼니지금바로다운로드','침잠쇄도로1만딜찍기'];
  const [todos,setTodos] = useState(dbTodos)
  const [inputValue, setinputVelue] = useState('');

  const addTodo = () => {
    setTodos([inputValue, ...todos])
    setinputVelue('');
  }

   const deleteTodo = (id) => {
    const newTodos = todos.filter((_ ,i) => id !== i)
    setTodos(newTodos);
   }


  console.log(inputValue)

  return (
    <>
      <header className='header'>
        <h1>TODO LIST</h1>
      </header>

      <div className='input-wrap'>
        <input className='user-input'
          placeholder='할 일을 입력해주세요'
          value={inputValue}
          onChange={(e) => {setinputVelue(e.target.value)}}
          onKeyDown={(e) => e.key === 'Enter' && addTodo()}
        />

        <button 
          className='add-button'
          onClick={addTodo}
          >추가</button>
      </div>

      <div className='todo-list-warp'>
      <h2 className='list-title'>할 일</h2>
      <ul className='todo-warp'>
        {todos.map((todo, i) => {
          return(
          <li key={i} className='todo-item'>
            <input type='checkbox' />
            <p>{todo}</p>
            <button className='delete-button'
            onClick={() => deleteTodo(i)}>x</button>
          </li>
          )
        })}
      </ul>
      </div>
    </>
  )
}

export default App
