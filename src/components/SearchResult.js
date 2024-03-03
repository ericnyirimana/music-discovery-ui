import React from 'react';
import { numberFormatWithCommas } from '../helpers/NumberFormat';
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';

const SearchResult = ({ artist, album }) => {
	const artistResult = artist?.data?.results?.artistmatches?.artist;
	console.log('tttttt', artistResult);
	const albumResult = album?.data?.results?.albummatches?.album;
	return (
		<div className="w-full py-[1rem] px-4 bg-white">
			<h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-center flex flex-col justify-center">
				Artists
			</h1>
			<div
				className={
					!artistResult
						? 'max-w-[1240px] mx-auto py-20'
						: 'max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8 py-20'
				}
			>
				{artistResult && artistResult.length > 0 ? (
					artistResult.map((eachArtist, index) => {
						return (
							<>
								<div
									className="w-full shadow-xl bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300"
									key={index}
								>
									<img
										className="w-20 mx-auto mt-[-3rem] bg-white rounded-full"
										src={eachArtist?.image[1]['#text']}
										alt="/"
									/>
									<h4 className="text-1xl font-bold text-center">
										{eachArtist?.name}
									</h4>
									<div className="font-normal text-[13px] flex justify-between">
										<p className="py-2">
											{numberFormatWithCommas(eachArtist?.listeners)} Listeners
										</p>
										<IoMdHeartEmpty size={20} />
									</div>
								</div>
							</>
						);
					})
				) : (
					<h1 className="text-2xl text-medium text-center">No artist found</h1>
				)}
			</div>
			<h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-center flex flex-col justify-center">
				Albums
			</h1>
			<div
				className={
					!albumResult
						? 'max-w-[1240px] mx-auto py-20'
						: 'max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8 py-20'
				}
			>
				{albumResult && albumResult.length > 0 ? (
					albumResult.map((eachAlbum, index) => {
						return (
							<>
								<div
									className="w-full shadow-xl bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300"
									key={index}
								>
									<img
										className="w-full mx-auto"
										src={eachAlbum?.image[2]['#text']}
										alt="/"
									/>
									<h4 className="text-1xl font-bold text-center">
										{eachAlbum?.name}
									</h4>
									<div className="font-normal text-[13px] text-center flex justify-between">
										<p className="py-2 mx-8">Artist: {eachAlbum?.artist}</p>
										<IoMdHeartEmpty size={20} />
									</div>
								</div>
							</>
						);
					})
				) : (
					<h1 className="text-2xl text-medium text-center">No album found</h1>
				)}
			</div>
		</div>
	);
};

export default SearchResult;
