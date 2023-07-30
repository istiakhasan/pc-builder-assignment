import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  builder: [],
}

export const builderSlice = createSlice({
  name: 'builder',
  initialState,
  reducers: {
    addToBuilder:(state,action)=>{
         const isExist=state.builder.find(item=>item?.categoryId===action.payload.categoryId)
         if(!isExist){
            state.builder.push(action.payload)
         }else{
          const remining=state.builder.filter(item=>item?.categoryId !== action.payload.categoryId)
          const newArr=[...remining,action.payload]
          state.builder.push(newArr)
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