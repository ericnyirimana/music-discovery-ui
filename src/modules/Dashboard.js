import React from 'react'
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import Search from '../components/Search';
import SearchResult from '../components/SearchResult';

const Dashboard = () => {
  return (
    <div className='w-full'>
        <Navbar />
        <Search />
        <Footer />
    </div>
  )
}

export default Dashboard