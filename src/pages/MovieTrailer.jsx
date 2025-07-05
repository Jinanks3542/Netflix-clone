import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function MovieTrailer() {
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });
  const { params } = useParams();
  // const navigate = useNavigate();

  const movie = new URLSearchParams(params);
  console.log(movie,'.........');
  

const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${movie.get("id")}/videos?language=en-US`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NGRlZjI5NTdkYjU1ZDM2NGIyMzYyM2U1NDIxYWE1MyIsIm5iZiI6MTczNTA0OTQwNC44OTUsInN1YiI6IjY3NmFjMGJjNDVjYzU1ZmZiNzY0YmU5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LRV__rLoTLg39zc80HpFKQ9UK1lSKTQ4DBFF4j_G2lg",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then((res) => setApiData(res.data.results[res.data.results.length - 1]))
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <div className=" flex justify-center pt-[4em]">
      <iframe
        width="90%"
        height="90vh"
        className="h-[90vh]"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="Trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>

    </div>
    <div className="flex justify-center h-[50vh]">
      <h1 className="text-white text-2xl">{movie.get("title")}</h1>
    </div>
    </>
  );
}

export default MovieTrailer;