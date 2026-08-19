import Projects from '../components/Projects'
import EducationTimeline from '../components/EducationTimeline'
import Skills from '../components/Skills'
import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'

const HomePage = () => {
  return (
    <div className='w-full'>
      <section id='projects' className='flex min-h-screen flex-col justify-center px-6 py-12'>
        <div className='mx-auto w-full max-w-5xl lg:pl-24'>
          <div className='section-reveal mb-8 border-b border-tropical-teal/30 pb-5'>
            <h1 className='text-5xl text-oceon-deep md:text-6xl'>Projects</h1>
          </div>
          <Projects />
          <p className='mt-10 text-center text-lg font-bold tracking-wide text-oceon-deep'>More projects are on the way<span className='ml-2 text-2xl text-fresh-sky' aria-hidden='true'>+</span></p>
          <div className='mt-6 flex justify-end text-sm'>
            <a href='#education' className='font-bold text-oceon-deep transition hover:text-pumpkin-spice'>Continue exploring <span aria-hidden='true'>↓</span></a>
          </div>
        </div>
      </section>

      <section id='education' className='px-6 py-16'>
        <div className='mx-auto w-full max-w-5xl lg:pl-24'>
          <p className='text-sm font-bold uppercase tracking-[0.2em] text-pumpkin-spice'>The path so far</p>
          <EducationTimeline />
        </div>
      </section>

      <section id='skills' className='px-6 py-16'>
        <div className='mx-auto w-full max-w-5xl lg:pl-24'>
          <p className='text-sm font-bold uppercase tracking-[0.2em] text-pumpkin-spice'>What I work with</p>
          <Skills />
        </div>
      </section>

      <section id='about' className='px-6 py-16'>
        <div className='mx-auto w-full max-w-5xl lg:pl-24'>
          <AboutSection />
        </div>
      </section>

      <section id='contact' className='px-6 pb-10 pt-4'>
        <div className='mx-auto w-full max-w-5xl lg:pl-24'>
          <ContactSection />
          <footer className='flex flex-col gap-2 py-8 text-sm text-oceon-deep/60 sm:flex-row sm:items-center sm:justify-between'>
            <span>Ripfumelo Junior Chauke</span>
          </footer>
        </div>
      </section>
    </div>
  )
}

export default HomePage
