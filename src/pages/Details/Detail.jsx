import React,{ useContext } from 'react'
import StaticContext from '../../context/StaticContext'

export default function Detail ({params}) {
    const context = useContext(StaticContext)
    console.log(context)
    return (
    <div><h1>Gif con el id {params.id}</h1></div>
  )
}