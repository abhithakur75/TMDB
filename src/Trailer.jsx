

import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Youtube from 'react-youtube';

const Api_key = '191c99c3810edc08259371af1c40a35c';
const base_url = "https://api.themoviedb.org/3";

const Trailer = () => {
    const { trailerId } = useParams();
    const [videoId, setVideoId] = useState("");

    useEffect(() => {
        let url = `${base_url}/movie/${trailerId}/videos?language=en-US&api_key=${Api_key}`;
       
        axios.get(url)
            .then(response => {
                const trailer = response.data.results;
                const youtubeTrailer = trailer.length > 0 ? trailer[0].key : null;
                setVideoId(youtubeTrailer);
            })
            .catch(error => {
                console.log(error);
            });
    }, [trailerId]);

    return (
        <>
        
            <div className="trailer-container">
            {videoId ? (
                <div className="trailer">
                    <Youtube videoId={videoId} opts={{ width: '100%', "aspect-ratio":4/3 }} />
                </div>
            ) : (
                <p>No trailer available.</p>
            )}
        </div>
        </>
    );
};

export default Trailer;

