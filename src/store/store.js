
import { configureStore } from "@reduxjs/toolkit"; 
 import cartReducer from './cartslice'


const store = configureStore({
    reducer:  {
        cart  : cartReducer,
    },
    devTools: process.env.NODE_ENV !== 'production', // Enable DevTools in non-production environment

})


export default store ; 