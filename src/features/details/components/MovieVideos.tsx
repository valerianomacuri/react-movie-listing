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
        <ModalContent
          style={{
            backdropFilter: "blur(40px)",
            border: "1px solid #20283e",
            backgroundColor: "rgba(18, 24, 41, 0.8)",
            borderRadius: "24px",
          }}
        >
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
