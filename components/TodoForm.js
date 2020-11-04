import React, { useState, useRef, useEffect } from 'react'

function TodoForm(props) {

  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();


    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input
    })

    setInput('');
  }

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <form className="todo-form mt-12 text-center" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit btn-blue ml-6'>
            Update
        </button>
        </>
      ) : (
          <>
            <input
              placeholder='Add a todo'
              value={input}
              onChange={handleChange}
              name='textTodo'
              className='todo-input'
              ref={inputRef}
            />
            <button onClick={handleSubmit} className='todo-button'>
              Add todo
        </button>
          </>
        )}
    </form>
  )
}

export default TodoForm
