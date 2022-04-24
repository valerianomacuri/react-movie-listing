import styled, { css } from "styled-components"
import { MovieItemSkeleton } from "../MovieItemSkeleton/index"
import { MovieSkeletonList } from "../MovieSkeletonList"

type MovieListProps = {
  children: React.ReactNode
  loading?: boolean
}

const styles = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  width: 100%;
  padding-bottom: 156px;
  position: relative;
`

export const MovieList = styled(
  ({ children, loading, ...rest }: MovieListProps) => {
    return loading ? (
      <MovieSkeletonList>
        <MovieItemSkeleton />
        <MovieItemSkeleton />
        <MovieItemSkeleton />
        <MovieItemSkeleton />
        <MovieItemSkeleton />
        <MovieItemSkeleton />
        <MovieItemSkeleton />
        <MovieItemSkeleton />
      </MovieSkeletonList>
    ) : (
      <div {...rest}>{children}</div>
    )
  },
)`
  ${styles}
`
