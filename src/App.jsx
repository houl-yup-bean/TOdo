
import { useState } from 'react'
import './reset.css'
import './App.css'
import Header from './Header';
import InputForm from './InputForm';
import TodoList from './TodoList';


function App() {


  const dbTodos = ['자바스크립트 공부하기','찜질방 운영하기','림버스컴퍼니지금바로다운로드','침잠쇄도로1만딜찍기'];
  const [todos,setTodos] = useState(dbTodos)
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    setTodos([inputValue, ...todos])
    setInputValue('');
  }

   const deleteTodo = (id) => {
    const newTodos = todos.filter((_ ,i) => id !== i)
    setTodos(newTodos);
   }


  console.log(inputValue)

  return (
    <>
      <Header />

      <InputForm 
        inputValue={inputValue}
        setInputValue={setInputValue}
        addTodo={addTodo}
      />

      <div className='todo-list-warp'>
      <h2 className='list-title'>할 일</h2>
      <ul className='todo-warp'>
        
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        />

      </ul>
      </div>
    </>
  )
}

export default App
