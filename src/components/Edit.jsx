import { Button, Divider, Stack, Typography,Modal, TextField } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { FaEdit } from "react-icons/fa";
import {editResumeAPI, updateResumeAPI } from '../services/allAddedAPIs';

const style = {
  position: 'absolute',
  top: '50%',
  left: '150%',
  transform: 'translate(-150%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
  maxHeight: '80vh',
  overflowY: 'auto',
                  display: 'flex',
                  flexWrap: 'wrap',
                  '& > :not(style)': {
                    maxHeight: '80vh',
                    overflowY: 'auto',
                    width: 360,
                  },
             
};


const suggestion = ['java', 'DotNet', 'React', 'Angular', 'Html', 'css']

const Edit = ({ resumeId, onUpdate,setUpdateId}) => {

    
    // const handleDelete=async(item)=>{
    //   const result=await deleteHistoryAPI(item)
    //   getHistory()
    // }
  
  //const result=historyData.map(item=>item.json())
  


  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const [resumeDetails,setResumeDetails]=React.useState({
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



  const handleOpen = async() => {
    setOpen(true);
    const result = await editResumeAPI(resumeId)
    setResumeDetails(result.data)

    
  }
const updateResume=async()=>{
  const result=await updateResumeAPI(resumeId,resumeDetails)
  console.log(result);
  onUpdate(result.data)
handleClose()
  
}


  return (
    <div>
      <Button onClick={handleOpen} className='fs-3' ><FaEdit /></Button> 
      <Modal className="text-center w-50"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
         
               
        <Paper sx={style} className='mx-5 text-center p-3 mb-5' elevation={7} >
          <Typography className='text-secondary text-center' variant="h6" component="h2">
            EDIT DETAILS
          </Typography>
                  <Typography className='text-secondary' variant="h6" component="h2">
            <TextField value={resumeDetails.personalData.name} onChange={(e) => setResumeDetails({ ...resumeDetails, personalData: { ...resumeDetails.personalData,name:e.target.value}})}  className='w-100' id="standard-name"  label="name" variant="standard" />
                         
                  </Typography>
                  <Typography className='text-secondary ' variant="h6" component="h2">
            <TextField value={resumeDetails.personalData.job} onChange={(e) => setResumeDetails({ ...resumeDetails, personalData: { ...resumeDetails.personalData, job: e.target.value } })} className='w-100' id="standard-job" label="job" variant="standard" />
          
                  </Typography>
                  <Typography className='text-secondary' variant="h6" component="h2">
            <TextField value={resumeDetails.personalData.location} onChange={(e) => setResumeDetails({ ...resumeDetails, personalData: { ...resumeDetails.personalData, location: e.target.value } })} className='w-100 mb-4' id="standard-location" label="location" variant="standard" />
                  </Typography>
          <Divider className='mb-2'>CONTACT DETAILS</Divider>
                  <Typography className='text-secondary mb-1' variant="h6" component="h2">
            <TextField value={resumeDetails.personalData.email} onChange={(e) => setResumeDetails({ ...resumeDetails, personalData: {...resumeDetails.personalData, email: e.target.value } })} className='w-100' id="standard-mail" label="Email" variant="standard" />
                  </Typography>
          <Typography className='text-secondary mb-1' variant="h6" component="h2">
            <TextField value={resumeDetails.personalData.phone} onChange={(e) => setResumeDetails({ ...resumeDetails, personalData: {...resumeDetails.personalData, phone: e.target.value } })} className='w-100' id="standard-phone" label="Phone Number" variant="standard" />
  
          </Typography>
          <Typography className='text-secondary mb-1' variant="h6" component="h2">
            <TextField value={resumeDetails.personalData.github} onChange={(e) => setResumeDetails({ ...resumeDetails, personalData: {...resumeDetails.personalData, github: e.target.value } })} className='w-100' id="standard-github" label="github" variant="standard" />

          </Typography>
          <Typography className='text-secondary mb-1' variant="h6" component="h2">
            <TextField value={resumeDetails.personalData.linkedin} onChange={(e) => setResumeDetails({ ...resumeDetails, personalData: { ...resumeDetails.personalData, linkedin: e.target.value } })} className='w-100 mb-4' id="standard-linkedin" label="linkedin" variant="standard" />
  
          </Typography>
          <Typography className='text-secondary mb-1' variant="h6" component="h2">
            <TextField value={resumeDetails.personalData.Portfolio} onChange={(e) => setResumeDetails({ ...resumeDetails, personalData: { ...resumeDetails.personalData, Portfolio: e.target.value } })} className='w-100 mb-4' id="standard-portfolio" label="portfolio" variant="standard" />

          </Typography>
          <Divider className='mb-2'>EDUCATION</Divider>
          <Typography  className='text-secondary mb-1' variant="h6" component="h2">
            <TextField value={resumeDetails.Education.course} onChange={(e) => setResumeDetails({ ...resumeDetails, Education: { ...resumeDetails.Education, course: e.target.value } })} className='w-100' id="standard-Course" label="Course" variant="standard" />
       
          </Typography>
          <Typography className='text-secondary mb-1' variant="h6" component="h2">
            <TextField value={resumeDetails.Education.college} onChange={(e) => setResumeDetails({ ...resumeDetails, Education: { ...resumeDetails.Education, college: e.target.value } })} className='w-100' id="standard-College" label="College" variant="standard" />
     

          </Typography>
          <Typography className='text-secondary mb-1' variant="h6" component="h2">
            <TextField value={resumeDetails.Education.university} onChange={(e) => setResumeDetails({ ...resumeDetails, Education: { ...resumeDetails.Education, university: e.target.value } })} className='w-100'  id="standard-university" label="university" variant="standard" />
          </Typography>
          <Typography className='text-secondary mb-1' variant="h6" component="h2">
            <TextField value={resumeDetails.Education.passout} onChange={(e) => setResumeDetails({ ...resumeDetails, Education: { ...resumeDetails.Education, passout: e.target.value } })} className='w-100 mb-4' id="standard-passout" label="year of passout" variant="standard" />

          </Typography>
          <Divider className='mb-2'>EXPERIENCE</Divider>
          <Typography className='text-secondary mb-1' variant="h6" component="h2">
            <TextField value={resumeDetails.Experience.jobBefore} onChange={(e) => setResumeDetails({ ...resumeDetails, Experience: { ...resumeDetails.Experience, jobBefore: e.target.value } })} className='w-100' id="standard-mail" label="Job or internship" variant="standard" />
          

          </Typography>
          <Typography className='text-secondary mb-1' variant="h6" component="h2">
            <TextField value={resumeDetails.Experience.company} onChange={(e) => setResumeDetails({ ...resumeDetails, Experience: { ...resumeDetails.Experience, company: e.target.value } })} className='w-100' id="standard-phone" label="Company Name" variant="standard" />

          </Typography>
          <Typography className='text-secondary mb-1' variant="h6" component="h2">
            <TextField value={resumeDetails.Experience.compLocation} onChange={(e) => setResumeDetails({ ...resumeDetails, Experience: { ...resumeDetails.Experience, compLocation: e.target.value } })} className='w-100' id="standard-github" label="Company-Location" variant="standard" />

          </Typography>
          <Typography className='text-secondary mb-1' variant="h6" component="h2">
            <TextField value={resumeDetails.Experience.duration} onChange={(e) => setResumeDetails({ ...resumeDetails, Experience: { ...resumeDetails.Experience, duration: e.target.value } })} className='w-100 mb-4' id="standard-linkedin" label="Duration" variant="standard" />

          </Typography>
          <Divider className='mb-2'>SKILLS</Divider>
           <Stack className='mb-4'
                        direction="row"
                        spacing={1}
                        sx={{
                          flexWrap: 'wrap',
                          gap: 2,            // gives consistent space between items
                          justifyContent: 'flex-start',  // instead of space-evenly
                          margin: "10px 0"
                        }}
                      >
                        {resumeDetails.Skills.map(skill => (
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
                      </Stack>
                      
                  <Divider className='mb-2'>SUMMARY</Divider>
                  <Typography className='text-secondary' variant="h6" component="h2">
            <TextField value={resumeDetails.Summary.summaryData} onChange={(e) => setResumeDetails({ ...resumeDetails, Summary: { ...resumeDetails.Summary, summaryData: e.target.value } })} className='w-100' id="standard-summary" label="summary" variant="standard" />
                  </Typography>
                 
   <Box className='text-center'><Button onClick={updateResume} className='bg-success me-2 mt-2 w-25 align-center' variant="contained">UPDATE</Button>
            <Button onClick={handleClose} className='bg-danger mt-2 w-25 align-center' variant="contained">CANCEL</Button></Box>
                  
                </Paper>
      </Modal>
    </div>
  )
}

export default Edit
