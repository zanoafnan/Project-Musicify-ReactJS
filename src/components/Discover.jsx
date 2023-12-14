import React, { useState, useEffect } from 'react';
import Dropdown from '../retrieve/Dropdown';
import Listbox from '../retrieve/Listbox';
import Detail from '../retrieve/Detail';
import { Creds } from '../retrieve/Creds';
import Button from "../layouts/Button";
import axios from 'axios';

const Discover = () => {
    const spotify = Creds();
    const [isListboxClicked, setIsListboxClicked] = useState(false);

    console.log('RENDERING APP.JS');

    const data = [
        { value: 1, name: 'A' },
        { value: 2, name: 'B' },
        { value: 3, name: 'C' },
    ];

    const [token, setToken] = useState('');
    const [genres, setGenres] = useState({ selectedGenre: '', listOfGenresFromAPI: [] });
    const [playlist, setPlaylist] = useState({ selectedPlaylist: '', listOfPlaylistFromAPI: [] });
    const [tracks, setTracks] = useState({ selectedTrack: '', listOfTracksFromAPI: [] });
    const [trackDetail, setTrackDetail] = useState(null);

    useEffect(() => {
        axios('https://accounts.spotify.com/api/token', {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)
            },
            data: 'grant_type=client_credentials',
            method: 'POST'
        })
            .then(tokenResponse => {
                setToken(tokenResponse.data.access_token);
                axios('https://api.spotify.com/v1/browse/categories?locale=sv_US', {
                    method: 'GET',
                    headers: { 'Authorization': 'Bearer ' + tokenResponse.data.access_token }
                })
                    .then(genreResponse => {
                        setGenres({
                            selectedGenre: genres.selectedGenre,
                            listOfGenresFromAPI: genreResponse.data.categories.items
                        })
                    });
            });
    }, [genres.selectedGenre, spotify.ClientId, spotify.ClientSecret]);

    const genreChanged = val => {
        setGenres({
            selectedGenre: val,
            listOfGenresFromAPI: genres.listOfGenresFromAPI
        });

        axios(`https://api.spotify.com/v1/browse/categories/${val}/playlists?limit=10`, {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + token }
        })
            .then(playlistResponse => {
                setPlaylist({
                    selectedPlaylist: playlist.selectedPlaylist,
                    listOfPlaylistFromAPI: playlistResponse.data.playlists.items
                })
            });
    }

    const playlistChanged = val => {
        setPlaylist({
            selectedPlaylist: val,
            listOfPlaylistFromAPI: playlist.listOfPlaylistFromAPI
        });
    }

    const buttonClicked = e => {
        e.preventDefault();

        axios(`https://api.spotify.com/v1/playlists/${playlist.selectedPlaylist}/tracks?limit=6`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(tracksResponse => {
                setTracks({
                    selectedTrack: tracks.selectedTrack,
                    listOfTracksFromAPI: tracksResponse.data.items
                })
            });
    }

    const listboxClicked = val => {

        setIsListboxClicked(true);

        const currentTracks = [...tracks.listOfTracksFromAPI];
        const trackInfo = currentTracks.filter(t => t.track.id === val);
        setTrackDetail(trackInfo[0].track);


    }

    return (
        <div className="min-h-screen flex flex-col justify-center items-center text-white lg:px-32 px-5 gap-8 text-center lg:text-center bg-bg bg-cover transition transition-all transition-transfom">
            <div className="flex flex-col items-center justify-center">
                <h1 className={`font-semibold text-white text-center text-3xl mt-3 transition-opacity ${isListboxClicked ? 'opacity-0' : 'opacity-100'}`}>
                    Try A Part of Our Feature!
                </h1>
                <h2 className={`font-light text-white text-center text-xl lg:mt-1 mb-8 transition-opacity ${isListboxClicked ? 'opacity-0' : 'opacity-100'}`}>
                    Discover Playlists and Songs Based on Your Favorite Genres
                </h2>
                <div className="flex col-span-2 gap-10 justify-center">
                    <div className="mb-5 flex-col w-100 items-center justify-center">
                        <div className="mb-3">
                            Genre:
                        </div>
                        <Dropdown options={genres.listOfGenresFromAPI} selectedValue={genres.selectedGenre} changed={genreChanged} />
                    </div>
                    <div className="mb-5 flex-col items-center justify-center transition transition-all transition-transform">
                        <div className="mb-3">
                            Playlist:
                        </div>
                        <Dropdown options={playlist.listOfPlaylistFromAPI} selectedValue={playlist.selectedPlaylist} changed={playlistChanged} />
                    </div>
                </div>
                <form onSubmit={buttonClicked} className="grid grid-cols-2 col-span-2 w-100 gap-4 content-center items-center mt-7 justify-items-auto transition-all">
                    <div className="col-span-2 text-center text-white">
                        <button className="bg-white hover:bg-gray-100 text-black font-semibold py-1 px-4 border border-gray-400 rounded-md shadow">
                            Search
                        </button>
                    </div>
                    <div className="col-span-2 transition-all">
                        <Listbox items={tracks.listOfTracksFromAPI} clicked={listboxClicked} />
                        {trackDetail && (
                            <Detail {...trackDetail} />
                        )}
                    </div>
                </form>
            </div>
            <div>
            </div>
        </div>
    );
}

export default Discover;