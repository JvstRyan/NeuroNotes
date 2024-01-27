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
import { deleteFolder } from "../../api/folder-requests";

interface Props {
  id: string;
  title: string;
}

const DeleteFolder = ({ id, title }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

 const queryClient = useQueryClient()

 const mutation = useMutation({
  mutationFn: deleteFolder,
  onSuccess: () => {
    queryClient.invalidateQueries({queryKey: ['folders']})
  }
 })

 const removeFolder = (id: string) => {
  mutation.mutate(id)
 }

  return (
    <>
      <Icon
        as={FaTrash}
        cursor={"pointer"}
        color={"default.200"}
        boxSize={6}
        onClick={onOpen}
        _hover={{ color: "default.500" }}
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
              bg={"default.200"}
              _hover={{ bg: "default.500" }}
              colorScheme="blue"
              onClick={() => removeFolder(id)}
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

