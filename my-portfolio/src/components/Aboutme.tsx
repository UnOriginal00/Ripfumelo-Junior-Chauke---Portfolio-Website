import React from 'react'
import EducationTimeline from './EducationTimeline'
import Skills from './Skills'

type Props = {}

const Aboutme = (props: Props) => {
  return (
    <div className='mt-10'>
        <EducationTimeline/>
      <Skills/>

        <h2 className='font-bold text-4xl'>About me</h2>
        <div className='flex'>
            <p>
              Hello
            </p>
            <img src=''/>
        </div>
    </div>
  )
}

export default Aboutme