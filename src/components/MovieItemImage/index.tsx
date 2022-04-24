import styled from "styled-components"

export const MovieItemImage = styled.img`
  box-sizing: border-box;
  border: none;
  margin: 0;
  padding: 0;
  display: block;
  width: 100%;
  height: 371px;
  object-fit: cover;
  overflow: hidden;
  background-color: ${({ theme }) =>
    theme.colors.commmon.black};
  border-radius: 8px;
`
