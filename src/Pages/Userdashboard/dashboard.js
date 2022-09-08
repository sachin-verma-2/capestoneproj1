import React from "react";
import data from "./data";
import Navi from "./nav";
import './dashboard.css'
import store from '../../Store/store'
import fetchData from '../../Store/userSlice'
import { useSelector } from "react-redux";
import { useEffect } from "react";

// store.dispatch(fetchData())
const Dashboard=()=>
{
    const{jobdata}=useSelector((state)=>state.login)
    console.log(jobdata)
return  (
    <div>
        <Navi></Navi>
        {console.log('hello')}
        <div>
        <h1 className="heading">Jobs</h1>
        <form class="searching d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      </div>
         {
            jobdata[0].map((item)=>(
                <div>
                {

                    console.log(jobdata[0][0],'hii')
                }
                <div class="card my-4">
                <div class="card-body">
                <h5 class="card-title">{item.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Role: {item.jobType}</h6>
                <p class="card-text">Salary: {item.salary} per month</p>
                <p class="card-text">Duration: {item.duration} months </p>
                </div>
  </div>
</div>
            ))
        } 
    </div>
)
}
export default Dashboard