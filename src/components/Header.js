import React from 'react'

const Header = (props) => {
    return (
        <header className="grid grid-col-1-200px">
                <h1>Your Todo List</h1>
                <button  className={props.startState?"btn btn-white grid-x-right": "btn btn-primary grid-x-right"}  type="button" onClick = {()=>{
                    props.onToggleAddTodo()

                    }}> Add More</button>
        </header>
    )
}

export default Header
