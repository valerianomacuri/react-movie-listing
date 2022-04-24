import { Typography } from "@/components"
import { LogoIcon } from "@/components/Icons"
import { InputText } from "@/components/InputText"
import styled, { css, useTheme } from "styled-components"
import { IoSearchOutline } from "react-icons/io5"
import { useDebounce } from "@/hooks"
import { useState, useEffect } from "react"
import { useQuery, useQueryClient } from "react-query"
import searchMoviesApi from "@/api/searchMoviesApi"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 588px;
  ${InputText} {
    margin: 24px 0 48px 0;
  }
`

type HeroProps =
  | React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >
  | undefined

export const Hero = ({ ...props }: HeroProps) => {
  const theme = useTheme()
  return (
    <Wrapper>
      <Typography
        variant="body4"
        color={theme.colors.primary[200]}
      >
        MaileHereko
      </Typography>
      <Typography
        as={"h1"}
        variant="h1"
        color={theme.colors.grey[50]}
      >
        Movies
      </Typography>
      <InputText
        label="Search Movies or TV Shows"
        startIcon={<IoSearchOutline />}
        inputProps={{ ...props }}
        fullWidth
      />
    </Wrapper>
  )
}
