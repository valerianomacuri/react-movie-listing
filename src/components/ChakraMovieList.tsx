import { SimpleGrid } from "@chakra-ui/react"
import { FC, Fragment } from "react"
import { ChakraMovieSkeletonItem } from "./ChakraMovieSkeletonItem"

export const ChakraMovieList: FC<{
  isLoading: boolean
}> = ({ children, isLoading }) => {
  return (
    <SimpleGrid
      columns={{
        base: 1,
        sm: 2,
        md: 3,
        lg: 4,
      }}
      gap="24px"
    >
      {isLoading ? (
        <Fragment>
          <ChakraMovieSkeletonItem />
          <ChakraMovieSkeletonItem />
          <ChakraMovieSkeletonItem />
          <ChakraMovieSkeletonItem />
          <ChakraMovieSkeletonItem />
          <ChakraMovieSkeletonItem />
        </Fragment>
      ) : (
        children
      )}
    </SimpleGrid>
  )
}
