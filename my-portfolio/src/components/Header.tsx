import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='sticky top-0 z-20 flex justify-center border-b-4 border-school-bus-yellow bg-oceon-deep pb-4 pt-4 text-white shadow-lg shadow-oceon-deep/20'>  
      <h1 className='text-2xl'>
        Ripfumelo Junior Chauke
      </h1> 
    </div>
  )
}

export default Header