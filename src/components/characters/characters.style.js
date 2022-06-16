import styled from "@emotion/styled";

export const Title = styled.h2`
  text-align: center;
`;
export const CharaContainer = styled.div`
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

export const Img = styled.img`
  max-width: 100%;
  border-radius: 5px 5px 0px 0px;
  @media (max-width: 600px) {
    max-width: 100%;
  }
`;
