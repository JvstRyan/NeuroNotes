import {
  Button,
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
import { RxCross2 } from "react-icons/rx";
import { deleteBooks } from "../../api/book-request";

interface Props {
  id: string;
  author: string;
}

const DeleteBook = ({ id, author }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deleteBooks,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
    },
  });

  const removeBook = (_id: string) => {
    mutation.mutate(_id);
    onClose();
  };

  return (
    <>
      <Button
        onClick={onOpen}
        bg={"default.100"}
        mb={"1rem"}
        alignItems={"center"}
        gap={"5px"}
      >
        Remove Book
      </Button>
      <Modal onClose={onClose} isOpen={isOpen} motionPreset="slideInBottom">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete Book</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Are you sure you want to delete <b>{author}'s</b> book ?
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              bg={"default.200"}
              _hover={{ bg: "default.500" }}
              colorScheme="blue"
              onClick={() => removeBook(id)}
            >
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteBook;
