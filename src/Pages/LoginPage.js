// admin and admin username and pass
// events -> onblur etc
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from 'axios';
import AuthToken from '../Components/AuthToken';
import {useDispatch} from 'react-redux';
// import { add } from "../store/nameSlice";
import {login,logout} from '../Store/userSlice';
import "../CSS/LoginPage.css"
function LoginPage(){

    const dispatch = useDispatch();
    
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const [checkEmail,setCheckEmail] = useState('');
    const [checkName,setCheckName] = useState('');
    const [checkPass,setCheckPass] = useState('');
    const [flag,setFlag] = useState(false);
    useEffect(()=>{
        if(email&&name&&pass){
            setFlag(true);
        }
    },[email,name,pass])
    console.log("flag",flag);
    const WarningEmail = ()=>{
        console.log("required");
        if(email)
        setCheckEmail("")
        else
        setCheckEmail("Enter valid email address")
    }
    const WarningName = ()=>{
        console.log("required");
        if(name)
        setCheckName('')
        else
        setCheckName("Enter valid Name")
    }
    const WarningPass = ()=>{
        // console.log("required");
        if(pass)
        setCheckPass('');
        else
        setCheckPass("Enter valid Password")
    }

    const handleSubmit=(e)=>{
      e.preventDefault();
      console.log("submit clicked");
      const user = {
        'name':name,
        'email':email,
        'password':pass
    }
      axios.post('http://localhost:9000/login',{user})
      .then(res=>{
          console.log("data ",res.data);
          console.log("success");
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('userId',res.data.userId);
          localStorage.setItem('name',name)
          AuthToken(res.data.token);
          
          const data = {
            admin:true,
            status:true,
            name:name
        }
        dispatch(login(data))
      })
      .catch(res=>{
        dispatch(logout())
          console.log("res fail = ",res);
      });
    }

    return(
        <div className="container">  
 <div className=" no-gutters shadow-lg">  
 
 <div className=" bg-white p-5">  
 <h3 className="pb-3">Login Form</h3>  
 <div className="form-style">  
 <form> 
 <div className="form-group pb-3">    
   <input type="name" placeholder="Name" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" onBlur={WarningName} onChange={(e)=>setName(e.target.value)}/>
                     <p className="text-danger">{checkName}</p>   
  </div>  

  <div className="form-group pb-3">    
   <input type="email" placeholder="Email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onBlur={WarningEmail} onChange={(e)=>setEmail(e.target.value)}/>
                     <p className="text-danger">{checkEmail}</p>   
  </div>  
  <div className="form-group pb-3">    
   <input type="password" placeholder="Password" class="form-control" id="exampleInputPassword1" onBlur={WarningPass} onChange={(e)=>setPass(e.target.value)}/>  
   <p className="text-danger">
        {checkPass}</p>
  </div>  
  <div className="d-flex align-items-center justify-content-between">  
 <div className="d-flex align-items-center"><input name="" type="checkbox" value="" /> <span class="pl-2 font-weight-bold">Remember Me</span></div>  
 <div><a href="#">Forget Password?</a></div>  
 </div>  
   <div className="pb-2">  
  <button type="submit" class="btn btn-dark w-100 font-weight-bold mt-2"><Link onClick={(e)=>handleSubmit(e)} className={flag?'btn btn-primary':'btn btn-primary disabled'} to= '/movies'>Login</Link></button>  
   </div>  
 </form>  
  <div className="sideline">OR</div>  
  <div>  
  <button type="submit" class="btn btn-primary w-100 font-weight-bold mt-2"><i className="fa fa-facebook" aria-hidden="true"></i> Login With Facebook</button>  
  </div>  
  <div className="pt-4 text-center">  
  Get Members Benefit. <Link to="/signup">Sign Up</Link>
  </div>  
 </div>  
 </div>  
 </div>  
 </div>  
        
       

    )
}
export default LoginPage;