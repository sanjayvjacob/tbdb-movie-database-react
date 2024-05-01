import React, { useEffect, useState } from 'react'

const Movie = () => {

  const [movieList, setMovieList] = useState([])

  const getMovie = ()=> {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=01a954530ea62c34222b0a6d04e1fa06")
    .then(res => res.json())
    .then(json => setMovieList(json.results))
  }

  useEffect(()=>{
    getMovie()
  },[])

  console.log(movieList)

  return (
    <div>
      {movieList.map((movie)=>(
      <img 
      key={movie.id}
      style={{width:"300px",height:"250px",marginLeft:"10px", marginTop:"30px"}} 
      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      alt={movie.title} 
      />
    ))}
    </div>
  )
}

export default Movie