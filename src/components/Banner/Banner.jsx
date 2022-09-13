import React, { useEffect, useState } from 'react'
import { imageUrl } from '../../constants/constants'
import axios from '../../axios'
import './Banner.css'
const index=Math.floor(Math.random()*20)

const Banner = (props) => {
  const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      setMovie(response.data.results[index])
    })
  }, [])
  
  return (
    <div 
    style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path : ''})`}}
    className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : ''}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'>{movie ? movie.overview : ''}</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner