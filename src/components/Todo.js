import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, deleteTodo } from '../actions/index';
import './Todo.css';


const Todo = () => {
  const [inputData, setInputData] = useState(''); // State for input field value
  const list = useSelector((state) => state.todoReducers.list) // Getting todo list from Redux store
  const dispatch = useDispatch(); // Dispatch function to dispatch actions to Redux store



  return (
    <>
        <div className='container'> 

              <div>
                  <h1>TO-DO LIST </h1>
              </div>
        
            <div className='sub-container'>
              <div className='addItems'>
                  <input type='text' placeholder='What You Want to do..' value={inputData} onChange={(event) => setInputData(event.target.value)}/>
                  {/* <i className='fa fa-plus ' onClick={() => dispatch(addTodo(inputData) , setInputData(''))}></i> */}
                  <button  onClick={() => dispatch(addTodo(inputData) , setInputData(''))}>ADD</button>
              </div>

              <div className='showItem'>

                {
                  list.map((elem) => {
                    return(
                      <>
                        <div className='eachItem' key={elem.id}>
                          <h3>{elem.data}</h3>
                          <div className='todo-btn'>
                            <i className='far fa-trash-alt ' onClick={() => dispatch(deleteTodo(elem.id))}></i>
                          </div>
                        </div>
                        <hr/>
                      </>
                    )
                  })
                }
              </div>

              <div className='showItems'>
                <button onClick={() => dispatch(removeTodo())}>
                  <span className="defaultText">Check List</span>
                  <span className="hoverText">Remove All</span>
                </button>
              </div>

              </div> 
        </div>
    </>
  )
}

export default Todo;
