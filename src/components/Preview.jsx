import { Button, Divider,Stack, Typography } from '@mui/material'
import React from 'react'
import { FaFileDownload } from "react-icons/fa";
import Edit from './Edit';
import { MdHistory } from "react-icons/md";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { addHistoryAPI, getResumeAPI } from '../services/allAddedAPIs';
import html2canvas from 'html2canvas'
import { jsPDF } from "jspdf";
import { useState } from 'react';
import { Link } from 'react-router-dom';
 
const suggestion = ['java', 'DotNet', 'React', 'Angular', 'Html', 'css']

const Preview = ({formData,setFormData,resumeId,setResumeId}) => {

  const [updateId, setUpdateId] = useState(false) 
  const downloadPDF=async()=>{
     const input=document.getElementById("result")
    const canvas=await html2canvas(input,{scale:2})
    const imgData=canvas.toDataURL("image/png")

    const pdf = new jsPDF('p',"mm",'a4')
    const pdfWidth=pdf.internal.pageSize.getWidth()
    const pdfHeight=(canvas.height*pdfWidth)/canvas.width
    pdf.addImage(imgData,"PNG",0,0,pdfWidth,pdfHeight)
    pdf.save("resume.pdf")
    try{
     if(updateId==formData){ 
      const result=await addHistoryAPI(updateId)
      console.log(result)
      }else{
       const result1 = await addHistoryAPI(formData)
       console.log(result1)
      }
    }
    catch(err){
      console.log(err)
    }
  } 
// const getResume=async(id)=>{
//   const result= await getResumeAPI(id);
// setFormData(result.data)
// }
const handleUpdate=(data)=>{
  setUpdateId(data)
}


  return (
    <div>
      <Stack className="me-5 mt-3" direction="row" spacing={1} 
      sx={{justifyContent:"flex-end",alignItems:"center"}}>
    
      <Button onClick={downloadPDF}><FaFileDownload className='fs-3' /></Button>
        <Edit resumeId={resumeId} formData={formData} setFormData={setFormData} setResumeId={setResumeId} onUpdate={handleUpdate} setUpdateId={setUpdateId}/>
       <Link to={'/history'}><Button><MdHistory className='fs-2' /></Button></Link>
    
      </Stack>
      <div>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
               width: 430,
            },
          }}
        >
         
          <Paper id="result" className='mb-2 ms-5 text-center p-3' elevation={7} >
          
            {updateId ? (<Typography className='text-secondary' variant="h6" component="h2">
              {updateId.personalData.name}
            </Typography>) :(<Typography className='text-secondary' variant="h6" component="h2">
              {formData.personalData.name}
            </Typography>)}
            {updateId?(<Typography className='text-secondary ' variant="h6" component="h2">
              {updateId.personalData.job}
            </Typography>):(<Typography className='text-secondary ' variant="h6" component="h2">
              {formData.personalData.job}
            </Typography>)}
            {updateId ? (<Typography className='text-secondary' variant="h6" component="h2">
              {updateId.personalData.location}
            </Typography>) :(<Typography className='text-secondary' variant="h6" component="h2">
              {formData.personalData.location}
            </Typography>)}
            {updateId ? (<Typography className='text-secondary mb-1' variant="h6" component="h2">
              {updateId.personalData.github} || {updateId.personalData.linkedin} || {updateId.personalData.Portfolio}
            </Typography>) :(<Typography className='text-secondary mb-1' variant="h6" component="h2">
              {formData.personalData.github} || {formData.personalData.linkedin} || {formData.personalData.Portfolio}
            </Typography>)}
            <Divider className='mb-2'>Summary</Divider>
            {updateId ? (<Typography className='text-secondary' variant="h6" component="h2">
              {updateId.Summary.summaryData}
            </Typography>) :( <Typography className='text-secondary' variant="h6" component="h2">
           {formData.Summary.summaryData}
            </Typography>)}
            <Divider className='mb-2'>Education</Divider>
            {updateId ? (<Typography className='text-secondary' variant="h6" component="h2">
              {updateId.Education.course}
            </Typography>) :(<Typography className='text-secondary' variant="h6" component="h2">
              {formData.Education.course} 
            </Typography>)}
            {updateId ? (<Typography className='text-secondary mb-1' variant="h6" component="h2">
              {updateId.Education.college}  || {updateId.Education.university}  || {updateId.Education.passout}
            </Typography>) :( <Typography className='text-secondary mb-1' variant="h6" component="h2">
              {formData.Education.college}  || {formData.Education.university}  || {formData.Education.passout} 
            </Typography>)}
            <Divider className='mb-2'>Professional Experience</Divider>
            {updateId ? (<Typography className='text-secondary' variant="h6" component="h2">
              {updateId.Experience.jobBefore}
            </Typography>) :(<Typography className='text-secondary' variant="h6" component="h2">
              {formData.Experience.jobBefore}
            </Typography>)}
            {updateId ? (<Typography className='text-secondary mb-1' variant="h6" component="h2">
              {updateId.Experience.company} || {updateId.Experience.compLocation} || {updateId.Experience.duration}
            </Typography>) :(<Typography className='text-secondary mb-1' variant="h6" component="h2">
              {formData.Experience.company} || {formData.Experience.compLocation} || {formData.Experience.duration}
            </Typography>)}
            <Divider className='mb-2'>Skills</Divider>
            {updateId ? (<Stack
              direction="row"
              spacing={1}
              sx={{
                flexWrap: 'wrap',
                gap: 2,            // gives consistent space between items
                justifyContent: 'flex-start',  // instead of space-evenly
                margin: "10px 0"
              }}
            >
              {formData.Skills.map(skill => (
                <Button className='ms-3'
                  key={skill}
                  variant="contained"
                  color="primary"
                  sx={{ margin: 0, padding: '4px 8px', display: 'flex', alignItems: 'center' }}
                >
                  <Typography variant="body2" color="inherit" sx={{ mr: 1 }}>
                    {skill}
                  </Typography>
                  <Typography variant="body2" color="inherit">
                    X
                  </Typography>
                </Button>
              ))}
            </Stack>) :(    <Stack
              direction="row"
              spacing={1}
              sx={{
                flexWrap: 'wrap',
                gap: 2,            // gives consistent space between items
                justifyContent: 'flex-start',  // instead of space-evenly
                margin: "10px 0"
              }}
            >
              {formData.Skills.map(skill => (
                <Button className='ms-3'
                  key={skill}
                  variant="contained"
                  color="primary"
                  sx={{ margin: 0, padding: '4px 8px', display: 'flex', alignItems: 'center' }}
                >
                  <Typography variant="body2" color="inherit" sx={{ mr: 1 }}>
                    {skill}
                  </Typography>
                  <Typography variant="body2" color="inherit">
                    X
                  </Typography>
                </Button>
              ))}
            </Stack>)}
            
          </Paper>
        </Box>
      </div>
      </div>
      

  )   
}


export default Preview
