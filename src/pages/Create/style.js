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

export const back = styled.img`
  position: relative;
  top: 54px;
  right: 15px;
`;

export const title = styled.h2`
  position: relative;
  left: 25px;
  top: 55px;
  font-size: 20px;
`;

export const StoryBox = styled.textarea`
  position: relative;
  top: 70px;
  left: 25px;
  background: #e7e7e7;
  border: none;
  width: 305px;
  height: 260px;
  padding-top: 13px;
  padding-bottom: 13px;
  padding-left: 10px;
  padding-right: 10px;
  white-space: pre-wrap;
  font-size: 16px;

  &::placeholder {
    position: absolute;
    top: 13px;
    left: 10px;
    color: #ff6767;
    font-size: 16px;
  }
`;

export const atmosphere = styled.div`
  position: relative;
  left: 25px;
  top: 100px;
  font-size: 20px;
  font-size: 18px;
  font-weight: 400;
`;

export const keyword = styled.div`
  position: relative;
  left: 25px;
  top: 140px;
  font-size: 20px;
  font-size: 18px;
  font-weight: 400;
`;

export const TagsInput = styled.div`
  position: relative;
  top: 115px;
  left: 25px;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 30px;
  width: 305px;
  padding: 8px;
  border: 1px solid #ff6767;
  border-radius: 6px;

  > ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 8px 0 0 0;

    > .tag {
      width: auto;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ff6767;
      padding: 0 8px;
      font-size: 14px;
      list-style: none;
      border-radius: 6px;
      margin: 0 8px 8px 0;
      background: rgb(242, 243, 244);
      border-radius: 15px;

      > .tag-close-icon {
        display: block;
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        font-size: 14px;
        margin-left: 8px;
        color: #ff6767;
        border-radius: 50%;
        background: #fff;
        cursor: pointer;
      }
    }
  }

  > input {
    flex: 1;
    border: none;
    height: 30px;
    font-size: 14px;
    padding: 5px;
    :focus {
      outline: transparent;
    }
  }
`;

export const add = styled.div`
  position: relative;
  left: 25px;
  top: 140px;
  font-size: 20px;
  font-size: 18px;
  font-weight: 400;
`;

export const AddBox = styled.textarea`
  position: relative;
  top: 155px;
  left: 25px;
  background: #e7e7e7;
  border: none;
  width: 305px;
  height: 85px;
  padding-top: 13px;
  padding-bottom: 13px;
  padding-left: 10px;
  padding-right: 10px;
  white-space: pre-wrap;
  font-size: 16px;

  &::placeholder {
    position: absolute;
    top: 13px;
    left: 10px;
    color: #ff6767;
    font-size: 16px;
  }
`;

export const CreateBtn = styled.button`
  position: fixed;
  left: 25px;
  bottom: 22px;
  padding: 17px 128px;
  background-color: #ff6767;
  border: none;
  border-radius: 6px;
  color: white;
  color: #fff5f5;
  font-size: 20px;
  font-weight: 700;
`;
