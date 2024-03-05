import React from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import ProfileCover from '../components/ProfileCover';
import SearchResult from '../components/SearchResult';

const Profile = () => {
    const pageName = 'profile';
	return (
		<div className="w-full">
			<Navbar />
			<ProfileCover />
			<SearchResult album={''} artist={''} page={pageName} loader={false}/>
			<Footer />
		</div>
	);
};

export default Profile;
