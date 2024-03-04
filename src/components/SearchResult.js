import React, { useEffect, useState } from 'react';
import { numberFormatWithCommas } from '../helpers/NumberFormat';
import { IoHeartCircle } from 'react-icons/io5';
import { ALBUMS, ARTISTS } from '../helpers/Constant';
import axios from 'axios';
import axiosPayload from '../helpers/AxiosPayload';
import { errorMessage, successMessage } from '../helpers/Toast';
import { Toaster } from 'react-hot-toast';
import { Bars } from 'react-loader-spinner';

const SearchResult = ({ artist, album, page, loader }) => {
	const [artistData, setArtistData] = useState({});
	const [albumData, setAlbumData] = useState({});
	const [isLoading, setLoader] = useState(false);
	// if(page === 'dashboard'){
	// 	setArtistData(artist?.data?.results?.artistmatches?.artist);
	// 	setAlbumData(album?.data?.results?.albummatches?.album);
	// }
	// page = 'dashboard' ? setArtistData() :
	// const artistResult = artist?.data?.results?.artistmatches?.artist;
	// const albumResult = album?.data?.results?.albummatches?.album;
	const addToFavorites = (artistOrAlbum, inputData) => {
		axios
			.post(
				`${process.env.REACT_APP_API_URL}/${artistOrAlbum}`,
				inputData,
				axiosPayload()
			)
			.then((response) => {
				successMessage(response?.data?.message);
				return response;
			})
			.catch((error) => {
				errorMessage(error?.message);
				console.error(error);
			});
	};
	const removeToFavorites = (artistOrAlbum, inputData) => {
		axios
			.delete(
				`${process.env.REACT_APP_API_URL}/${artistOrAlbum}/${inputData}`,
				axiosPayload()
			)
			.then((response) => {
				successMessage(response?.data?.message);
				fetchFavoriteArtistAlbum(artistOrAlbum === ARTISTS ? ARTISTS : ALBUMS);
				return response;
			})
			.catch((error) => {
				errorMessage(error?.message);
				console.error(error);
			});
	};
	const fetchFavoriteArtistAlbum = (artistOrAlbum) => {
		setLoader(true);
		axios
			.get(`${process.env.REACT_APP_API_URL}/${artistOrAlbum}`, axiosPayload())
			.then((response) => {
				setLoader(false);
				artistOrAlbum === 'artists'
					? setArtistData(response?.data?.data)
					: setAlbumData(response?.data?.data);
				return response;
			})
			.catch((error) => {
				setLoader(false);
				console.error(error);
			});
	};
	useEffect(() => {
		if (page === 'dashboard') {
			setLoader(loader);
			setArtistData(artist?.data?.results?.artistmatches?.artist);
			setAlbumData(album?.data?.results?.albummatches?.album);
		} else {
			fetchFavoriteArtistAlbum(ARTISTS);
			fetchFavoriteArtistAlbum(ALBUMS);
		}
	}, [artist, album, page, loader]);
	return (
		<div className="w-full py-[1rem] px-4 bg-white">
			<h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-center flex flex-col justify-center">
				{page === 'dashboard' ? 'Artists' : 'Favorite Artists'}
			</h1>
			<div
				className={
					!artistData
						? 'max-w-[1240px] mx-auto py-10'
						: 'max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8 py-10'
				}
			>
				{artistData && artistData.length > 0 ? (
					artistData.map((eachArtist, index) => {
						return (
							<>
								<div
									className="w-full shadow-xl bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300"
									key={index}
								>
									<img
										className="w-20 mx-auto mt-[-3rem] bg-white rounded-full"
										src={
											page === 'dashboard'
												? eachArtist?.image[1]['#text']
												: eachArtist?.artist?.image[1]['#text']
										}
										alt="/"
									/>
									<h4 className="text-1xl font-bold text-center">
										{page === 'dashboard'
											? eachArtist?.name
											: eachArtist?.artist?.name}
									</h4>
									<div className="font-normal text-[13px] flex justify-between">
										<p className="py-2">
											{page === 'dashboard'
												? numberFormatWithCommas(eachArtist?.listeners)
												: numberFormatWithCommas(
														eachArtist?.artist?.stats?.listeners
												  )}{' '}
											Listeners
										</p>
										{
											<>
												{page === 'dashboard' ? (
													<button
														onClick={() =>
															addToFavorites(ARTISTS, {
																mbid: eachArtist?.mbid,
															})
														}
													>
														<IoHeartCircle size={30} />
													</button>
												) : (
													<>
														<button
															onClick={() =>
																removeToFavorites(
																	ARTISTS,
																	eachArtist?.artist?.mbid
																)
															}
														>
															<IoHeartCircle size={30} color="#00df9a" />
														</button>
														<Toaster />
													</>
												)}
											</>
										}
									</div>
								</div>
							</>
						);
					})
				) : (
					<>
						{!isLoading ? (
							<h1 className="text-2xl text-medium text-center">
								No artist found
							</h1>
						) : (
							<Bars
								height="60"
								width="60"
								color="#00df9a"
								ariaLabel="bars-loading"
								wrapperStyle={{}}
								wrapperClass="item-center flex justify-center col-span-4"
								visible={true}
							/>
						)}
					</>
				)}
			</div>
			<h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-center flex flex-col justify-center">
				{page === 'dashboard' ? 'Albums' : 'Favorite Albums'}
			</h1>
			<div
				className={
					!albumData
						? 'max-w-[1240px] mx-auto py-10'
						: 'max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8 py-10'
				}
			>
				{albumData && albumData.length > 0 ? (
					albumData.map((eachAlbum, index) => {
						return (
							<>
								<div
									className="w-full shadow-xl bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300"
									key={index}
								>
									<img
										className="w-full mx-auto"
										src={
											page === 'dashboard'
												? eachAlbum?.image[2]['#text']
												: eachAlbum?.album?.image[2]['#text']
										}
										alt="/"
									/>
									<h4 className="text-1xl font-bold text-center">
										{page === 'dashboard'
											? eachAlbum?.name
											: eachAlbum?.album?.name}
									</h4>
									<div className="font-normal text-[13px] text-center flex justify-between">
										<p className="py-2 mx-8">
											Artist:{' '}
											{page === 'dashboard'
												? eachAlbum?.artist
												: eachAlbum?.album?.artist}
										</p>

										{
											<>
												{page === 'dashboard' ? (
													<button
														onClick={() =>
															addToFavorites(ALBUMS, {
																mbid: eachAlbum?.mbid,
															})
														}
													>
														<IoHeartCircle size={30} />
													</button>
												) : (
													<>
														<button
															onClick={() =>
																removeToFavorites(ALBUMS, eachAlbum?.mbid)
															}
														>
															<IoHeartCircle size={30} color="#00df9a" />
														</button>
														<Toaster />
													</>
												)}
											</>
										}
									</div>
								</div>
							</>
						);
					})
				) : (
					<>
						{!isLoading ? (
							<h1 className="text-2xl text-medium text-center">
								No album found
							</h1>
						) : (
							<Bars
								height="60"
								width="60"
								color="#00df9a"
								ariaLabel="bars-loading"
								wrapperStyle={{}}
								wrapperClass="item-center flex justify-center col-span-4"
								visible={true}
							/>
						)}
					</>
				)}
			</div>
		</div>
	);
};

export default SearchResult;
