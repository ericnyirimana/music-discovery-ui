import React, { useState } from 'react';
import SearchResult from './SearchResult';
import axios from 'axios';
import axiosPayload from '../helpers/AxiosPayload';

const Search = () => {
	const [artistData, setArtistData] = useState({});
	const [albumData, setAlbumData] = useState({});
	const searchData = (artistOrAlbum, inputData) => {
		axios
			.get(
				`https://ws.audioscrobbler.com/2.0/?method=${artistOrAlbum}.search&${artistOrAlbum}=${inputData}&api_key=${process.env.REACT_APP_LAST_FM_API_KEY}&format=json&limit=8`,
				axiosPayload
			)
			.then((response) => {
				return response;
			})
			.then((data) =>
				artistOrAlbum === 'artist' ? setArtistData(data) : setAlbumData(data)
			)
			.catch((error) => {setArtistData({}); setAlbumData({}); console.error(error)});
	};

	const handleInput = (e) => {
    e.preventDefault();
		const value = e.target.value;
		searchData('artist', value);
		searchData('album', value);
	};

	return (
		<>
			<div className="w-full py-16 text-white px-4 bg-black">
				<div className="max-w-[1240px] mx-auto text-center flex flex-col justify-center">
					<div className="lg:col-span-2 my-4">
						<h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
							Search for your favorite Artists and Albums
						</h1>
						<p>Like and save your favorites.</p>
					</div>
					<div className="my-4">
						<div className="flex flex-col sm:flex-row items-center justify-center w-full">
							<input
								className="w-[600px] p-3 flex text-black rounded-full border-2 border-[#00df9a]"
								type="email"
								placeholder="Type and Search for artists or albums"
                onInput={handleInput}
							/>
						</div>
					</div>
				</div>
			</div>
			<SearchResult album={albumData} artist={artistData} />
		</>
	);
};

export default Search;
