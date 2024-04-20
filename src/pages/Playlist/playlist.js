import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "./style.js";
import create from "../../assets/create.svg";
import logo from "../../assets/logo.svg";
import play from "../../assets/play.svg";

const Playlist = () => {
  const [musicsData, setMusicsData] = useState([]); // Initialized with an empty array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://172.16.20.140:8080/music/all")
      .then((response) => {
        setMusicsData(response.data);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching music data:", error);
        setLoading(false);
      });
  }, []);

  const handlePlayClick = (videoUrl) => {
    window.open(videoUrl, "_blank"); // Opens the video URL in a new tab
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <S.container>
        <S.logo src={logo} alt="logo" />
        <S.title>내 Playlist</S.title>
        <S.musics>
          {musicsData.map((music, index) => (
            <S.music key={index}>
              <S.img src={music.image_url} alt={`music-${index}`} />
              <S.name>{music.title}</S.name>
              <S.play
                src={play}
                alt="play"
                onClick={() => handlePlayClick(music.video_url)}
              />
            </S.music>
          ))}
        </S.musics>
        <S.CreateContainer>
          <a href="http://localhost:3000/create">
            <S.create src={create} alt="create" />
          </a>
          <S.background />
        </S.CreateContainer>
      </S.container>
    </>
  );
};

export default Playlist;
