import Projectcard from './Projectcard'
import { projects } from '../data/projectsData'

const Projects = () => {
  return (

    <div className='flex flex-col w-full text-center'>
        <div className='grid w-full grid-cols-3 gap-6 mx-auto max-w-5xl'>

            {projects.map((project, index) => (
                <div key={project.id} className={`section-reveal [animation-delay:${index * 120}ms]`}>
                  <Projectcard project={project} />
                </div>
                ))}
        </div>
    </div>

  )
}

export default Projects