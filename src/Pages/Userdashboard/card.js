import { useState } from "react"
const Card=(props)=>
{
    console.log(props.val2)
    console.log(props.value)
    return(
        <div>
            {props.value.filter((val)=>{
                if(props.val2===undefined)
                    return val
                else if(val.title.toLowerCase().includes(props.val2.toLowerCase()))
                    return val
            }).map((item)=>
                (
                    <div>
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
export default Card