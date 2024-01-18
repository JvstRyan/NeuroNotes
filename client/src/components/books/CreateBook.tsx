import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { createBooks } from "../../api/book-request";

const CreateBook = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [bookName, setBookName] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookTotalPage, setBookTotalPage] = useState("");
  const [bookCurrentPage, setBookCurrentPage] = useState("");
  const [bookNotes, setBookNotes] = useState("");

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createBooks,
    onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ['books']})
    }
  })

  const postBook = () => {
    mutation.mutate({name: bookName, author: bookAuthor, totalpages: bookTotalPage, currentpage: bookCurrentPage, notes: bookNotes, reading: true})
    onClose()
  }

  return (
    <>
      <Button fontSize={"16px"} variant={"none"} onClick={onOpen}>
        <FaPlus size={16} />
        <Spacer w={"3px"} />
        New Book
      </Button>
      <Modal onClose={onClose} isOpen={isOpen} motionPreset="slideInBottom">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Book</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <Flex mt={"10px"} mb={"10px"} direction={"column"}>
                <FormLabel>Book:</FormLabel>
                <Input
                  focusBorderColor="black"
                  spellCheck={false}
                  onChange={(e) => setBookName(e.target.value)}
                ></Input>
              </Flex>
              <FormLabel>Author:</FormLabel>
              <Input
                focusBorderColor="black"
                spellCheck={false}
                onChange={(e) => setBookAuthor(e.target.value)}
              />
              <Flex mt={"10px"} mb={"10px"} direction={"column"}>
                <FormLabel>Total pages:</FormLabel>
                <Input
                  type={"number"}
                  focusBorderColor="black"
                  spellCheck={false}
                  onChange={(e) => setBookTotalPage(e.target.value)}
                ></Input>
              </Flex>
              <Flex mt={"10px"} mb={"10px"} direction={"column"}>
                <FormLabel>Current page:</FormLabel>
                <Input
                  focusBorderColor="black"
                  spellCheck={false}
                  onChange={(e) => setBookCurrentPage(e.target.value)}
                  type={"number"}
                ></Input>
              </Flex>
              <Flex mt={"10px"} direction={"column"}>
                <FormLabel>Notes:</FormLabel>
                <Textarea
                  h={"7rem"}
                  focusBorderColor="black"
                  spellCheck={false}
                  onChange={(e) => setBookNotes(e.target.value)}
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
                onClick={postBook}
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

export default CreateBook;
