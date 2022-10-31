import React, { useEffect } from 'react'

const Customers = () => {

  useEffect(() => {
    document.title = 'Drive | Home'
  }, [])

  return (
    <div>Customers</div>
  )
}

export default Customers