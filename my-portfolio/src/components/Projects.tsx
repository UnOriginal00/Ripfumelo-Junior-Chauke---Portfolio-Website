import React from 'react'
import Projectcard from './Projectcard'
import { projects } from '../data/projectsData'

type Props = {}

const Projects = (props: Props) => {
  return (
    <div className='flex mx-auto max-w-6xl'>
            {projects.map((project) => (
                <Projectcard project={project} />
            ))}
    </div>
  )
}

export default Projects