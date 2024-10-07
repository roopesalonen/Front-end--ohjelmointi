import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TodoList from './TodoList';

export default function Tablist() {

    const [value, setValue] = useState('one');
    const handleChange = (event, value) => {
        setValue(value);
    };

    return (
        <>
            <Tabs value={value} onChange={handleChange}>
                <Tab value="one" label="Home" />
                <Tab value="two" label="Todos" />
            </Tabs>

            {value === 'one' &&
                <div>
                    <h1>Home page</h1>
                    <p>Check out the Todo app</p>
                </div>
            }
            
            {value === 'two' &&
                <div>
                    <TodoList />
                </div>
            }
        </>
    );
}