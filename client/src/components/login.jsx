import { useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
import "./login.css"


const LogIn=()=>{
    const [user,setuser]=useState({
        username:"",
        password:""
    })

    const navigate=useNavigate()

   const handleChange=(e)=>{
    const name=e.target.name
    const value=e.target.value
    setuser({
        ...user,[name]:value
    })
   }
   const homepage= async (e)=>{
    e.preventDefault()
    const res=await (await fetch('http://localhost:3000/login',{body:JSON.stringify(user),method:"POST", headers: {
        "Content-Type": "application/json",
      },})).text()
      console.log(res)
    if (res==="error"){
        alert("check user name and password")
    }
    localStorage.setItem("accesstoken",res)
    navigate("/home")
   }
   
    // const homePage= async ()=>{
    
    // const res= await fetch(backendurl,{body:{username,password}})
    // }


    return(
        <>
        <div className="log">
        <form action="" method="post" className="form">
        <label htmlFor="">user Name:</label>
        <input type="text" name='username'onChange={handleChange} placeholder="username"></input>
        <label htmlFor="">Password</label>
        <input type="password" name="password" onChange={handleChange} placeholder="password"></input>
        <input type="submit" className="but" onClick={homepage}></input>
        </form>
        </div>
        </>
       
    )

}

export default LogIn