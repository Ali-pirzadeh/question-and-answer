import React, { useState } from 'react'
import Page from './Page.tsx'
import"./page.css" 
import data from "./data.js"

function PageBox() {
    const[questions , setQuestions] = useState(data)
  return (
    <>
        <div className='container'>
        <h3>این سوال اول است</h3>
        <div className='info'>
           {questions.map((question,index) => {return <Page key={index} {...question}/>})}
        </div>
        </div>
    </>
  )
}

export default PageBox