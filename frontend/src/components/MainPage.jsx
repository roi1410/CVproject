import { useContext, useEffect } from "react"
import Context from "./Context";
import { useNavigate } from "react-router";

function MainPage() {
  const navigate = useNavigate();
  const Data = useContext(Context);
  useEffect(() => {
    const userid =Data?.user?._id
    authentic(userid);
  },[]);
  const authentic = async() => {
    try{
    const response =  await Data.authenticate(Data?.user._id);
     if (response?.data.success != true) 
     navigate("/signin");
  }
  catch(e)
  {
    console.log(e);
  }
  }   
    return (
      <>
       <h1 className='center' style={{color:'white'}}>MainPage</h1>

      </>
    )
  }
  
export default MainPage
  