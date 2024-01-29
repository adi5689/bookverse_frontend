import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const SignOut = () => {
  const {SignOut} = useContext(AuthContext); 

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSignout = () => {
    SignOut().then(() => {
      alert("Sign Out Successful!");
      navigate(from, {replace: true});
    }).catch((error) => {

    })
  }

  const handleBack = () => {
    // Navigate back to /admin/dashboard
    navigate('/admin/dashboard');
  };
  return (
    <div className='h-screen bg-black flex-col flex items-center justify-center'>
      <p className='text-[#fffc4c] p-20'>Are you sure you want to sign out?</p>
      <div className='flex justify-between gap-5'>
      <button onClick={handleSignout} className='bg-red-700 px-2 py-2 rounded-md'>Sign Out</button>
      <button onClick={handleBack} className='bg-[#fffc4c] text-black px-2 py-2 rounded-md'>Back</button>
      </div>
      
    </div>
  )
}

export default SignOut;