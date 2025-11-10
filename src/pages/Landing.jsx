import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div>
      <div className='row bg-secondary w-100 vh-100 p-5'>
<div className='col-4'></div>
<div className='col-4'>
          <div className='mt-5 border shadow p-5 text-center vh-20 bg-white'>
            <div className='mt-5 border shadow p-3 text-center vh-20 bg-white'>
    
            <p className='text-secondary fs-5'>if you want to create a resume click here</p>
  <Link to={'/resumeGenerate'}><Button className='bg-info' type="submit" variant='contained'>Make a Resume</Button></Link>
  </div>
  
          </div>
</div>
        <div className='col-4'></div>
      </div>
    </div>
  )
}

export default Landing
