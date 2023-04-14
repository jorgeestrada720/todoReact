import React from "react";
import './TodosLoading.css';

function TodosLoading(){
    return(
        <div className="LoadingTodo-container">
            <span className="LoadingTodo-conpleteIcon"></span>
            <p className="LoadingTodo-text">Cargando Todos..</p>
            <span className="LoadingTodo-deleteIcon"></span>
        </div>

    );
}

export {TodosLoading};