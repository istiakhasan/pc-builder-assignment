import { configureStore } from '@reduxjs/toolkit'
import builderReducer from './builderReducer'
import { categoryApi } from './api/api'

export const store = configureStore({
  reducer: {
    builder:builderReducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categoryApi.middleware),
})

