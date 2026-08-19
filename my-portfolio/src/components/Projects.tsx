import React from 'react'
import Projectcard from './Projectcard'
import { projects } from '../data/projectsData'

type Props = {}

const Projects = (props: Props) => {
  return (

    <div className='flex flex-col items-center justify-center min-h-screen w-full text-center'>

      <h2 className='mb-8 mt-8 font-bold text-4xl '>
        Projects
      </h2>

      <div className='grid grid-cols-3 grid-rows-3 gap-5 mx-auto max-w-6xl'>

        {projects.map((project) => (
                <Projectcard key={project.id} project={project} />
            ))}
        </div>
    </div>

  )
}

export default Projects