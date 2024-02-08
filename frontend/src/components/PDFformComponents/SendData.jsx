import React, { useContext,useState } from 'react'
import { allContext } from '../../PDFContex'


function SendDataBtn() {
    const {state}=useContext(allContext)
    const [allPDF, setAllPDF] = useState([state])
    function PDFArray() {
        setAllPDF((prev)=>[...prev,state])
        
    }

  return (
    <button onClick={()=>PDFArray()}>test</button>
  )
}

export default SendData