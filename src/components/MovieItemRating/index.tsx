import { FC } from "react"
import styled from "styled-components"
import { IoStarOutline } from "react-icons/io5"
import { Typography } from "../Typography"

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 8px;

  position: absolute;
  top: 18px;
  left: 16px;

  width: 60px;
  height: 40px;

  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(8px);
  border-radius: 8px;
  gap: 4px;
  & * {
    color: #ffad49;
    stroke: #ffad49;
  }
`
export const MovieItemRating: FC = ({ children }) => (
  <Wrapper>
    <IoStarOutline />
    <Typography as={"span"} variant={"body2"}>
      {children}
    </Typography>
  </Wrapper>
)
