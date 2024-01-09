import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Icon,
  Textarea,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import { AiFillEdit } from "react-icons/ai";

interface Props {
  title: string;
  description: string;
  id: string;
}

function EditFolder({ title, description, id }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [updatedFolderName, setUpdatedFolderName] = useState("");
  const [updatedFolderDesc, setUpdatedFolderDesc] = useState("");

  const handleOpen = () => {
    onClose();
  };

  return (
    <>
      <Icon
        as={AiFillEdit}
        color={"#5C5C5C"}
        cursor={"pointer"}
        _hover={{ color: "#313131" }}
        boxSize={6}
        onClick={onOpen}
      />
      <Modal onClose={onClose} isOpen={isOpen} motionPreset="slideInBottom">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Folder</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Folder Name:</FormLabel>
              <Input
                value={updatedFolderName}
                onChange={(e) => setUpdatedFolderName(e.target.value)}
                placeholder={title}
              />
              <Flex mt={"10px"} direction={"column"}>
                <FormLabel>Description</FormLabel>
                <Textarea
                  h={"12rem"}
                  placeholder={description}
                  value={updatedFolderDesc}
                  onChange={(e) => setUpdatedFolderDesc(e.target.value)}
                ></Textarea>
              </Flex>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              bg={"#5C5C5C"}
              _hover={{ bg: "#313131" }}
              onClick={() => handleOpen()}
              colorScheme="blue"
            >
              Update
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default EditFolder;
