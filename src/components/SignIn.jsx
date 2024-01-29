// SignIn.js
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBookBookmark } from "react-icons/fa6";
import { AuthContext } from "../context/AuthProvider";
import { useContext } from "react";

const SignIn = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleSignIn = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await signIn(email, password);
      alert("Sign In Successful!");
      navigate(from, { replace: true });
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      // alert("Invalid Email or Password!")
      setError(errorMessage);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative flex flex-col rounded-xl px-10 bg-transparent bg-clip-border text-white shadow-none">
          <Link
            to="/"
            className="text-2xl font-bold text-[#fffc4c] mb-5 items-center gap-2"
          >
            <FaBookBookmark className="inline-block" /> BooK
            <span className="text-white">VersE</span>
          </Link>
          <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Sign In
          </h4>
          <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-white antialiased">
            Enter your details to sign in.
          </p>
          <form
            onSubmit={handleSignIn}
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-4 flex flex-col gap-6">
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#fffc4c] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                  id="email"
                  name="email"
                  type="text"
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#fffc4c] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#fffc4c] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#fffc4c] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Email
                </label>
              </div>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  type="password"
                  className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#fffc4c] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                  id="password"
                  name="password"
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#fffc4c] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#fffc4c] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#fffc4c] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Password
                </label>
              </div>
            </div>
            <button
              className="mt-6 block w-full select-none rounded-lg bg-[#fffc4c] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-[#fffc4c]/20 transition-all hover:shadow-lg hover:shadow-[#fffc4c]/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="submit"
              data-ripple-light="true"
            >
              Sign In
            </button>
            {error ? <p className="text-red-600 pt-3">Email or Password is incorrect!</p>:" "}
            <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
              Don't have an account?{" "}
              <Link
                to="/sign-up"
                className="font-semibold text-[#fffc4c] transition-colors hover:text-blue-700"
              >
                Sign up
              </Link>
            </p>
            <br />
            <p className="text-center font-semibold">or</p>
            <br />
            <button
              className="mt-6 flex justify-center items-center gap-3 w-full select-none rounded-lg bg-[#c12727] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#ff2f2f]/20 transition-all hover:shadow-lg hover:shadow-[#ff2f2f]/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              onClick={signInWithGoogle}
              data-ripple-light="true"
            >
              <img
                src="https://i.postimg.cc/2yxwcjt7/pngaaa-com-1689978.png"
                alt="google"
                className="w-6"
              />
              Sign in with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
