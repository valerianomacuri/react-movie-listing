import { Link, LinkProps } from "react-router-dom"
import { Typography } from "../Typography"
import { useTheme } from "styled-components"
import { FC } from "react"

type CustomLinkProps = {} & LinkProps &
  React.RefAttributes<HTMLAnchorElement>

export const CustomLink: FC<CustomLinkProps> = ({
  children,
  ...props
}) => {
  const theme = useTheme()
  return (
    <Link {...props}>
      <Typography
        as="span"
        variant="link1"
        color={theme.colors.grey[200]}
      >
        {children}
      </Typography>
    </Link>
  )
}
