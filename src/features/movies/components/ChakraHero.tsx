import { Typography } from "@/components"

import { InputText } from "@/components/InputText"
import styled, { css, useTheme } from "styled-components"
import { IoSearchOutline } from "react-icons/io5"
import {
  Box,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react"
import { FiSearch } from "react-icons/fi"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 588px;
  ${InputText} {
    margin: 24px 0 48px 0;
  }
`

type ChakraProps = {
  onSearch?: (value: string) => void
  value?: string
}

export const ChakraHero = ({
  onSearch,
  value,
}: ChakraProps) => {
  return (
    <Box
      display={"flex"}
      flexDirection="column"
      maxW={"container.sm"}
      mt={"80px"}
    >
      <Text
        as="h4"
        fontSize={"xs"}
        color={"purple.200"}
        fontWeight="normal"
      >
        MaileHereko
      </Text>
      <Text as="h1" fontSize={"7xl"} fontWeight="bold">
        Movies
      </Text>
      <FormControl mb={12}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<FiSearch />}
          />
          <Input
            id="search"
            type="text"
            size={"lg"}
            colorScheme="purple"
            placeholder="Search Movies or TV Shows"
            variant={"outline"}
            _placeholder={{
              color: "gray.700",
              fontSize: "sm",
            }}
            onChange={e => {
              onSearch && onSearch(e.target.value)
            }}
            value={value}
          />
        </InputGroup>
      </FormControl>
    </Box>
  )
}
