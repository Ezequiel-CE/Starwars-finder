import styled from "@emotion/styled";

export const TitleFilmPage = styled.h2`
  text-align: center;
  font-size: 30px;
  margin-bottom: 30px;
`;

export const CharaFilmImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 3px solid black;
`;

export const FilmImage = styled.img`
  max-height: 100%;

  @media (max-width: 900px) {
    max-width: 100%;
    max-height: none;
    margin-bottom: 20px;
  }
`;
