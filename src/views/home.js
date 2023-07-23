import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Magnificent Cheerful Gazelle</title>
        <meta property="og:title" content="Magnificent Cheerful Gazelle" />
      </Helmet>
      <img
        alt="logo"
        src="https://i.imgur.com/ZQ37ZNM.png"
        className="home-image"
      />
      <div className="home-container1">
        <a
          href="https://discord.com/users/331609957378162688"
          target="_blank"
          rel="noreferrer noopener"
          className="home-link button"
        >
          <span className="home-text">
            <span className="home-text1">Discord</span>
            <br></br>
          </span>
        </a>
        <a
          href="https://open.spotify.com/user/h0kyh2o0urw495g951m19mtcq"
          target="_blank"
          rel="noreferrer noopener"
          className="home-link1 button"
        >
          <span className="home-text3">
            <span className="home-text4">Spotify</span>
            <br></br>
          </span>
        </a>
      </div>
    </div>
  )
}

export default Home
