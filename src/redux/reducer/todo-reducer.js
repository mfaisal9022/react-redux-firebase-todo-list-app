import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'todo-list',
    initialState: {
        todoItems: [],
    },
    reducers: {

        getAllTodos:(state,action)=>{
            console.log("Called : ", action.payload);
            state.todoItems = action.payload;
        },
        addItemInList: (state, action) => {
            state.todoItems = [...state.todoItems, action.payload];
        },
        removeItemInList: (state, action) => {
            state.todoItems = state.todoItems.filter((item,index)=> item.id !== action.payload ? item : null);
        },
        updateItemInList: (state, action) => {
            state.todoItems = state.todoItems.map(item =>
                item.id === action.payload.index
                    ? { ...item, title: action.payload.item }
                    : item
            );
        }
    },
})

export const { addItemInList, removeItemInList, updateItemInList, getAllTodos } = counterSlice.actions
export default counterSlice.reducer
