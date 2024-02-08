import { useContext, useEffect } from "react"
import Context from "./Context";
import { useNavigate } from "react-router";
import Footer from "./Footer";

function MainPage() {
  const navigate = useNavigate();
  const Data = useContext(Context);
  console.log(Data?.user)
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
       <button onClick={()=> navigate('/PDFForms')}>PDFForms</button>
       <div className="pdfcards">
        {Data?.user?.cv?.map((element,index) =>(
      <div key={index} className="cvdiv">
          <h1>{element?.PDFName}</h1>
      </div>   
        ))}
       </div>
        <Footer/>
      </>
    )
  }
  
export default MainPage
  