import React, { useContext } from 'react'
import Login from './pages/Login'
import SIgnUp from './pages/SIgnUp'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthContext } from './context/AuthContext'

const App = () => {

  const {currentUser} = useContext(AuthContext)

  

  

  const RequireAuth = ({children}) => {
    return currentUser ? (children) : <Navigate to="/login"/>
  };

  console.log(currentUser)

  
  return (
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