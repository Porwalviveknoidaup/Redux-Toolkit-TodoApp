import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  users:[]
}

export const counterSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo : (state, action) =>{
      const data = {
        id: nanoid(),
        name: action.payload.todoName,
        description:action.payload.todoDescription
    }
      state.users.push(data)
    },
    removeTodo : (state, action) =>{
      const remove =  state?.users?.filter((rm)=>rm.id !==action.payload)
      state.users = remove
    },
    editTodos: (state, action) => {
      const { editTodo, userInput } = action.payload;
      state.users = state?.users?.map((todo) =>
        todo.id === editTodo.id
          ? { ...todo, name: userInput.todoName, description: userInput.todoDescription }
          : todo
      );
    }
  },
})

export const { addTodo,removeTodo,editTodos } = counterSlice.actions

export default counterSlice.reducer