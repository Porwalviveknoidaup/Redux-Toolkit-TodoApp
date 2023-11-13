import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, editTodos } from '../Redux/Slice'
import UserList from './UserList'
import { Button, FloatingLabel, Form } from 'react-bootstrap'
import Dashboard from './Dashboard'
import MyShops from './Shared/Product'

function Home() {
  const todos = useSelector((state) => state.userList.data)
  const user = useSelector((state) => state.userList.users)
  const dispatch = useDispatch()

  const [userInput, setUserInput] = useState({todoName:"",todoDescription:""})
  const [editTodo, setEditTodo] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(!userInput.todoDescription || !userInput.todoName){
      return
    }
    const editObj = {
      editTodo:editTodo,
      userInput : userInput
    }
    editTodo ? dispatch(editTodos(editObj)) :  dispatch(addTodo(userInput))
    setUserInput({todoDescription:"",todoName:""})
    setEditTodo("")
  }
  const handleUserInput = (formField,formValue) =>{
    setUserInput({...userInput,[formField]:formValue})
  }
  const handleEditTodo = (id) =>{
    const data = todos?.find((edit)=>edit.id===id)
    setUserInput((prevStat)=>(
      {...prevStat,
        todoDescription:data?.description,
        todoName:data?.name
      }
    ))
    setEditTodo(data)
    }
    const KeyId = 'rzp_test_2lMNqLM1b7QnqZ';
  return (
    <>
    {/* <div className='d-flex justify-content-center todo-container-background'>
    <div className="center-container">
      <h3 className='heading'>Todo App</h3>
      <div className='todo-box'>
        <form onSubmit={(e)=>{handleSubmit(e)}} className='form-todo'>
        <FloatingLabel
        controlId="floatingInput"
        label="Todo Name"
        className="mb-3"
      >
        <Form.Control type="text"
         name='todo'
         placeholder='Please Enter Todo Name'
         onChange={(e)=>{handleUserInput("todoName",e.target.value)}}
         value={userInput?.todoName}
          />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea2" label="Todo Description" className='mb-3'>
        <Form.Control
          as="textarea"
          placeholder="Please Enter Description Here"
          style={{ height: '100px' }}
         onChange={(e)=>{handleUserInput("todoDescription",e.target.value)}}
         value={userInput?.todoDescription}
        />
      </FloatingLabel>
   <div className='d-flex justify-content-center'>
{editTodo ? 
   <Button variant="primary" type="submit" className='mb-3'>
   Edit Todo
 </Button>
 :
 <Button variant="primary" type="submit" className='mb-3'>
 Add Todo
</Button>
}
   </div>
        </form>
      </div>
    </div>
    </div>
    <UserList todos={todos} onDataClick={handleEditTodo} /> */}
    {/* <Dashboard KeyId={KeyId} /> */}
    <MyShops />
    </>

  )
}

export default Home