import {
  Box,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react"
import { FiSearch } from "react-icons/fi"

export const ChakraHero = () => {
  return (
    <Box
      display={"flex"}
      flexDirection="column"
      maxW={"container.sm"}
      mt={"80px"}
    >
      <Text as="h1" fontSize={"6xl"} fontWeight="bold">
        MaileHereko
      </Text>
      <Text as="p" color={"gray.200"} fontWeight="regular">
        List of movies and TV Shows, I, Pramod Poudel have
        watched till date. <br /> Explore what I have
        watched and also feel free to make a suggestion. 😉
      </Text>
      <FormControl mt={"6"} mb={20}>
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
          />
        </InputGroup>
      </FormControl>
    </Box>
  )
}
