import React, { useEffect } from 'react'

const Customer = () => {

  useEffect(() => {
    document.title = 'Drive | Home'
  }, [])

  return (
    <div>Customer</div>
  )
}

export default Customer