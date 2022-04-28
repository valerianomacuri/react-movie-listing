import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react"

type MovieVideosProps = {
  onClose: () => void
  isOpen: boolean
  children: React.ReactNode
  title: string
}

export const MovieVideos = ({
  onClose,
  isOpen,
  children,
  title,
}: MovieVideosProps) => {
  return (
    <>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        size={"3xl"}
      >
        <ModalOverlay />
        <ModalContent bg={"#121829"}>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
          <ModalFooter>
            {/* <Button
              colorScheme="blue"
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
            <Button variant="ghost">
              Secondary Action
            </Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
