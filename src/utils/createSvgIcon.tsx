import styled from "styled-components"

type SvgProps = {
  color?: string
}

const Svg = styled.svg<SvgProps>`
  & > path {
    stroke: ${({ color }) => color && "#8E95A9"};
  }
`

type SvgIconProps = {
  color?: string
}

export const createSvgIcon = (
  path:
    | React.SVGProps<SVGPathElement>
    | React.SVGProps<SVGPathElement>[],
) => {
  return ({ color }: SvgIconProps) => {
    return (
      <Svg
        color={color}
        width="24"
        height="24"
        viewBox={`0 0 24 24`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {path}
      </Svg>
    )
  }
}
