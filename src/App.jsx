import React from 'react'
import Login from './pages/Login'
import SIgnUp from './pages/SIgnUp'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

const App = () => {

  const currentUser = true;

  const RequireAuth = ({children}) => {
    return currentUser ? (children) : <Navigate to="/login"/>
  };

  
  return (
    // <div>
    // <Login />
    
    // {/* <Home /> */}
    // </div>
    // <div>
    //   <Router>
    //     <Routes>
    //       <Route path='/'>
    //       <Route index element={<Home />} />
    //       <Route path='login' element={<Login />} />
    //       </Route>
    //     </Routes>
    //   </Router>
    // </div>
    <div>
      <Router>
        <Routes>
          <Route path='/'>
          <Route path='login' element={<Login />} />
        <Route index element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        } />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App