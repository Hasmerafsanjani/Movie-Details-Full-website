import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from '../../../hooks/UseFetch'
import { useSelector } from 'react-redux'
import Img from "../../../components/lazyLoadimage/Img"
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
 import './style.scss'
function HeroBanner() {
  const [backGround, setbackGround] = useState("")
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const {url} = useSelector((state) => state.home);
const {data , loading } = useFetch("/movie/upcoming")

useEffect(()=> {
const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
setbackGround(bg)
},[data])

const searchHendler=(e)=>{
    if(e.key === "Enter" && query.length > 0 ){
      navigate(`/search/${query}`);
    } 
}

  return (
<div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={backGround} />
        </div>
      )}

      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">
            Thousands of your favarite movies, TV shows . Watch now
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie or tv show...."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchHendler}
            />
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default HeroBanner