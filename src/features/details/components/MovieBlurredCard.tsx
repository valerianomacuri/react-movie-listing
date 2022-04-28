import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  IconButton,
  Text,
} from "@chakra-ui/react"
import { FaPlay } from "react-icons/fa"

type MovieBlurredCardProps = {
  isLoading?: boolean
  isDisabled?: boolean
  title?: string
  onPlay?: () => void
}

export const MovieBlurredCard = ({
  isLoading,
  title,
  isDisabled,
  onPlay,
}: MovieBlurredCardProps) => {
  return (
    <Box
      backgroundColor="rgba(32, 40, 62, 0.8)"
      style={{
        backdropFilter: "blur(24px)",
      }}
      borderRadius={{
        base: "12px",
        sm: "12px",
        md: "24px",
      }}
      position="absolute"
      top={{
        base: "90%",
        md: "75%",
      }}
      left={{ base: "0", md: "80px" }}
      width={{
        base: "100%",
        md: "md",
      }}
      height={{
        base: "100px",
        md: "144px",
      }}
      padding={{
        base: 4,
        md: 8,
      }}
      display={"flex"}
      flexDirection="column"
      justifyContent={"space-around"}
    >
      <Breadcrumb
        fontWeight="medium"
        fontSize="sm"
        color={"purple.200"}
      >
        <BreadcrumbItem>
          <BreadcrumbLink>MaileHereko</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>Movies</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Text
        color="gray.50"
        fontWeight={"bold"}
        fontSize="2xl"
      >
        {title}
      </Text>
      <IconButton
        icon={<FaPlay color="#fff" />}
        aria-label="Play Trailer"
        isRound
        position={"absolute"}
        colorScheme="purple"
        right={"8"}
        height="60px"
        width="60px"
        onClick={onPlay}
        isDisabled={isDisabled}
        isLoading={isLoading}
      />
    </Box>
  )
}
