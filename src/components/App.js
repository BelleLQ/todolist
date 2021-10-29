import React from 'react'

import Modal from './Modal'
import Header from './Header'
import SearchField from './SearchField'
import AddTodoForm from './AddTodoForm'
import TodoItemList from './TodoItemList'

import '../css/App.css';

import {useState, useEffect} from 'react'



const App = () => {

  const[modalState, setModalState]=useState({
    message:"",
    visible:false
  })
  const [startState, setStartState] = useState(false);
  const toggleAddTodoForm = () =>{
    setStartState(!startState);
  }

  const [todoItemState, setTodoItemState] = useState([]);
  const addTodo = (newTodo) =>{

    localStorage.setItem("todos", JSON.stringify([...todoItemState, newTodo]));
    setTodoItemState([...todoItemState, newTodo]);
    setModalState({
      message: `Todo item "${newTodo.title}" is added!`,
      visible: true
    })

  }
  const deleteTodo = (id) =>{
    const newTodos = todoItemState.filter((todoItem)=>{
      return todoItem.id !== id;
  })
    setTodoItemState(newTodos);
    localStorage.setItem("todos", JSON.stringify(todoItemState));
    setModalState({
      message: `Todo item is deleted!`,
      visible: true
    })
  }
  const turnOffModal = () =>{
    setModalState({
      message:"",
      visible:false
    })
  }
  const searchTodo = (input) =>{

    let todoList = todoItemState.filter((todo)=>{
      return todo.title.toLowerCase().includes(input.toLowerCase())
    })

    if(input===""){
      todoList = JSON.parse(localStorage.getItem('todos'));
    }
    setTodoItemState(todoList)
  }

  useEffect(()=>{
    if(localStorage.getItem("todos")){
      setTodoItemState(JSON.parse(localStorage.getItem("todos")));
    }
  },[])

  return (
    <div className="container">
        <Modal modalState={modalState} onTurnOff={turnOffModal}/>
        <Header startState= {startState} onToggleAddTodo = {toggleAddTodoForm}/>
        <SearchField onSearch={searchTodo}/>
        <main>
            <AddTodoForm addTodoState={startState} onAddTodo = {addTodo}/>
            <TodoItemList todoItems={todoItemState} onDelete={deleteTodo}/>
        </main>
    </div>
  )
}

export default App
