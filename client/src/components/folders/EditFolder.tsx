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
import { patchFolder } from "../../api/folder-requests";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface Props {
  title: string;
  description: string;
  _id: string;
}

function EditFolder({ title, description: propDesc, _id }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [updatedFolderName, setUpdatedFolderName] = useState("");
  const [updatedFolderDesc, setUpdatedFolderDesc] = useState("");

  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: patchFolder,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['folders']})
    }
  })

  const updateFolder = (_id: string) => {
    const name = updatedFolderName !== "" ? updatedFolderName : title;
    const description = updatedFolderDesc !== "" ? updatedFolderDesc : propDesc;
    mutation.mutate({id: _id, body: {name, description}})
    setUpdatedFolderName('')
    setUpdatedFolderDesc('')
    onClose()
  }

  return (
    <>
      <Icon
        as={AiFillEdit}
        color={"default.200"}
        cursor={"pointer"}
        _hover={{ color: "default.500" }}
        boxSize={6}
        onClick={onOpen}
      />
      <Modal size={{base: 'sm', md: 'lg'}} onClose={onClose} isOpen={isOpen} motionPreset="slideInBottom">
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
                focusBorderColor="black"
              />
              <Flex mt={"10px"} direction={"column"}>
                <FormLabel>Description</FormLabel>
                <Textarea
                  h={"12rem"}
                  placeholder={propDesc}
                  value={updatedFolderDesc}
                  onChange={(e) => setUpdatedFolderDesc(e.target.value)}
                  focusBorderColor="black"
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
              onClick={() => updateFolder(_id)}
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
