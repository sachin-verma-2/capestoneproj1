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
        jobdata:[],
        sorted:[]
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
        },
        sorting(state,action)
        {
            console.log('hi')
            console.log(current(state))
            console.log(action.payload)
            if(action.payload.data==='fulltime')
            {
                state.sorted=[]
                const x=state.jobdata.filter((item)=>item.jobType.toLowerCase()==='fulltime')
                state.sorted.push(...x)

            }
            else if(action.payload.data==='parttime')
            {
                state.sorted=[]

                const x=state.jobdata.filter((item)=>item.jobType.toLowerCase()==='internship')
                console.log(x)

                state.sorted.push(...x)

            }
            else if(action.payload.data==='wfh')
            {
                state.sorted=[]
                const x=state.jobdata[0].filter((item)=>item.jobType.toLowerCase()==='workfromhome')  
                state.sorted.push(...x)


            }
            else if(action.payload.data==='duration')
            {
                state.sorted=[]
                const x=[...state.jobdata[0]].sort((a,b)=>Number(a.duration)-Number(b.duration))
                state.sorted.push(...x)

            }
            console.log(current(state))
        }

        // remove(state,action){
        //     return state.filter(item=>item.title!==action.payload)
        // }
    },
    extraReducers:
    {
        [fetchData.fulfilled]:(state,action)=>
        {
            console.log("fulfilled",...action.payload)
            state.jobdata=[...state.jobdata,...action.payload]
            console.log(state.jobdata)
            // state.value.loading=false;
            // state.value.userdata=[...state.value.userdata,...action.payload]
            // console.log(state.value.userdata.length)
        }
    }
})

export const{login,logout,sorting} = userSlice.actions;
export default userSlice.reducer; 