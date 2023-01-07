import { Percent } from '@mui/icons-material';
import React from 'react'
import { useState } from 'react'

const Progress = ({ percentage }) => {
  const [progress, setProgress] = useState({});

  setTimeout(() => {
    const newprogress = {
      width: `${percentage}%`
    }

    setProgress(newprogress)
  }, 1000)


  return (
    <main className='w-full h-10 bg-[#e7f9ea] rounded-md overflow-hidden relative transition duration-75'>
      <div className="bg-[#08c127] h-full w-0 rounded-md" style={progress}>

      </div>
      <span className='absolute top-2/4 -translate-y-2/4 right-4 font-bold text-md font-["Quicksand", sans-sarif] text-[#082a0f]'>
        {percentage}%
      </span>
    </main>
  )
}

export default Progress
