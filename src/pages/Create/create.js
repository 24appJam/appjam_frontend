import React, { useState } from "react";
import axios from "axios";
import * as S from "./style";
import logo from "../../assets/logo.svg";
import back from "../../assets/back.svg";

const Create = () => {
  const initialTags = ["부드러운", "절망스러운", "따사로운"];
  const initialTags2 = ["남친", "여사친", "사랑", "행복"];

  const [tags1, setTags1] = useState(initialTags);
  const [tags2, setTags2] = useState(initialTags2);
  const [story, setStory] = useState("");
  const [additionalRequest, setAdditionalRequest] = useState("");

  const removeTags1 = (indexToRemove) => {
    const filter = tags1.filter((el, index) => index !== indexToRemove);
    setTags1(filter);
  };

  const removeTags2 = (indexToRemove) => {
    const filter = tags2.filter((el, index) => index !== indexToRemove);
    setTags2(filter);
  };

  const addTags1 = (event) => {
    const inputVal = event.target.value;
    if (event.key === "Enter" && inputVal !== "" && !tags1.includes(inputVal)) {
      setTags1([...tags1, inputVal]);
      event.target.value = "";
    }
  };

  const addTags2 = (event) => {
    const inputVal = event.target.value;
    if (event.key === "Enter" && inputVal !== "" && !tags2.includes(inputVal)) {
      setTags2([...tags2, inputVal]);
      event.target.value = "";
    }
  };

  const handleCreate = () => {
    const data = {
      prompt: story,
      atmosphere: tags1.join(","),
      keywords: tags2.join(","),
      additional_requirements: additionalRequest,
    };

    axios
      .post("http://172.16.20.140:8080/music", data)
      .then((response) => {
        console.log("Creation successful:", response.data);
      })
      .catch((error) => {
        console.error("Error creating:", error);
      });
  };

  return (
    <>
      <S.container>
        <S.logo src={logo} alt="logo" />
        <a href="http://localhost:3000/playlist">
          <S.back src={back} alt="back" />
        </a>
        <S.title>노래 생성</S.title>
        <S.StoryBox
          placeholder="사연을 적어 주세요"
          onChange={(e) => setStory(e.target.value)}
          value={story}
        />
        <S.atmosphere>분위기</S.atmosphere>
        <S.TagsInput>
          <ul id="tags1">
            {tags1.map((tag, index) => (
              <li key={index} className="tag">
                <span className="tag-title">{tag}</span>
                <span
                  className="tag-close-icon"
                  onClick={() => removeTags1(index)}
                >
                  x
                </span>
              </li>
            ))}
          </ul>
          <input
            className="tag-input"
            type="textarea"
            onKeyUp={(e) => {
              addTags1(e);
            }}
            placeholder="태그를 입력해주세요"
          />
        </S.TagsInput>
        <S.keyword>키워드</S.keyword>
        <S.TagsInput style={{ marginTop: "40px" }}>
          <ul id="tags2">
            {tags2.map((tag, index) => (
              <li key={index} className="tag">
                <span className="tag-title">{tag}</span>
                <span
                  className="tag-close-icon"
                  onClick={() => removeTags2(index)}
                >
                  x
                </span>
              </li>
            ))}
          </ul>
          <input
            className="tag-input"
            type="textarea"
            onKeyUp={(e) => {
              addTags2(e);
            }}
            placeholder="태그를 입력해주세요"
          />
        </S.TagsInput>
        <S.add>추가 요구사항</S.add>
        <S.AddBox
          placeholder="추가 요구사항을 적어 주세요"
          onChange={(e) => setAdditionalRequest(e.target.value)}
          value={additionalRequest}
        />
        <S.CreateBtn onClick={handleCreate}>생성하기</S.CreateBtn>
        <S.padding />
      </S.container>
    </>
  );
};

export default Create;
