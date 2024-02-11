import React, { useContext, useState } from 'react'
import ImgInput from './ImgInput'
import Certificates from '../../PDFComponents/Certificates'
import { allContext } from '../../PDFContex'

export default function CertificatesForm({register,control}) {
    const [ImgArray, setImgArray] = useState([])
    const {dispatch ,uploadImg}=useContext(allContext)
    
    async function addImageArraytoPDF(imgArray) {
        for (const img of imgArray) {
          try {
            uploadImg(img);
          } catch (error) {
            console.log(error);
          }
        }
      }
      
      
     
      
    
  return (
    <>
    <h1>Add Your Certificates</h1>
    <ImgInput setImgArray={setImgArray} />
    {ImgArray && ImgArray.map((Img,index)=>{
        return(
            <div key={index}>
            <img src={URL.createObjectURL(Img)} alt="" />
            </div>
        )
    })}
    <button onClick={()=>addImageArraytoPDF(ImgArray)}>test</button>
    
    </>
  )
}
