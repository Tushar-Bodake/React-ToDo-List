import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./TodoList.css";

export default function TodoList() {

    let [todos,setTodos]=useState([{task:"Sample-Task", id:uuidv4(), isDone:false}]);
    let [newTodo,setNewTodo]=useState("");

    let addTask=()=>{
    return setTodos([...todos,{task:newTodo,id:uuidv4(), isDone:false}]);
 
};

let updateTodo=(event)=>{
    return setNewTodo(event.target.value);
};

let delTask = (id) => {
    setTodos(todos.filter((todo) => todo.id != id));
};

let setUpper=()=>{
    setTodos(todos.map((todo)=>{
        return {
            ...todo, task: todo.task.toUpperCase()
        };
    }));
};

let setOneUpper=(id)=>{
    setTodos(todos.map((todo)=>{
        if(todo.id==id){
            return {
            ...todo, task: todo.task.toUpperCase()
        };
        }else{
            return todo;
        }
    }));
};

let markDone=(id)=>{
    setTodos(todos.map((todo)=>{
        if(todo.id==id){
            return {
                ...todo, isDone: !todo.isDone
            };
        }else{
            return todo;
        }
    }));
};


  return (
    <div className="todo-container">
        <h4 className="todo-title">Todo List</h4>

        <div className="todo-input-row">
            <input
                className="todo-input"
                placeholder="enter Task"
                value={newTodo}
                onChange={updateTodo}
            />
            <button className="btn btn-add" onClick={addTask}>Add Task</button>
        </div>

        <ul className="todo-list">
           {
           todos.map((todo) => (
            <li key={todo.id} className="todo-item">
                <span className={`todo-text ${todo.isDone ? "todo-done" : ""}`}>
                    {todo.task}
                </span>
                <div className="todo-actions">
                    <button className="icon-btn btn-case" onClick={()=>setOneUpper(todo.id)}>Aa</button>
                    <button
                        className={`icon-btn ${todo.isDone ? "btn-undone" : "btn-done"}`}
                        onClick={()=>markDone(todo.id)}
                    >
                        {todo.isDone ? "Undo" : "Done"}
                    </button>
                    <button className="icon-btn btn-delete" onClick={()=>delTask(todo.id)}>Del</button>
                </div>
            </li>
            ))
            }
        </ul>

        <button className="btn btn-upper" onClick={setUpper}>Set All Upper</button>
    </div>
  );
}