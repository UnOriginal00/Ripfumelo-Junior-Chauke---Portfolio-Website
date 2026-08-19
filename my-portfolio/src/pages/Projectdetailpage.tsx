import React from 'react'
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
    <div className='p-8'>
      <Link to='/'>Back to projects</Link>
      <h1 className='mt-4 text-4xl font-bold'>{project.title}</h1>
      <img className='mt-4 max-w-2xl' src={project.image} alt={project.title} />
      <p className='mt-4 max-w-2xl'>{project.description}</p>
      <a className='mt-4 inline-block' href={project.githubUrl} target='_blank' rel='noreferrer'>
        View on GitHub
      </a>
    </div>
  )
}

export default Projectdetailpage
