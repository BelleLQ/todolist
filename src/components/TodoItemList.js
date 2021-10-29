import React from 'react'
import TodoItem from './TodoItem'

const TodoItemList = (props) => {
    return (
            <section className="movie-list-continer">
                
                {props.todoItems.map((todoItem)=>(
                    <TodoItem todoItem={todoItem} key={todoItem.id} onDelete={props.onDelete}/>
                ))
                }
            </section>
    )
}

export default TodoItemList
