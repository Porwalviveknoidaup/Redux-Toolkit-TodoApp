import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../Redux/Slice'

function UserList({todos,onDataClick}) {
  const dispatch = useDispatch()

  const handleRemoveTodo = (id) =>{
    dispatch(removeTodo(id))
  }

  const handleEdit = (id) =>{
    onDataClick(id)
  }

  return (
    <>
<div className="d-flex flex-wrap justify-content-center">
{todos && todos?.map((item,index)=>{
  return(
    <>
    <div key={index} className='m-2'>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{item?.name}</Card.Title>
        <Card.Text style={{height:"50px"}}>
        {item?.description}
        </Card.Text>
      <div className='d-flex justify-content-between'>
      <Button variant="primary" onClick={()=>{handleRemoveTodo(item?.id)}}>Remove</Button>
        <Button variant="primary" onClick={()=>{handleEdit(item?.id)}}>Edit</Button>
      </div>
      </Card.Body>
    </Card>
    </div>
    </>
  )
})}
</div>
    </>
  )
}

export default UserList