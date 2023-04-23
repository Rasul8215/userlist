import {Link} from "react-router-dom"
import './front.css'

const Front=()=>{
    return(
       <>
        <Link to="/login" className="login">Login</Link>
        <h1>Access this file to login first</h1>
        <p>It has lot of user details with password so login is mandatory</p>
       </>
    )
}

export default Front