import React from 'react'
import {useState} from 'react'

const AddTodoForm = (props) => {
    const [titleState, setTitleState]=useState("");
    const [descState, setDescState]=useState("");
    const [errorTitleState, setErrorTitleState]=useState("");
    const [errorDescState, setErrorDescState]=useState("");

    const validateForm = () =>{
        let isValid = true;
        if(titleState === "") {
            setErrorTitleState("This field is required.");
            isValid = false;
        }
        else setErrorTitleState("");
        if(descState === "") {
            setErrorDescState("This field is required.");
            isValid = false;
        }
        else setErrorDescState("");
        return isValid;
    }

    return (

        <section className={props.addTodoState?"":"hide"}>
                <form>
                    <div className="form-control-container">
    
                        <label for="title"> Title</label>
    
                        <input className="form-control" type="text" id="title" value={titleState} onChange={(event)=>(
                            setTitleState(event.target.value)
                        )} />
                        <span className="error">{errorTitleState} </span>
    
                    </div>
    
                    <div className="form-control-container">
                        
                        <label for="description"> Description</label>
                        <textarea className="form-control" id="description" value={descState} onChange={(event)=>{
                            setDescState(event.target.value);
                        }}></textarea>
    
                        <span className="error">{errorDescState}</span>
                    
                    </div>
                
                    <div className="form-control-container">
                        <button  className="btn btn-primary" type="button" onClick={()=>{
                            if(validateForm()){
                            const newTodo = {
                                id :  Math.floor(Math.random() *50000 ) + 1,
                                title:titleState,
                                description:descState
                            }

                            props.onAddTodo(newTodo)

                            setTitleState("");
                            setDescState("");
                        }
                            }}>Add Todo</button>
                    </div>  
                </form>
            </section>
    )
}

export default AddTodoForm
