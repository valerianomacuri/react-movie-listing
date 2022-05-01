import { Hero } from "@/components"
import { Fragment } from "react"
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
