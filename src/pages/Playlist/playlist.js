import React, { useState, useEffect } from "react";
import * as S from "./style.js";
import create from "../../assets/create.svg";
import logo from "../../assets/logo.svg";
import load from "../../assets/loading.svg";
import axios from "axios";

const Playlist = () => {
  const [musicsData, setMusicsData] = useState([]);
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
        setLoading(false); // Set loading to false in case of error
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

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
          {loading ? (
            <S.load src={load} alt="load" />
          ) : (
            musicsData.map((music, index) => (
              <S.music key={index}>
                <S.img src={music.image_url} alt={`music-${index}`} />
                <S.name>{music.title}</S.name>
                <S.cancel onClick={() => handleDelete(index)}>Delete</S.cancel>
              </S.music>
            ))
          )}
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
