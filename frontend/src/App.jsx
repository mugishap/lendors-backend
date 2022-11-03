import React from 'react'
import Pages from './Pages'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <div>
      <ToastContainer
        autoClose={5000}
        hideProgressBar={true}
        theme='colored'
        pauseOnHover={true}
        position={'top-center'}
      />
      <Pages />
    </div>
  )
}

export default App