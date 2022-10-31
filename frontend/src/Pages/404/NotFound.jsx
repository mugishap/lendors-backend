import React, { useEffect } from 'react'

const NotFound = () => {

  useEffect(() => {
    document.title = 'Drive | Home'
  }, [])

  return (
    <div>NotFound</div>
  )
}

export default NotFound