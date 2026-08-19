import React from 'react'

type EducationEvent = {
  period: string
  title: string
  institution: string
  details: string
}

const educationEvents: EducationEvent[] = [
  {
    period: '2024',
    title: 'Matric',
    institution: 'High school',
    details: 'Completed secondary school and built a strong foundation for further study.',
  },
  {
    period: '2025 - Present',
    title: 'BSc Computer Science',
    institution: 'University studies',
    details: 'Studying programming, software development, data structures, and computer systems.',
  },
  {
    period: 'Ongoing',
    title: 'Independent learning',
    institution: 'Personal projects',
    details: 'Applying new skills by building projects and exploring modern web technologies.',
  },
]

const EducationTimeline = () => {
  return (
    <section className='mt-10 w-full' aria-labelledby='education-heading'>
      <h2 id='education-heading' className='font-bold text-4xl'>Education</h2>

      <div className='mt-8 overflow-x-auto px-4 pb-6'>
        <div className='relative mx-auto flex min-w-[720px] max-w-5xl justify-between pt-6'>
          <div className='absolute left-0 right-0 top-[2.1rem] h-1 bg-fresh-sky' aria-hidden='true' />

          {educationEvents.map((event) => (
            <article key={event.title} className='group relative z-1 flex w-52 flex-col items-center text-center'>
              <div className='h-5 w-5 rounded-full border-4 border-white bg-oceon-deep shadow transition duration-200 group-hover:scale-125 group-hover:bg-pumpkin-spice' />
              <p className='mt-3 text-sm font-bold text-oceon-deep'>{event.period}</p>
              <h3 className='mt-1 font-bold'>{event.title}</h3>
              <div className='mt-2 max-h-0 overflow-hidden opacity-0 transition-all duration-200 group-hover:max-h-32 group-hover:opacity-100'>
                <p className='text-sm font-medium text-slate-600'>{event.institution}</p>
                <p className='mt-1 text-sm text-slate-600'>{event.details}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EducationTimeline