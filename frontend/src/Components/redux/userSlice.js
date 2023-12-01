import {createSlice} from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name:"user",
    initialState:{
        name: "Dang Phuong Nam",
        age: "20",
        about:"I'm a software engineering",
        avaUrl:"https://i.pinimg.com/originals/e4/6a/c7/e46ac77b22ac005abb1f79b2a37e5675.jpg",
        themeColor:"pink",
        pending: false,
        error: false

    },
    reducers:{
        updateStart: (state)=>{
            state.pending = true;
        },
        updateError :(state)=>{
            state.pending =false;
            state.error =true;
        },
        updateSuccess: (state, action)=>{
            state.pending =false;
            state.error =false;
            state.name =action.payload.name;
            state.age =action.payload.age;
            state.about =action.payload.about;
            state.avaUrl =action.payload.avaUrl;
            state.themeColor =action.payload.themeColor;

        }
     
    }
})
export const {updateStart,updateError,updateSuccess}= userSlice.actions;
export default userSlice.reducer;