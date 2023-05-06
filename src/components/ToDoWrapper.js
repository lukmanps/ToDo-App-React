import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDo from './ToDo';
import EditToDoForm from './EditToDoForm';

const ToDoWrapper = () => {
    const [todos, setToDos] = useState([]);

    const addToDo = (todo) => {
        setToDos([
            ...todos,
            { id: Date.now(), task: todo, completed: false, isEditing: false }
        ]);
    }

    const toggleComplete = (id) => {
        setToDos(todos.map((todo => todo.id === id ? {
            ...todo,
            completed: !todo.completed
        } : todo)
        ))
    }

    const deleteToDo = (id) => {
        setToDos(todos.filter((todo => todo.id !== id)))
    }

    const editToDo = (id) => {
        setToDos(todos.map((todo => todo.id === id ? {
            ...todo,
            isEditing: !todo.isEditing
        } : todo)
        ))
    }

    const editTask = (task, id) =>{
        setToDos(todos.map((todo=> todo.id === id ? {
            ...todo,
            task,
            isEditing: !todo.isEditing
        } : todo )
        ))
    }


    return (
        <div className='TodoWrapper'>
            <h1>TO DO List</h1>
            <ToDoForm addToDo={addToDo} />

            {todos.map((todo) => (
                todo.isEditing ? (
                    <EditToDoForm editToDo={editTask} task={todo}/>
                ) : (
                    <ToDo
                        key={todo.id}
                        task={todo}
                        toggleComplete={toggleComplete}
                        deleteToDo={deleteToDo}
                        editToDo={editToDo}
                    />
                )
            )

            )}

        </div>
    )
}

export default ToDoWrapper;

