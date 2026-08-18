import React from 'react'
import Projectcard from '../components/Projectcard'
import Header from '../components/header'

type Props = {}

const projectpage = (props: Props) => {
  return (
    <>

      <Header/>

      <Projectcard 
        title="HackJam" 
        shortDescription="Hello"
        image=''/>
      </>
  )
}

export default projectpage