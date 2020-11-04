import React, { useState } from 'react'
import TodoForm from './TodoForm';
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {

  const [edit, setEdit] = useState({
    id: null,
    value: ''
  })

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((t, i) => (
    <div className={t.isComplete ? 'mt-2 h-12 todo-row complete' : 'mt-2 h-12 todo-row'} key={i}>
      <div key={t.id} onClick={() => completeTodo(t.id)}>
        {t.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeTodo(t.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: t.id, value: t.text })}
          className='edit-icon'
        />
      </div>
    </div>
  ))
}

export default Todo
