import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalRoutes } from '../journal/routes/JournalRoutes'



export const AppRouter = () => {
     return (
          
          
          < Routes >

                    {/* Login y registro */}
               <Route paht = "/auth/*" element = { < AuthRoutes /> } />       {/*Cualquier pagina entre de auth...  */}

               

                    {/* JournalApp */}
               <Route paht = "/*" element = { < JournalRoutes /> } />

          
          </Routes>
    

  
    )
}
