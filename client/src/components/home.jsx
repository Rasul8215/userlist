import { Link } from "react-router-dom";
import "./home.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [datas, setDatas] = useState([]);
  const [page, setpage] = useState(3);
  const [det, setdet] = useState("");
  const navigate = useNavigate();
  const navi = useNavigate();
  useEffect(() => {
    const gettoken = localStorage.getItem("accesstoken");
    if (!gettoken) {
      navigate("/");
    }
  }, []);

  const handelscroll = () => {
    console.log("fulll" + document.documentElement.scrollHeight);
    console.log("innne" + window.innerHeight);
    console.log(document.documentElement.scrollTop);
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setpage((pre) => pre + 1);
      }
    } catch (err) {
      console.log("error");
    }
  };

  useEffect(() => {
    const result = async () => {
      const res = await axios(`https://randomuser.me/api/?results=${page}`);
      setDatas((prev) => [...prev, ...res.data.results]);
      setpage(res.data.info.results);
    };

    result();
  }, [page]);

  // const newLocal = () => {
  //     setpage(page + 5)
  //     const result = async () => {
  //         const res = await axios(`https://randomuser.me/api/?results=${page}`)
  //         setDatas(datas.concat(res.data.results))
  //         setpage(res.data.info.results)

  //     }

  //     result()
  // }
  // const fetchData=newLocal
  // console.log(page)

  // useEffect(()=>{
  //     const result= ()=>{fetch('https://randomuser.me/api/?results=50').then(res=>
  //     res.json()
  // ).then((json)=> setDatas(json))};
  //     result()
  // },[])

  useEffect(() => {
    window.addEventListener("scroll", handelscroll);
    return () => window.removeEventListener("scroll", handelscroll);
  }, []);

  const details=(e)=>{
    navi('/details',{state:{value:e}})
  }



  return (
    <>
      <Link to="/" className="login">
        Logout
      </Link>
      <h1 className="title">Users List</h1>
      {/* <div className="full">
        <div className="box">
            <h5>{datas.results[0].name.first} {datas.results[0].name.last}</h5>
            <h5>{datas.results[0].phone}</h5>
            <h5>{datas.results[0].location.country}</h5>
            <img src={datas.results[0].picture.thumbnail} alt="np preview" />
        </div>
        <div className="box">
            <h5>{datas.results[0].name.first} {datas.results[0].name.last}</h5>
            <h5>{datas.results[0].phone}</h5>
            <h5>{datas.results[0].location.country}</h5>
            <img src={datas.results[0].picture.thumbnail} alt="np preview" />
        </div>
        </div> */}

      <div className="full">
        {datas.map((data) => (
          <div className="box">
            <h5>
              {data.name.first} {data.name.last}
            </h5>
            <h5>{data.phone}</h5>
            <h5>{data.location.country}</h5>
            <img src={data.picture.thumbnail} alt="no preview" />
            <button className="button" onClick={(e)=>details(data.id.value)}>more</button>
          </div>
        ))}
      </div>
    </>
  );
};
export default Home;
