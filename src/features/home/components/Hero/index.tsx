import styled, { css, useTheme } from "styled-components"
import { InputText, Typography } from "@/components"
import { LogoIcon } from "@/components/Icons"

const styles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 588px;
  ${InputText} {
    margin: 24px 0 80px 0;
    width: 20000px;
  }
`
export const Hero = styled(({ ...rest }) => {
  const theme = useTheme()
  return (
    <div {...rest}>
      <Typography
        as={"h1"}
        variant="h1"
        color={theme.colors.grey[50]}
      >
        MaileHereko
      </Typography>
      <Typography
        variant="body2"
        color={theme.colors.grey[300]}
      >
        List of movies and TV Shows, I, Pramod Poudel have
        watched till date.
        <br /> Explore what I have watched and also feel
        free to make a suggestion. 😉
      </Typography>
      <InputText
        label="Search Movies or TV Shows"
        startIcon={<LogoIcon />}
        fullWidth
      />
    </div>
  )
})`
  ${styles}
`
