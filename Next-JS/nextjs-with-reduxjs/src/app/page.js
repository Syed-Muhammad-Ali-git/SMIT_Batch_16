// App component...!

"use client";

import React, { useState } from 'react';
import { updateAuthState } from '@/redux/store/actions/auth-actions/auth-actions';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoAction } from '@/redux/store/actions/todo-actions/todo-actions';

const App = () => {

  const [todoInput, setTodoInput] = useState("");

  // Redux hooks...!
  const dispatch = useDispatch();
  const { todoList } = useSelector(({ todoStates }) => { return todoStates });
  // console.log('Todo data: ', todoList);

  // Add Item Handler...!
  const addItem = () => {
    dispatch(addTodoAction(todoInput));
    setTodoInput("");
  }

  return (
    <div>
      <h1> Todo App Next JS with Redux JS </h1>
      <input
        type='text'
        placeholder='Add Todo'
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <button onClick={addItem}> Add Item </button>

      <ul>
        {
          todoList?.map((item, index) => {
            if (item?.startsWith('a')) {
              return (
                <li key={index}>
                  {item}
                </li>
              )
            }
          })
        }
      </ul>
    </div>
  );
};

export default App;