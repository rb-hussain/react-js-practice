import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "UserData",
    initialState: [],
    reducers:{
        addUser(state,action) {
            state.push(action.payload);
            // console.log(action.payload);
        },
        removerUser(state,action) {
        console.log(state.UserData);
        },
        cleasrAllUser(state,action) {},
    }
    
});
// console.log(userSlice.actions);

export const {addUser,removerUser} = userSlice.actions; 
export default userSlice.reducer;