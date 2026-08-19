const AboutSection = () => {
  return (
    <section aria-labelledby='about-heading'>
      <p className='text-sm font-bold uppercase tracking-[0.2em] text-pumpkin-spice'>A little context</p>
      <h2 id='about-heading' className='mt-2 font-bold text-4xl text-oceon-deep'>About me</h2>
      <div className='mt-6 max-w-3xl text-lg leading-8 text-oceon-deep/80'>
        <img
          className='float-right mb-4 ml-8 h-44 w-44 rounded-full object-cover shadow-xl shadow-oceon-deep/20 ring-4 ring-fresh-sky/25'
          src='/images/portrait/portrait%20picture.jpg'
          alt='Portrait of Ripfumelo Junior Chauke'
        />
        <p>
          Hello, I am a computer science student who enjoys learning by building practical projects and turning ideas into clear, useful experiences. I like exploring the space where thoughtful design meets reliable software, and I am always looking for a new problem to understand and improve.
        </p>
      </div>
    </section>
  )
}

export default AboutSection
