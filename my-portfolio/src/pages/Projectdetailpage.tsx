import { Link, Navigate, useParams } from 'react-router-dom'
import { projects } from '../data/projectsData'

type Props = {}
//This page is responsible for displaying the extended data of the projects from Projectcard
const Projectdetailpage = (props: Props) => {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return <Navigate to='/' replace />
  }

  return (
    <main className='mx-auto max-w-6xl px-6 py-10 lg:py-12'>
      <Link to='/' className='text-sm font-bold text-oceon-deep hover:text-pumpkin-spice'>
        Back to projects
      </Link>

      <h1 className='mt-5 text-4xl font-bold text-oceon-deep'>{project.title}</h1>

      <div className='mt-6 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start'>
        <section className='grid grid-cols-2 gap-3' aria-label={`${project.title} images`}>
          <img className='col-span-2 aspect-[16/9] w-full rounded border-2 border-fresh-sky object-cover' src={project.gallery[0]} alt={`${project.title} main screenshot`} />
          {project.gallery.slice(1, 3).map((image, index) => (
            <img key={image} className='aspect-[4/3] w-full rounded border-2 border-tropical-teal object-cover' src={image} alt={`${project.title} screenshot ${index + 2}`} />
          ))}
        </section>

        <section className='pt-2 lg:pt-1'>
          <h2 className='text-2xl font-bold text-oceon-deep'>Description</h2>
          <p className='mt-4 max-w-2xl leading-8'>{project.description}</p>

          <h2 className='mt-10 text-2xl font-bold text-oceon-deep'>Tech stack</h2>
          <ul className='mt-3 flex flex-wrap gap-2'>
            {project.techStack.map((technology) => (
              <li key={technology} className='rounded-full bg-fresh-sky px-3 py-1 text-sm font-medium text-white'>
                {technology}
              </li>
            ))}
          </ul>

          <a className='mt-10 inline-block rounded-lg bg-oceon-deep px-5 py-3 font-bold text-white shadow-md shadow-oceon-deep/20 transition hover:-translate-y-0.5 hover:bg-pumpkin-spice hover:shadow-lg' href={project.githubUrl} target='_blank' rel='noreferrer'>
            View on GitHub
          </a>
        </section>
      </div>
    </main>
  )
}

export default Projectdetailpage
