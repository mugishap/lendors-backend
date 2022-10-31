import React, { useEffect } from 'react'

const Car = () => {

  useEffect(() => {
    document.title = 'Drive | Home'
  }, [])

  return (
    <div>Car</div>
  )
}

export default Car