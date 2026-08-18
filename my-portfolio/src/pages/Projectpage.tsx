import React from 'react'
import Header from '../components/Header'
import Projects from '../components/Projects'

type Props = {}

const projectpage = (props: Props) => {
  return (
    <>
      <Header/>

      <main>
        <Projects/>
      </main>

      
    </>
  )
}

export default projectpage