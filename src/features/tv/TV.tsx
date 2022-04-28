import {
  ChakraMovieItem,
  ChakraMovieList,
  Hero,
} from "@/components"
import { Fragment } from "react"
import * as Utils from "@/utils"
import { Text } from "@chakra-ui/react"
import { TVInfinityScroll } from "./components/TVInfinityScroll"

const TV = () => {
  return (
    <Fragment>
      <Hero title={"TV Shows"} />
      <TVInfinityScroll />
    </Fragment>
  )
}

export default TV
