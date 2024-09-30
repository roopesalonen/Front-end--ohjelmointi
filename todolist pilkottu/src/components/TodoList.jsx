import { useState } from "react";
import TodoTable from "./TodoTable"

export default function TodoList() {

    const [todo, setTodo] = useState({ desc: "", date: "" });
    const [todos, setTodos] = useState([]);

    const handleChange = (e) => {
        setTodo({ ...todo, [e.target.name]: e.target.value });
    };

    const addTodo = () => {
        setTodos([...todos, todo]);
    };

    const deleteTodo = (index) => {
        setTodos(todos.filter((todo, i) => i !== index))
    };

    return (
        <>
            <input name="desc" placeholder="Description" onChange={handleChange} value={todo.desc} />
            <input name="date" placeholder="Date" onChange={handleChange} value={todo.date} />
            <button onClick={addTodo}>Add</button>
            <TodoTable todos={todos} deleteTodo={deleteTodo} />
        </>
    );
}