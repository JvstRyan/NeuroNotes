import { Button, Card, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea, useDisclosure } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { GoPlus } from "react-icons/go";
import { createNotes } from "../../api/note-requests";
import { useState } from "react";

interface Props {
    foldId: string
}

const AddNotes = ({foldId}: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [noteTitle, setNoteTitle] = useState('')
  const [noteDescription, setNoteDescription] = useState('')
  const [noteContent, setNoteContent] = useState('')


 const queryClient = useQueryClient()

 const mutation = useMutation({
    mutationFn: createNotes,
    onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ['notes']})
    }
 })

 const createNote = (foldId: string) => {
    mutation.mutate({title: noteTitle, description: noteDescription, content: noteContent, folderId: foldId})
    setNoteTitle('')
    setNoteDescription('')
    setNoteContent('')
    onClose()
 }


  return (
    <>
      <Card
        _hover={{ backgroundColor: "#F0F0F0" }}
        cursor={"pointer"}
        w={{base: '350px'}}
        minH={"xs"}
        borderRadius={"10px"}
        placeContent={"center"}
        alignItems={"center"}
        variant={"elevated"}
        onClick={onOpen}
      >
        <GoPlus size={60} color={"#5C5C5C"} />
      </Card>
      <Modal size={{base: 'sm', md: 'lg'}} onClose={onClose} isOpen={isOpen} motionPreset="slideInBottom">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Note</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Note Name:</FormLabel>
              <Input
                focusBorderColor="black"
                onChange={(e) => setNoteTitle(e.target.value)}
                spellCheck={false}
              />
               <Flex mt={"10px"} direction={"column"}>
                <FormLabel>Description:</FormLabel>
                <Textarea
                  h={"5rem"}
                  focusBorderColor="black"
                 onChange={(e) => setNoteDescription(e.target.value)}
                 spellCheck={false}
                ></Textarea>
              </Flex>
              <Flex mt={"10px"} direction={"column"}>
                <FormLabel>Content:</FormLabel>
                <Textarea
                  h={"12rem"}
                  focusBorderColor="black"
                 onChange={(e) => setNoteContent(e.target.value)}
                 spellCheck={false}
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
            //   onClick={newFolder}
              colorScheme="blue"
              onClick={() => createNote(foldId)}
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddNotes;
