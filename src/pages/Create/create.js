import React from "react";
import * as S from "./style";
import logo from "../../assets/logo.svg";
import back from "../../assets/back.svg";

const create = () => {
  return (
    <>
      <S.container>
        <S.logo src={logo} alt="logo" />
        <S.back src={back} alt="back" />
        <S.title>내 Playlist</S.title>
        <S.StoryBox type="text" placeholder="사연을 적어 주세요" />
      </S.container>
    </>
  );
};

export default create;
