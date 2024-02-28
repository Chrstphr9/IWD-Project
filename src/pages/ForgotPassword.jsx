import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { sendPasswordResetEmail, AuthErrorCodes } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent!");
      navigate('/login');
    } catch (error) {
      console.error("Error sending password reset email:", error);
      // Check for the specific error code for email not found
      if (error.code === AuthErrorCodes.USER_NOT_FOUND) {
        setError("Email not found. Please check your email and try again.");
      } else {
        setError("Error sending password reset email. Please try again.");
      }
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        console.log("User signed in:", user);
      } else {
        // User is signed out.
        console.log("User signed out");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Forgot Password</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. </p>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="input input-bordered"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary mt-6">
              Reset
            </button>
          </div>
          {error && <p className="text-error">{error}</p>}
        </div>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;