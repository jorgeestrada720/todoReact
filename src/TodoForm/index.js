import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css"

function TodoForm(){

    const[newTodoValue,setNewTodoValue ] = React.useState('');

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);


    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };
    
    return(
        <form onSubmit={onSubmit}>
            <label>...</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Cortar la cebolla par el almuerzo"
            />
            <div>
                <button
                    type="button"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                >
                
                    A;adir
                </button>
            </div>
        </form>
    );
}

export {TodoForm};