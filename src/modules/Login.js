import React, {useState, useEffect} from 'react'
import { ReactTyped } from 'react-typed';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import axios from 'axios';
import axiosPayload from '../helpers/AxiosPayload'

const Login = () => {

  const [loginUrl, setLoginUrl] = useState(null);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`${process.env.REACT_APP_API_URL}/google/redirect`, axiosPayload())
        .then(response => {
          if (response.status === 200) {
              return response?.data;
          }
          throw new Error('Something went wrong!');
        })
        .then((data) => setLoginUrl(data?.url))
        .catch((error) => console.error(error));
    };
    fetchData();
  }, []);

  const handleOnclick = (e) => {
    setIsButtonClicked(true);
  }
  return (
    <div className='text-dark'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>
          GROWING WITH MUSIC
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Music Discovery.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Search, stream for
          </p>
          <ReactTyped
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['ARTISTS', 'ALBUMS']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your music preferences and stay tune with upcoming releases.</p>
        <Link to={loginUrl != null ? loginUrl : '#'}>
          <button type="button" disabled={loginUrl != null ? false : !isButtonClicked}
            onClick={ (e) => handleOnclick(e)}
            className="text-black bg-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mb-2 border mx-auto flex justify-center my-5 shadow-xl">
            <FcGoogle size={20} /> &nbsp; &nbsp; Connect in with Google
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Login