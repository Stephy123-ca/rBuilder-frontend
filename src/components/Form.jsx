import React from 'react'
import Steps from './Steps'
import { useState } from 'react'
import Preview from './Preview'

const Form = () => {
    const [resumeId, setResumeId] = useState("")
  const [formData,setFormData]=useState({
    personalData:{
      name:"",
      job:"",
      location:"",
      github:"",
      linkedin:"",
      Portfolio:"",
        email:"",
        phone:"",

      },   
    Education:{
      course:"",
      college:"",
      university:"",
      passout:"",
    },
    Experience:{
      jobBefore:"",
      company:"",
      compLocation:"",
      duration:"",
    },
    Skills:[],
    Summary:{
      summaryData:"",
    }
  })
  return (
    <div>
      <div className='row'>
        <div className='col-6'>
          <Steps formData={formData} setFormData={setFormData} resumeId={resumeId} setResumeId={setResumeId}/>
        </div>
        <div className='col-6'>
          <Preview formData={formData} setFormData={setFormData} resumeId={resumeId} setResumeId={setResumeId} />
        </div>
      </div>
    </div>
  )
}

export default Form
