import React from 'react'

const Home = () => {

  useEffect(() => {
    document.title = 'Drive | Home'
  }, [])

  return (
    <div>Home</div>
  )
}

export default Home