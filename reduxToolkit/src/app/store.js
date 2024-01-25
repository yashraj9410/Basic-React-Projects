import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice' 

// we have to use all the rducers here from todoSlice
export const store  = configureStore({
    reducer: todoReducer
});