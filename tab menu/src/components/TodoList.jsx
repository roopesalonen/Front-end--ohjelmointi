import { useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import dayjs from 'dayjs';
import 'dayjs/locale/fi';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

export default function TodoList() {

    const [todo, setTodo] = useState({ desc: "", date: "", priority: "" });
    const [todos, setTodos] = useState([]);
    const gridRef = useRef();

    const addTodo = () => {
        setTodos([...todos, todo]);
    };

    const handleDelete = () => {
        if (gridRef.current.getSelectedNodes().length > 0) {
            setTodos(todos.filter((todo, index) =>
                index != gridRef.current.getSelectedNodes()[0].id))
        }
        else {
            alert('Select a row first!');
        }
    };

    const dateChange = (date) => {
        setTodo({ ...todo, date: dayjs(date).format('DD.MM.YYYY') });
    }

    const columns = [
        { headerName: "Description", field: "desc", sortable: true, filter: true, flex: 1 },
        { headerName: "Date", field: "date", sortable: true, filter: true, flex: 1 },
        {
            headerName: "Priority", field: "priority", sortable: true, filter: true, flex: 1,
            cellStyle: params => params.value === "High" ? { color: 'red' } : { color: 'black' }
        }
    ];

    return (
        <div className="content">
            <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
                alignItems="center">
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fi">
                    <DatePicker onChange={date => dateChange(date)} name="date" />
                </LocalizationProvider>
                <TextField
                    variant="standard"
                    placeholder="Description"
                    onChange={e => setTodo({ ...todo, desc: e.target.value })}
                    value={todo.desc} />
                <Select
                    variant="standard"
                    value={todo.priority}
                    onChange={e => setTodo({ ...todo, priority: e.target.value })}
                    displayEmpty
                >
                    <MenuItem disabled value="">
                        <em>Priority</em> { }
                    </MenuItem>
                    <MenuItem value="High">High</MenuItem>
                    <MenuItem value="Medium">Medium</MenuItem>
                    <MenuItem value="Low">Low</MenuItem>
                </Select>
                <Button variant="outlined" color="success" size="small" onClick={addTodo}>Add</Button>
                <Button variant="outlined" color="error" size="small" endIcon={<DeleteIcon />} onClick={handleDelete}>Delete</Button>
            </Stack>
            <div className="ag-theme-material" style={{ width: 700, height: 500 }}>
                <AgGridReact
                    ref={gridRef}
                    onGridReady={params => gridRef.current = params.api}
                    rowData={todos}
                    columnDefs={columns}
                    rowSelection="single"
                />
            </div>
        </div>
    );
}