import React from 'react'
import { FaWindowClose } from "react-icons/fa";

const TodoItem = (props) => {
    return (
        <div className="movie-container">
            
                    <div className="grid grid-col-2 movie-top-area">
                        <p>
                            {props.todoItem.title}
                        </p>
                        <FaWindowClose className="icon-cursor icon-size-dbl-xlg grid-x-right" onClick={()=>{
                            props.onDelete(props.todoItem.id)}}/>
                    </div>
        
                    <p className="movie-description">
                        {props.todoItem.description}
                    </p>
        
                </div>
    )
}

export default TodoItem
