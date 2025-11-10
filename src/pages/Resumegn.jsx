import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { FaFileAlt } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";

const Resumegn = () => {
  return (
    <div>
      <div className='row w-100 vh-100 p-5 bg-secondary'>
      
    <div className='col-6 mt-5 '>
            <div className='mt-5 border shadow p-5 text-center vh-50 bg-white ms-5'>
            <FaFileAlt className='fs-3' />
            <p className='text-secondary fs-5 mt-2'>the view of downloaded file</p>
    <Button className='bg-info' type="submit" variant='contained'>Here is your File</Button>
            <p className='text-secondary fs-6 mt-2'>Step 1</p>
  </div>
    </div>
        <div className='col-6 mt-5 my-4'>
          <div className='mt-5 border shadow p-5 text-center vh-50 bg-white me-5'>
            <FaFileDownload className='fs-3' />
            <p className='text-secondary fs-5 mt-2'>if you want to create a resume click here</p>
            <Link to={'/Form'}><Button className='bg-danger' type="submit" variant='contained'>Create Your Resume</Button></Link>
            <p className='text-secondary fs-6 mt-2'>Step 2</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resumegn
