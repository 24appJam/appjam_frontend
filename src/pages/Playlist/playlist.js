import React, { useState, useEffect } from "react";
import * as S from "./style.js";
import create from "../../assets/create.svg";
import logo from "../../assets/logo.svg";
import axios from "axios";

const Playlist = () => {
  const [musicsData, setMusicsData] = useState([]);

  useEffect(() => {
    axios
      .get("http://172.16.20.140:8080/music/all")
      .then((response) => {
        setMusicsData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching music data:", error);
      });
  }, []);

  const handleDelete = (index) => {
    const updatedMusicsData = [...musicsData];
    updatedMusicsData.splice(index, 1);
    setMusicsData(updatedMusicsData);
  };

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
              <S.cancle onClick={() => handleDelete(index)}>Delete</S.cancle>
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
