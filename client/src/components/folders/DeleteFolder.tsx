import {
  Button,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { FaTrash } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";

interface Props {
  id: string;
  title: string;
}

const DeleteFolder = ({ id, title }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const deleteFolder = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/folders/${id}`);
    } catch(error) {
        console.error('Folder could not be deleted', error)
    }
  };

  return (
    <>
      <Icon
        as={FaTrash}
        cursor={"pointer"}
        color={"#5C5C5C"}
        boxSize={6}
        onClick={onOpen}
        _hover={{ color: "#313131" }}
      />
      <Modal onClose={onClose} isOpen={isOpen} motionPreset="slideInBottom">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete Folder</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Are you sure you want to delete <b>"{title}"</b> ?
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              bg={"#5C5C5C"}
              _hover={{ bg: "#313131" }}
              colorScheme="blue"
              onClick={() => deleteFolder(id)}
            >
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteFolder;
