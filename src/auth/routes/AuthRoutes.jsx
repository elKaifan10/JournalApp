import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage, RegistrerPage } from '../pages'

export const AuthRoutes = () => {
     
     return (

          <Routes>

               < Route path = "login" element = { < LoginPage /> } />
               < Route path = "register" element = { < RegistrerPage /> } />
                              
               < Route path = '/*' element = { < Navigate to = '/auth/login' /> } />         {/* Cualquier otra ruta apuntara al login */} 
               

          </Routes>
          
     )
}
