import React, { useEffect } from 'react'

const NewCar = () => {

  useEffect(() => {
    document.title = 'Drive | Home'
  }, [])

  return (
    <div>NewCar</div>
  )
}

export default NewCar