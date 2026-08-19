import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { projects, type Project } from '../data/projectsData'

type Props = {

  project:Project

}

const Projectcard = ({project}: Props) => {
  return (
    <Link to={`/projects/${project.slug}`} className='flex flex-col 
                    border-2 rounded 
                    min-h-50
                  border-fresh-sky 
                    shadow 
                    hover:scale-103 hover:cursor-pointer 
                    transition 
                    duration-100'>
        <div className='mt-auto'>
          <img src={project.image}/>
          <h2 className=''>{project.title}</h2>
          <p className=''>{project.shortDescription}</p>
        </div>
    </Link>
  )
}

export default Projectcard;