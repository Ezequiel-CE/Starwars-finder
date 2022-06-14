import styled from "@emotion/styled";

export const TitleFilms = styled.h2`
  text-align: center;
  font-size: 30px;
  margin-bottom: 30px;
`;
export const FilmContainer = styled.div`
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
    0 0 0 1px rgb(10 10 10 / 2%);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  &:hover {
    cursor: pointer;
  }
`;

export const FilmImg = styled.img`
  max-height: 80%;
  max-width: 100%;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;
