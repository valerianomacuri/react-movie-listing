import {
  Box,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react"
import { EventHandler, KeyboardEventHandler, useState } from "react"
import { FiSearch } from "react-icons/fi"
import { useNavigate, useSearchParams } from "react-router-dom"

export const ChakraHero = () => {
  const [searchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(searchParams.get("req") || "")
  const navigate = useNavigate()
  const onSubmit = (e: any) => {
    if (e.which !== 13) return
    navigate(`?req=${searchValue}`)
  }
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
      <FormControl mb={12} onSubmit={onSubmit} as="form">
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
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyPress={onSubmit}
            value={searchValue}
          />
        </InputGroup>
      </FormControl>
    </Box>
  )
}
