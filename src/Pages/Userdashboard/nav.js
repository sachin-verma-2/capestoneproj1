import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import './dashboard.css'

const Navi=()=>
{
    return(
        <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                <Link class="navbar-brand top" to='/'>Job Portal</Link>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <Link class="nav-link active" to='/userdashboard'>Home</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link active" to='/application'>Application</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link active" to='/'>Profile</Link>
                        </li>
                    </ul>
                </div>
                </div>
                </nav> 
        </div>
    )
}
export default Navi