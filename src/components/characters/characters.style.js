import styled from "@emotion/styled";

export const Title = styled.h2`
  text-align: center;
`;
export const CharaContainer = styled.div`
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
    0 0 0 1px rgb(10 10 10 / 2%);
  border-radius: 5px;
  padding: 16px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  &:hover {
    cursor: pointer;
  }
`;

export const Img = styled.img`
  max-width: 100%;
  border-radius: 5px;
`;
