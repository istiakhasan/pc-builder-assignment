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
    },
    resetBuilder:(state)=>{
         state.builder=[]
    }
  }
})

// Action creators are generated for each case reducer function
export const { addToBuilder,resetBuilder } = builderSlice.actions

export default builderSlice.reducer