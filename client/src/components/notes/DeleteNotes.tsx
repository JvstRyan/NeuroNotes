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
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FaTrash } from "react-icons/fa6";
import { deleteNotes } from "../../api/note-requests";

interface Props {
    title: string
    id: string
}

const DeleteNotes = ({title, id}: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
    
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: deleteNotes,
    onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ['notes']})
    }
  })

  const removeNotes = (id: string) => {
    mutation.mutate(id)
    onClose()
  }

  return (
    <>
      <Icon
        as={FaTrash}
        cursor={"pointer"}
        color={"#5C5C5C"}
        boxSize={6}
        _hover={{ color: "#313131" }}
        onClick={onOpen}
      />
      <Modal size={{base: 'sm', md: 'lg'}} onClose={onClose} isOpen={isOpen} motionPreset="slideInBottom">
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
              onClick={() => removeNotes(id)}
            >
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteNotes;
