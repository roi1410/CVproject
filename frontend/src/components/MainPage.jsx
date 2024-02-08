import { useContext, useEffect } from "react"
import Context from "./Context";
import { useNavigate } from "react-router";
import Footer from "./Footer";

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
     if (response?.data.success != true) {
      Data.setToastData({content:`Token ended, please sign in`,type:'error'});
     navigate("/signin");
     }
  }
  catch(e)
  {
    console.log(e);
    navigate("/signin");
    Data.setToastData({content:`Token ended, please sign in`,type:'error'});

  }
  }   
    return (
      <>
       <h1 className='center' style={{color:'white'}}>MainPage</h1>
        <Footer/>
      </>
    )
  }
  
export default MainPage
  