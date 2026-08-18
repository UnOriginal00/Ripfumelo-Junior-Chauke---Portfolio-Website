import React from 'react'
import { projects, type Project } from '../data/projectsData'

type Props = {

  project:Project

}

const Projectcard = ({project}: Props) => {
  return (
    <div className='flex border'>
        <h2>{project.title}</h2>
        <p>{project.shortDescription}</p>
        <img src={project.image}/>
    </div>
  )
}

export default Projectcard;