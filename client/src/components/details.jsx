import { useLocation } from "react-router-dom"
import { useEffect,useState } from "react"
import axios from "axios";


const Details=()=>{
    const [datas, setDatas] = useState([]);
    const location=useLocation()
    console.log(location.state)
    useEffect(() => {
        const result = async () => {
          const res = await axios(`https://randomuser.me/api/?results=50`);
          setDatas(res.data.results);
        };
    
        result();
      }, []);
      const det=datas.filter((data)=>{
        data.id.value==="CE 86 80 61 A"
      })
      console.log(det)

   return (
    <>
    <h1>details</h1>


    </>
   )
}

export default Details