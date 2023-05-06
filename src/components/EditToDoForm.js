import React, {useState} from 'react'

const EditToDoForm = ({editToDo, task}) => {
  const [value, setValue] = useState(task.task);
  const handleSubmit = (e) => {
      e.preventDefault();
      
          editToDo(value, task.id);
          setValue('');
          console.log(value, ' :Values');
      
  }
  return (
      <form onSubmit={handleSubmit} className='TodoForm'>
          <input type='text' value={value} onChange={(e)=> setValue(e.target.value)} className='todo-input' placeholder='What is the task today?' />
          <button type='submit' className='todo-btn'>Add Task</button>
      </form>
  )
}

export default EditToDoForm
