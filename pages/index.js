import NavBar from "../component/NavBar";
import Head from "next/head";
import Title from "../component/Title";
import { useEffect, useState } from "react";

const API_KEY = "986370d4ea8f8a7c0171de89d6b56956"
export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      setMovies(results);
      console.log(results)
    })();
  }, [])

  return (
    <div>
      <Title title="Home" />
      {!movies && <h4>Loading...</h4>}
      {movies.map(movie => <div key={movie.id}>
        <h4>{movie.original_title}</h4>
      </div>)}
    </div>
  )
}