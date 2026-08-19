const Header = () => {
  return (
    <div className='sticky top-0 z-20 border-t-2 border-fresh-sky border-b border-tropical-teal/20 bg-white/90 shadow-sm backdrop-blur'>
      <div className='mx-auto flex min-h-16 w-full max-w-5xl items-center justify-between px-6 py-2 lg:pl-24 lg:pr-0'>
        <div>
          <h1 className='text-lg font-bold tracking-tight text-oceon-deep'>
            Ripfumelo Junior Chauke
          </h1>
          <p className='mt-0.5 text-xs font-semibold tracking-wide text-fresh-sky'>Software Developer · Full-Stack</p>
        </div>
        <span className='text-xs font-bold uppercase tracking-[0.2em] text-oceon-deep/50'>Portfolio</span>
      </div>
    </div>
  )
}

export default Header