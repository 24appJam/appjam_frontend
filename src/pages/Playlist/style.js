import styled from "styled-components";

export const container = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

export const logo = styled.img`
  position: relative;
  top: 60px;
  left: 310px;
`;

export const title = styled.h2`
  position: relative;
  left: 25px;
  top: 55px;
  font-size: 20px;
`;

export const musics = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 75px;
  left: 25px;
  padding-bottom: 175px;
  flex-grow: 1;
`;

export const music = styled.div`
  position: relative;
  bottom: 0px;
`;

export const name = styled.div`
  position: absolute;
  left: 90px;
  top: 10px;
  font-size: 18px;
`;

export const time = styled.div`
  position: absolute;
  left: 90px;
  top: 35px;
  font-size: 16px;
`;

export const load = styled.img`
  width: 60px;
  height: 60px;
  position: relative;
  left: 130px;
  top: 130px;
`;

export const img = styled.img`
  width: 69px;
  height: 69px;
`;

export const play = styled.img`
  width: 30px;
  height: 30px;
  position: relative;
  left: 215px;
  bottom: 22px;
`;

export const CreateContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100px;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const background = styled.div`
  width: 100vw;
  height: 56px;
  bottom: 0;
  background-color: #ee5c5c;
`;

export const create = styled.img`
  position: absolute;
  bottom: 15px;
  left: 145px;
`;
