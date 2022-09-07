import React from 'react'

const index = ({params}) => {
    console.log(params)
    return (
    <div><h1>Gif con el id {params.id}</h1></div>
  )
}

export default index