import React from "react";
import * as S from "./style.js";
import music1 from "../../assets/music1.svg";
import plus from "../../assets/plus.svg";
import create from "../../assets/create.svg";
import loading from "../../assets/loading.svg";
import logo from "../../assets/logo.svg";

const playlist = () => {
  const musicsData = [
    { name: "Lorem Ipsum", time: "2:00" },
    { name: "Lorem Ipsum", time: "2:00" },
    { name: "Lorem Ipsum", time: "2:00" },
    { name: "Lorem Ipsum", time: "2:00" },
    { name: "Lorem Ipsum", time: "2:00" },
    { name: "Lorem Ipsum", time: "2:00" },
    { name: "Lorem Ipsum", time: "2:00" },
    { name: "Lorem Ipsum", time: "2:00" },
    { name: "Lorem Ipsum", time: "2:00" },
    { name: "Lorem Ipsum", time: "2:00" },
    { name: "Lorem Ipsum", time: "2:00" },
    { name: "Lorem Ipsum", time: "2:00" },
    { name: "Lorem Ipsum", time: "2:00" },
    { name: "Lorem Ipsum", time: "2:00" },
    { name: "Lorem Ipsum", time: "2:00" },
    { name: "Lorem Ipsum", time: "2:00" },
    { name: "Lorem Ipsum", time: "2:00" },
    { name: "Lorem Ipsum", time: "2:00" },
    { name: "Lorem Ipsum", time: "2:00" },
    { name: "Lorem Ipsum", time: "2:00" },
    { name: "Lorem Ipsum", time: "2:00" },
    { name: "Lorem Ipsum", time: "2:00" },
    { name: "Lorem Ipsum", time: "2:00" },
    { name: "Lorem Ipsum", time: "2:00" },
  ];

  return (
    <>
      <S.container>
        <S.logo src={logo} alt="logo" />
        <S.title>내 Playlist</S.title>
        <S.musics>
          {musicsData.map((music, index) => (
            <S.music key={index}>
              <S.name>{music.name}</S.name>
              <S.time>{music.time}</S.time>
              <S.img src={music1} alt="music1" />
              <S.plus src={plus} alt="plus" />
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

export default playlist;
