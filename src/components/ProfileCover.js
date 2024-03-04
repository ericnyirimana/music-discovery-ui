import React from 'react';
import { RxAvatar } from 'react-icons/rx';

const ProfileCover = () => {
    const userName = window.localStorage.getItem('username');
	return (
		<>
			<div className="w-full py-6 text-white px-4 bg-black">
				<div className="max-w-[1240px] mx-auto text-center flex flex-between">
					<div className="lg:col-span-2 my-4">
						<RxAvatar size={200} />
						<h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
							{userName}
						</h1>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProfileCover;
