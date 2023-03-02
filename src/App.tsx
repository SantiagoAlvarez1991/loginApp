import './App.css'
import Login from './pages/Login/Login'
import ToDo from './pages/ToDo/ToDo'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider, useParams} from 'react-router-dom'
import RootLayout from './components/Layout/RootLayout'
import SingIn from './pages/SingIn/SingIn'
import UserLayout from './components/Layout/UserLayout'
import NotFound from './pages/NotFound/NotFound'
import Market, { productsLoader } from './pages/Market/Market'
import Profile from './pages/Profile/Profile'
import ProfileError from './pages/Profile/ProfileError'
import GlobalStyle from './globalStyles'

const routes = createBrowserRouter(
  
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Login />}/>      
      <Route path='singin' element={<SingIn />}/>
      <Route path='todo' element={<ToDo />}/>
        <Route 
          path='market' 
          element={<Market />}
          loader={productsLoader}
        />
      <Route path='bienvenido' element={<UserLayout />}>      
        {/* <Route path='todo' element={<ToDo />}/>
        <Route 
          path='market' 
          element={<Market />}
          loader={productsLoader}
        /> */}
        <Route 
          path=':userName' 
          element={<Profile />}        
          errorElement={<ProfileError />}
        />
      </Route>
      

      <Route path='*' element={<NotFound />}/>
    </Route>   
  )
)

function App() {

  
  
  return (
  <>    
    <RouterProvider router={routes}/>    
    <GlobalStyle/>
  </>
  )
}

export default App
