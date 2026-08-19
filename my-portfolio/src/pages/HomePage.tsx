import Projects from '../components/Projects'
import EducationTimeline from '../components/EducationTimeline'
import Skills from '../components/Skills'
import AboutSection from '../components/AboutSection'

const HomePage = () => {
  return (
    <div className='w-full'>
      <section id='projects' className='flex min-h-screen flex-col justify-center px-6 py-12'>
        <div className='mx-auto w-full max-w-5xl'>
          <h2 className='mb-8 mt-8 text-center font-bold text-4xl text-oceon-deep'>Projects</h2>
          <Projects />
        </div>
      </section>

      <section id='education' className='px-6 py-16'>
        <div className='mx-auto w-full max-w-5xl'>
          <EducationTimeline />
        </div>
      </section>

      <section id='skills' className='px-6 py-16'>
        <div className='mx-auto w-full max-w-5xl'>
          <Skills />
        </div>
      </section>

      <section id='about' className='px-6 py-16'>
        <div className='mx-auto w-full max-w-5xl'>
          <AboutSection />
        </div>
      </section>
    </div>
  )
}

export default HomePage
