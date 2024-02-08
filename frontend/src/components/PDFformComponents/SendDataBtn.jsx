import React, { useContext,useState } from 'react'
import { allContext } from '../../PDFContex'
import axios from 'axios'
import Context from '../Context';
import { useNavigate } from 'react-router';

function SendDataBtn() {
  const navigate = useNavigate();
  const userContext = useContext(Context)
  const user = userContext.user;
    const {state}=useContext(allContext)
    const [allPDF, setAllPDF] = useState([state])
    const PDFArray = async()=>
     {
        setAllPDF((prev)=>[...prev,state])
        console.log(state)
        const response = await axios.post(`${import.meta.env.VITE_REACT_APP_USERS_CALL}/AddCV/${user._id}`, state, {
      withCredentials: true,
    });
    console.log(response.data)
    if(response.data.type === 'info')
    {
      navigate('/mainpage')
    userContext.setToastData({content:response.data.message, type:response.data.type})
    }
  }

  return (
    <button onClick={()=>PDFArray()}>test</button>
  )
}

export default SendDataBtn