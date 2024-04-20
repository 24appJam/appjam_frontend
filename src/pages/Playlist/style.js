import styled from "styled-components";

export const container = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

export const logo = styled.img`
  position: relative;
  top: 30px;
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

export const loading = styled.img`
  width: 24px;
  height: 24px;
  position: relative;
  left: 170px;
  bottom: 22px;
`;

export const img = styled.img``;

export const plus = styled.img`
  position: relative;
  left: 235px;
  bottom: 22px;
`;

export const CreateContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
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
`;
