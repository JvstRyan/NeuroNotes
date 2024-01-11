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
} from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { patchTask } from "../../api/task-requests";

interface Props {
  task: string;
  _id: string;
}

function EditModal({ task, _id }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [updatedTask, setUpdatedTask] = useState("");

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: patchTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const updateTask = (_id: string) => {
    mutation.mutate({ id: _id, body: { name: updatedTask } });
    setUpdatedTask("");
    onClose();
  };

  return (
    <>
      <CiEdit onClick={onOpen} cursor={"pointer"} size={"26px"} />
      <Modal onClose={onClose} isOpen={isOpen} motionPreset="slideInBottom">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Task Name:</FormLabel>
              <Input
                value={updatedTask}
                onChange={(e) => setUpdatedTask(e.target.value)}
                placeholder={task}
                focusBorderColor="black"
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              bg={"#5C5C5C"}
              _hover={{ bg: "#313131" }}
              onClick={() => updateTask(_id)}
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

export default EditModal;
