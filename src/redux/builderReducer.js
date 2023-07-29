import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  builder: [],
}

export const builderSlice = createSlice({
  name: 'builder',
  initialState,
  reducers: {
    addToBuilder:(state,action)=>{
         const isExist=state.builder.find(item=>item===action.payload)
         if(!isExist){
            state.builder.push(action.payload)
         }
    }
  }
})

// Action creators are generated for each case reducer function
export const { addToBuilder } = builderSlice.actions

export default builderSlice.reducer