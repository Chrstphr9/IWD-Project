import React, { useContext, useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    

    const navigate = useNavigate();

    const {dispatch} = useContext(AuthContext)

    
    const handleLogin = (e)=> {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        
        // Signed up 
        const user = userCredential.user;  
        dispatch({type:"LOGIN", payload:user})
        navigate("/")
        // ...
      })
      .catch((error) => {
        setError(true)
        // ..
      });
    }

  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Enetr Your Email" className="input input-bordered" required onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Enter Your Password" className="input input-bordered" required onChange={e => setPassword(e.target.value)} />
          <label className="label">
            <Link to="/forgot-password" className="label-text-alt link link-hover">Forgot password?</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">Login</button>
          {error && <p className="text-red-500">Something went wrong</p>}
        </div>
        <div className="text-center mt-4">
          <p className="text-sm">
            Don't have an account? <Link to="/signup" className="link link-hover">Sign up here</Link>.
          </p>
        </div>
      </form>
    </div>
  </div>
</div>

  )
}

export default Login