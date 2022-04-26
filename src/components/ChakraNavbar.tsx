import React from "react"

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  Avatar,
  WrapItem,
  Container,
} from "@chakra-ui/react"
import { AiOutlineMenu } from "react-icons/ai"
import { Logo } from "./Logo"
import { Link } from "react-router-dom"

export function ChakraNavbar() {
  const bg = useColorModeValue("white", "gray.800")
  const mobileNav = useDisclosure()

  return (
    <React.Fragment>
      <chakra.header
        w={"full"}
        py={4}
        position={"fixed"}
        zIndex={"docked"}
        backgroundColor={"rgba(18, 24, 41, 0.8)"}
        backdropFilter={"blur(40px)"}
      >
        <Flex
          as={Container}
          alignItems="center"
          justifyContent="space-between"
          mx="auto"
          maxW={"container.lg"}
        >
          <Flex>
            <chakra.a
              title="Movie Listing Page"
              display="flex"
              alignItems="center"
            >
              <Logo />
              <VisuallyHidden>Choc</VisuallyHidden>
            </chakra.a>
          </Flex>
          <HStack
            display="flex"
            alignItems="center"
            spacing={1}
          >
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
              <Button as={Link} to="/login" variant="ghost">
                Login
              </Button>
              <Button
                as={Link}
                to="/movies"
                variant="ghost"
              >
                Movies
              </Button>
              <Button variant="ghost">TV Shows</Button>
              <Button variant="ghost">Suggest me</Button>
            </HStack>

            <Box
              display={{ base: "inline-flex", md: "none" }}
            >
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue(
                  "gray.800",
                  "inherit",
                )}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={4}
                pb={6}
                spacing={3}
                rounded="sm"
                backgroundColor={"rgba(18, 24, 41, 0.8)"}
                backdropFilter={"blur(40px)"}
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                <Button
                  as={Link}
                  w="full"
                  variant="ghost"
                  to={"/login"}
                >
                  Login
                </Button>
                <Button
                  as={Link}
                  w="full"
                  variant="ghost"
                  to={"/movies"}
                >
                  Movies
                </Button>
                <Button w="full" variant="ghost">
                  TV Shows
                </Button>
                <Button w="full" variant="ghost">
                  Suggest me
                </Button>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  )
}
