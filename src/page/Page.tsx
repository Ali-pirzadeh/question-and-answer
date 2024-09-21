import React, { useState } from 'react'
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import "./page.css"




const Page = ({title , description}) => {
    const[showInfo , setShowInfo] = useState(false)


    const showHandeler = () => {
        if(showInfo === false){
            setShowInfo(!showInfo);
        }else{
            setShowInfo(!showInfo);
        }
    }

  return (
<>
    <div className='question'>
        <header>
        <h4> {title} </h4>
        <span onClick={showHandeler}>
            {showInfo ? <CiCircleMinus /> : <CiCirclePlus />  }
        </span>
        </header>
        {showInfo && <p>{description}</p>}   
    </div>
</>
)
}

export default Page