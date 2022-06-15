import styled from "@emotion/styled";

export const TitleFilmPage = styled.h2`
  text-align: center;
  font-size: 30px;
  margin-bottom: 30px;
`;

export const CharaFilmImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid black;
  @media (max-width: 900px) {
    width: 60px;
    height: 60px;
  }
`;

export const FilmImage = styled.img`
  max-height: 100%;

  @media (max-width: 600px) {
    max-width: 100%;
    max-height: none;
    margin-bottom: 20px;
  }
`;
