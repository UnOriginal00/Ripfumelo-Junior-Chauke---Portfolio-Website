import React from 'react'
import Header from '../components/Header'
import Projects from '../components/Projects'
import Aboutme from '../components/Aboutme'

type Props = {}

const projectpage = (props: Props) => {
  return (
    <>
      <h2 className='mb-8 mt-8 font-bold text-4xl '>
        Projects
      </h2>
      <Projects/>
      <Aboutme/>
    </>
  )
}

export default projectpage