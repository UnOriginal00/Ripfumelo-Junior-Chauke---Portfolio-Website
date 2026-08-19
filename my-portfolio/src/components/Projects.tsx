import React from 'react'
import Projectcard from './Projectcard'
import { projects } from '../data/projectsData'

type Props = {}

const Projects = (props: Props) => {
  return (

    <div className='flex flex-col w-full text-center'>
        <div className='grid w-full grid-cols-3 gap-5 mx-auto max-w-6xl'>

            {projects.map((project) => (
                <Projectcard key={project.id} project={project} />
                ))}
        </div>
    </div>

  )
}

export default Projects