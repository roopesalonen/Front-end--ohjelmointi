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

    const deleteTodo = (index) => {
        setTodos(todos.filter((todo, i) => i !== index))
    };

    return (
        <>
            <input name="desc" placeholder="Description" onChange={handleChange} value={todo.desc} />
            <input name="date" placeholder="Date" onChange={handleChange} value={todo.date} />
            <button onClick={addTodo}>Add</button>
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
                            <td><button onClick={() => deleteTodo(index)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}