import React, { useState } from 'react';
import Header from "../../components/header/header";
import Li_Component from '../../components/list-item/list-item';

const TodoScreen = () => {

    const [todoInput, setTodoInput] = useState("");
    const [todoData, setTodoData] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [targetIndex, setTargetIndex] = useState("");

    // Add item handler...
    const addItem = () => {
        const todoClone = [...todoData];
        todoClone.push(todoInput);
        setTodoData(todoClone);
        setTodoInput("");
    };

    // Delete item handler...
    const deleteItem = (index) => {
        console.log('Key: ', index);
        const todoClone2 = [...todoData];
        todoClone2.splice(index, 1);
        setTodoData(todoClone2);
    };

    // Edit item handler...
    const editItem = (index, item) => {
        console.log(index, item);
        setTodoInput(item);
        setTargetIndex(index);
        setIsEdit(true);
    };

    const updateItem = () => {
        const todoClone = [...todoData];
        todoClone.splice(targetIndex, 1, todoInput);
        setTodoData(todoClone);
        setTodoInput('');
        setIsEdit(false);
        setTargetIndex("");
    };

    const cancel = () => {
        setIsEdit(false);
        setTargetIndex("");
        setTodoInput("");
    }

    return (
        <div>
            <Header
                title="Todo Screen"
                color="green"
            />

            <input
                type='text'
                value={todoInput}
                onChange={(e) => {
                    setTodoInput(e.target.value);
                }}
            />
            {
                (isEdit)
                    ?
                    (
                        <div>
                            <button
                                onClick={updateItem}
                                disabled={todoInput.trim().length < 1}
                            >
                                Update Item
                            </button>

                            <button onClick={cancel}>
                                Cancel Edit
                            </button>
                        </div>
                    )
                    :
                    (
                        <button
                            onClick={addItem}
                        // disabled={todoInput.trim().length < 1}
                        >
                            Add Item
                        </button>
                    )
            }

            <ul>
                {
                    todoData.map((item, index) => {
                        return (
                            <Li_Component
                                key={index}
                                liKey={index}
                                liData={item}
                                delHandler={deleteItem}
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default TodoScreen;