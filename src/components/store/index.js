import { configureStore } from '@reduxjs/toolkit'
import  userSlice  from './UserdataSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,},


});

// export default store;
// export default userSlice.reducer;


