import { useState } from "react";

export default function TodoList() {

    const [todo, setTodo] = useState({ desc: "", date: "" });
    const [todos, setTodos] = useState([]);

    const handleChange = (e) => {
        setTodo({ ...todo, [e.target.name]: e.target.value });
    };

    const addTodo = () => {
        setTodos([...todos, todo]);
    };

    return (
        <>
            <div id="topbar">
            <h1>Simple Todolist</h1>
            </div>
            <fieldset>
                <legend>Add todo:</legend>
                Description:<input name="desc" placeholder="Description" onChange={handleChange} value={todo.desc} />
                Date:<input name="date" placeholder="Date" onChange={handleChange} value={todo.date} />
                <button onClick={addTodo}>Add</button>
            </fieldset>
            <table>
                <tbody>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                    </tr>
                    {todos.map((todo, index) => (
                        <tr key={index}>
                            <td>{todo.date}</td>
                            <td>{todo.desc}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}