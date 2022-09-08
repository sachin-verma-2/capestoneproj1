import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import {createAsyncThunk,current} from '@reduxjs/toolkit'


// const initialState = [];
// let name,password;
// reducers are pure fn
export const fetchData=createAsyncThunk('/pages/fetchData',async ()=>{
    try{

            const result=await axios.get('http://localhost:9000/dashboard')
            console.log('inside axios')
            console.log(result.data)
            return result.data
        }
    catch(e)
    {
        console.log(e)
    }
})


const userSlice = createSlice({
    name:'login',
    initialState:{
        admin:false,
        status:false,
        name:'User',
        jobdata:[]
    },
    reducers:{
        // add(state,action){
        //     console.log("action.payload",action.payload);
        //     // old redux
        //     // return [...state,action.payload]
        //     state.name = action.payload.name
        //     state.password = action.payload.password
        // },
       
        login(state,action){
            console.log("set login lofginslice");
            state.admin = action.payload.admin;
            state.status = action.payload.status;
            state.name = action.payload.name;
            // state.name = action.payload.name;
            // if(action.payload.name==='admin' && action.payload.password==='admin')
            // {
            //     state.status = true;
            //     state.admin = true;
            // }
            // else
            // state.status = true;
        },
        logout(state){
            console.log("logout in loginslice");
            state.status = false;
            state.admin = false;
            state.name = 'User';
        }

        // remove(state,action){
        //     return state.filter(item=>item.title!==action.payload)
        // }
    },
    extraReducers:
    {
        [fetchData.fulfilled]:(state,action)=>
        {
            console.log("fulfilled",action.payload)
            state.jobdata=[...state.jobdata,action.payload]
            console.log(state.jobdata)
            // state.value.loading=false;
            // state.value.userdata=[...state.value.userdata,...action.payload]
            // console.log(state.value.userdata.length)
        }
    }
})

export const{login,logout} = userSlice.actions;
export default userSlice.reducer; 