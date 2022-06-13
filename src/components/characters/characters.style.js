import styled from "@emotion/styled";

export const Title = styled.h2`
  text-align: center;
`;
export const CharaContainer = styled.div`
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
    0 0 0 1px rgb(10 10 10 / 2%);
  border-radius: 5px;
  padding: 16px;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  &:hover {
    cursor: pointer;
  }

  @media (max-width: 600px) {
    height: 200px;
  }
`;

export const Img = styled.img`
  max-height: 80%;
  max-width: 90%;
  border-radius: 5px;
  @media (max-width: 600px) {
    max-width: 100%;
  }
`;
