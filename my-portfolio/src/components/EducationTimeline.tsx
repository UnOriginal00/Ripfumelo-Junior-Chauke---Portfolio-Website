import { educationEvents } from '../data/educationData'

const EducationTimeline = () => {
  return (
    <section className='mt-10 w-full' aria-labelledby='education-heading'>
      <h2 id='education-heading' className='font-bold text-4xl text-oceon-deep'>Education</h2>

      <div className='mt-8 overflow-x-auto px-4 pb-6'>
        <div className='relative mx-auto flex min-w-[720px] max-w-5xl justify-between pt-6'>
          <div className='absolute left-0 right-0 top-[2.1rem] h-1 bg-tropical-teal' aria-hidden='true' />

          {educationEvents.map((event) => (
            <article key={event.title} className='relative z-1 flex w-60 flex-col items-center px-4 pt-3 text-center'>
              <div className='peer h-5 w-5 cursor-pointer rounded-full border-4 border-white bg-oceon-deep shadow-md shadow-oceon-deep/25 transition duration-200 hover:scale-125 hover:bg-pumpkin-spice' />
              <p className='mt-3 text-sm font-bold text-oceon-deep'>{event.period}</p>
              <h3 className='mt-1 font-bold'>{event.title}</h3>
              <div className='mt-3 max-h-0 w-full overflow-hidden rounded-xl bg-white/90 px-3 opacity-0 shadow-md shadow-oceon-deep/10 transition-all duration-300 peer-hover:max-h-32 peer-hover:py-3 peer-hover:opacity-100'>
                <p className='text-sm font-medium text-oceon-deep'>{event.institution}</p>
                <p className='mt-1 text-sm text-oceon-deep'>{event.details}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EducationTimeline