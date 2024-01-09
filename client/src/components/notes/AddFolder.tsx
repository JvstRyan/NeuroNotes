import { Button, Card, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { GoPlus } from "react-icons/go";

const AddFolder = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newFolderName, setNewFolderName] = useState('')
  const [newFolderDesc, setNewFolderDesc] = useState('')

  const createFolder = async () => {
    try {
      await axios.post(`http://localhost:5000/api/folders/`, {name: newFolderName, desciption: newFolderDesc})
      setNewFolderName('')
      setNewFolderDesc('')
      onClose()
    } catch(error) {
      console.error('Folder could not be created', error)
    }
  }

  return (
    <>
      <Card
        _hover={{ backgroundColor: "#F0F0F0" }}
        cursor={"pointer"}
        w={"sm"}
        h={"xs"}
        mb={"1rem"}
        borderRadius={"10px"}
        placeContent={"center"}
        alignItems={"center"}
        variant={"elevated"}
        onClick={onOpen}
      >
        <GoPlus size={60} color={"#5C5C5C"} />
      </Card>
      <Modal onClose={onClose} isOpen={isOpen} motionPreset="slideInBottom">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Folder</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Folder Name:</FormLabel>
              <Input
                focusBorderColor="black"
                onChange={(e) => setNewFolderName(e.target.value)}
              />
              <Flex mt={"10px"} direction={"column"}>
                <FormLabel>Description:</FormLabel>
                <Textarea
                  h={"12rem"}
                  focusBorderColor="black"
                 onChange={(e) => setNewFolderDesc(e.target.value)}
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
              onClick={createFolder}
              colorScheme="blue"
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddFolder;
