import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Car = () => {
  const { carId } = useParams()

  const getCar = async () => {
    const car = await fetch(`http://localhost:3001/car/${carId}`)
  }

  useEffect(() => {
    getCar()
  }, [carId])


  useEffect(() => {
    document.title = ' | Home'
  }, [])

  return (
    <div>Car</div>
  )
}

export default Car