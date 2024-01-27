import { Button, Card, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea, useDisclosure } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { createFolder} from "../../api/folder-requests";

const AddFolder = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newFolderName, setNewFolderName] = useState('')
  const [newFolderDesc, setNewFolderDesc] = useState('')

  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: createFolder,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['folders']})
    }
  })

  const newFolder = () => {
    mutation.mutate({name: newFolderName, description: newFolderDesc})
    onClose()
  }

  return (
    <>
      <Card
        _hover={{ backgroundColor: "#F0F0F0" }}
        cursor={"pointer"}
        w={{base: '350px', md: "385px"}}
        h={"xs"}
        mb={{base: "2rem", md: '0px'}}
        borderRadius={"10px"}
        placeContent={"center"}
        alignItems={"center"}
        variant={"elevated"}
        onClick={onOpen}
      >
        <GoPlus size={60} color={"default.200"} />
      </Card>
      <Modal size={{base: 'sm', md: 'lg'}} onClose={onClose} isOpen={isOpen} motionPreset="slideInBottom">
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
              bg={"default.200"}
              _hover={{ bg: "default.500" }}
              onClick={newFolder}
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
