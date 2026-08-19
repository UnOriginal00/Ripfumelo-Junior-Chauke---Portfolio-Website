import { ArrowUpRight, Mail } from 'lucide-react'

const ContactSection = () => {
  return (
    <section aria-labelledby='contact-heading' className='rounded-[2rem] bg-oceon-deep px-7 py-10 text-white shadow-xl shadow-oceon-deep/20 md:px-10'>
      <div className='flex flex-col justify-between gap-8 md:flex-row md:items-end'>
        <div>
          <p className='text-sm font-bold uppercase tracking-[0.2em] text-fresh-sky'>Open to opportunities</p>
          <h2 id='contact-heading' className='mt-3 max-w-xl text-4xl leading-tight'>Let's connect!</h2>
          <p className='mt-4 max-w-lg leading-7 text-white/75'>I am ready to build collaborative, innovative, and effective software with a team that values thoughtful solutions.</p>
        </div>
        <a href='mailto:pfumichauke4@gmail.com' className='inline-flex shrink-0 items-center gap-3 rounded-xl bg-white px-5 py-3 font-bold text-oceon-deep transition hover:-translate-y-1 hover:bg-school-bus-yellow'>
          <Mail size={18} aria-hidden='true' />
          Get in touch
          <ArrowUpRight size={18} aria-hidden='true' />
        </a>
      </div>
    </section>
  )
}

export default ContactSection