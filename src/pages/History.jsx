import { Button, Divider, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { MdDelete } from "react-icons/md";
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import { deleteHistoryAPI, getHistoryAPI } from '../services/allAddedAPIs';

const suggestion = ['java', 'DotNet', 'React', 'Angular', 'Html', 'css']

const History = () => {
  const [historyData,setHistoryData]=useState([])

  const getHistory=async()=>{
const result=await getHistoryAPI()
setHistoryData(result.data)

  }
  
  const handleDelete=async(item)=>{
    const result=await deleteHistoryAPI(item)
    getHistory()
  }

//const result=historyData.map(item=>item.json())


useEffect(()=>{
getHistory()
},[])



  return (
    <div>
    <h1 className='text-center'>Downloaded History</h1>
      <div>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: 360,
            },
          }}
        >


        {historyData.length>0? (historyData.map((item)=>(<Paper key={item.id} className='mb-2 ms-5 text-center p-3' elevation={7} >
         
            <Typography className='text-secondary mb-5' variant="h6" component="h2">
            <Button onClick={()=>handleDelete(item.id)} sx={{ float: 'right' }}><MdDelete className='fs-4' /></Button>
            </Typography>
            <Typography key={item.id} className='text-secondary' variant="h6" component="h2">
            {item.personalData.name}
            </Typography>
            <Typography className='text-secondary ' variant="h6" component="h2">
              {item.personalData.job}
            </Typography>
            <Typography className='text-secondary' variant="h6" component="h2">
              {item.personalData.location}
            </Typography>
            <Typography className='text-secondary mb-1' variant="h6" component="h2">
              {item.personalData.github} ||   {item.personalData.linkedin} ||   {item.personalData.Portfolio}
            </Typography>
            <Divider className='mb-2'>Summary</Divider>
            <Typography className='text-secondary' variant="h6" component="h2">
             {item.Summary.summaryData}
            </Typography>
            <Divider className='mb-2'>Education</Divider>
            <Typography className='text-secondary' variant="h6" component="h2">
              {item.Education.course}
            </Typography>
            <Typography className='text-secondary mb-1' variant="h6" component="h2">
            {item.Education.college} ||  {item.Education.university} ||  {item.Education.passout}
            </Typography>
            <Divider className='mb-2'>Professional Experience</Divider>
            <Typography className='text-secondary' variant="h6" component="h2">
              {item.Experience.jobBefore}
            </Typography>
            <Typography className='text-secondary mb-1' variant="h6" component="h2">
            {item.Experience.company} ||  {item.Experience.compLocation} ||  {item.Experience.duration}
            </Typography>
            <Divider className='mb-2'>Skills</Divider>
            <Stack
              direction="row"
              spacing={1}
              sx={{
                flexWrap: 'wrap',
                gap: 2,            // gives consistent space between items
                justifyContent: 'flex-start',  // instead of space-evenly
                margin: "10px 0"
              }}
            >
              {item.Skills.map(skill => (
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

          </Paper>))):(<p>no history</p>)}
          
        </Box>
      </div>
    </div>
  )
}

export default History
