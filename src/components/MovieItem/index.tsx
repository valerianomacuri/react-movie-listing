import { IMAGE_URL } from "@/services"
import styled from "styled-components"
import { MovieItemImage } from "../MovieItemImage"
import { MovieItemRating } from "../MovieItemRating"
import { Typography } from "../Typography"

const Wrapper = styled.div`
  box-sizing: border-box;
  border: none;
  margin: 0;
  padding: 0;
  outline: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 12px;
  background: rgba(32, 40, 62, 0.8);
  backdrop-filter: blur(80px);
  padding: 8px 8px 16px 8px;
  position: relative;
  & > #MovieItemText {
    padding: 8px;
  }
`

type MovieItemProps = {
  title?: string
  rating?: number
  source?: string
  children?: React.ReactNode
}

export const MovieItem = ({
  title,
  rating,
  source,
}: MovieItemProps) => {
  return (
    <Wrapper>
      <MovieItemRating>{rating}</MovieItemRating>
      <MovieItemImage
        src={
          source === null || source === "null"
            ? "./assets/images/movie-placeholder.svg"
            : IMAGE_URL + source
        }
      />
      <div id="MovieItemText">
        <Typography as="span" variant="link1">
          {title}
        </Typography>
      </div>
    </Wrapper>
  )
}
