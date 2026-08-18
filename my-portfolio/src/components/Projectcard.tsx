import React from 'react'

type Props = {

  title: string
  shortDescription : string
  image: string

}

const Projectcard = (props: Props) => {
  return (
    <div>
        <h2>{props.title}</h2>
        <p>{props.shortDescription}</p>
    </div>
  )
}

export default Projectcard;