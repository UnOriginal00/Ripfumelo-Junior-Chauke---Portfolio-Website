import { educationEvents } from '../data/educationData'

const EducationTimeline = () => {
  return (
    <section className='mt-10 w-full' aria-labelledby='education-heading'>
      <div className='flex items-end justify-between gap-6 border-b border-tropical-teal/30 pb-5'>
        <div>
          <h2 id='education-heading' className='font-bold text-4xl text-oceon-deep'>Education</h2>
          <p className='mt-3 max-w-xl leading-7 text-oceon-deep/70'>A few milestones that shaped how I learn, build, and think.</p>
        </div>
        <span className='hidden pb-1 text-sm font-bold text-oceon-deep/50 sm:block'>01 - 03</span>
      </div>

      <div className='mt-10 overflow-x-auto px-4 pb-6'>
        <div className='relative mx-auto flex min-w-[820px] max-w-5xl justify-between pt-8'>
          <div className='absolute left-0 right-0 top-[3.05rem] h-1 rounded-full bg-gradient-to-r from-fresh-sky via-tropical-teal to-pumpkin-spice' aria-hidden='true' />

          {educationEvents.map((event, index) => (
            <article key={event.title} className='relative z-1 flex w-64 flex-col items-center px-4 text-center'>
              <button type='button' className='peer relative z-10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-4 border-white bg-oceon-deep text-sm font-bold text-white shadow-lg shadow-oceon-deep/25 ring-8 ring-school-bus-yellow/20 transition duration-300 hover:scale-110 hover:bg-pumpkin-spice focus:outline-none focus:ring-8 focus:ring-school-bus-yellow/50' aria-label={`Show details for ${event.title}`}>
                {String(index + 1).padStart(2, '0')}
              </button>
              <p className='mt-5 rounded-full bg-school-bus-yellow/25 px-3 py-1 text-xs font-bold uppercase tracking-wider text-oceon-deep'>{event.period}</p>
              <h3 className='mt-3 text-xl font-bold text-oceon-deep'>{event.title}</h3>
              <p className='mt-1 text-sm font-medium text-oceon-deep/65'>{event.institution}</p>
              <div className='mt-4 max-h-0 w-full overflow-hidden rounded-2xl bg-white/90 px-4 opacity-0 shadow-lg shadow-oceon-deep/10 transition-all duration-300 peer-hover:max-h-96 peer-hover:py-4 peer-hover:opacity-100 peer-focus:max-h-96 peer-focus:py-4 peer-focus:opacity-100'>
                <p className='text-sm leading-6 text-oceon-deep/80'>{event.details}</p>
                <ul className='mt-3 space-y-1 text-left text-xs text-oceon-deep/75'>
                  {event.highlights.map((highlight) => (
                    <li key={highlight} className='flex gap-2'>
                      <span className='text-fresh-sky' aria-hidden='true'>+</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EducationTimeline