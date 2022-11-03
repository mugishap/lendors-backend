import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import AdminProvider from './Context/AdminContext'
import AuthProvider from './Context/AuthContext'
import CarProvider from './Context/CarContext'
import CustomerProvider from './Context/CustomerContext'
import './index.css'
import { store } from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <AdminProvider>
          <CarProvider>
            <CustomerProvider>
              <App />
            </CustomerProvider>
          </CarProvider>
        </AdminProvider>
      </AuthProvider>
    </Provider>
  </React.StrictMode>
)
