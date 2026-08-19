const Sidebar = () => {
  return (
    <aside className='group fixed left-4 top-1/2 z-10 -translate-y-1/2 overflow-hidden rounded-2xl border border-slate-300 bg-white shadow transition-all duration-200 w-14 hover:w-36'>
      <nav className='flex flex-col items-center gap-2 p-2' aria-label='Social links'>
        <a
          href='https://github.com/UnOriginal00'
          target='_blank'
          rel='noreferrer'
          className='flex h-10 w-full items-center gap-3 rounded-xl px-3 text-sm font-medium hover:bg-slate-100'
          aria-label='GitHub'
        >
          <svg className='h-5 w-5 shrink-0' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
            <path d='M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.18-1.11-1.5-1.11-1.5-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.8c.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.78c0 .27.18.58.69.48A10 10 0 0 0 12 2Z' />
          </svg>
          <span className='whitespace-nowrap opacity-0 transition-opacity group-hover:opacity-100'>GitHub</span>
        </a>

        <a
          href='https://www.linkedin.com/in/ripfumelo-junior-chauke-11584a33b/'
          target='_blank'
          rel='noreferrer'
          className='flex h-10 w-full items-center gap-3 rounded-xl px-3 text-sm font-medium hover:bg-slate-100'
          aria-label='LinkedIn'
        >
          <svg className='h-5 w-5 shrink-0' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
            <path d='M5.2 3.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.3 9.5h3.8V21H3.3V9.5Zm6.2 0h3.6v1.57h.05c.5-.95 1.72-1.95 3.54-1.95 3.79 0 4.49 2.5 4.49 5.75V21h-3.8v-5.44c0-1.3-.02-2.97-1.81-2.97-1.81 0-2.09 1.42-2.09 2.88V21H9.5V9.5Z' />
          </svg>
          <span className='whitespace-nowrap opacity-0 transition-opacity group-hover:opacity-100'>LinkedIn</span>
        </a>

        <a
          href='mailto:pfumichauke4@gmail.com'
          className='flex h-10 w-full items-center gap-3 rounded-xl px-3 text-sm font-medium hover:bg-slate-100'
          aria-label='Email'
        >
          <svg className='h-5 w-5 shrink-0' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' aria-hidden='true'>
            <path d='m3 5 9 7 9-7' />
            <rect x='3' y='5' width='18' height='14' rx='2' />
          </svg>
          <span className='whitespace-nowrap opacity-0 transition-opacity group-hover:opacity-100'>Email</span>
        </a>
      </nav>
    </aside>
  )
}

export default Sidebar