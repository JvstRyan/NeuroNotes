import {
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import NotesCard from "./NotesCard";
import NotesItem from "./NotesItem";

const NotesModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <NotesCard onClick={onOpen} />
      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
        size={"full"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={"3rem"}>Gym Progress</ModalHeader>
          <Text ml={"2rem"} maxW={"30%"}>
            Collection of notes documenting my progress in the gym, to keep
            track of my personal records and growth.
          </Text>
          <Divider mt={"2rem"} />
          <ModalCloseButton />
          <ModalBody>
            <SimpleGrid mt="2rem" columns={4} spacing={5}>
              <NotesItem />
            </SimpleGrid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NotesModal;
