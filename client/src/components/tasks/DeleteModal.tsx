import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { RxCross2 } from "react-icons/rx"
import { deleteTask } from "../../api/task-requests"

interface Props {
    _id: string
    task: string
}

function DeleteModal({ _id, task}: Props) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const queryClient = useQueryClient()

    const mutation = useMutation({
      mutationFn: deleteTask,
      onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ['tasks']})
      }
    })

    const removeTask = (id: string) => {
      mutation.mutate(id)
      onClose()
    }


    // const handleDelete = (id: string) => {
    //     deleteTask(id)
    //     onClose()
    // }

    return (
      <>
        <RxCross2 onClick={onOpen} cursor={'pointer'} size={'26px'}/>
        <Modal
          size={{base: 'sm', md: 'lg'}}
          onClose={onClose}
          isOpen={isOpen}
          motionPreset='slideInBottom'
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Delete Modal</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <Text>Are you sure you want to delete <b>"{task}"</b> ?</Text>
            </ModalBody>
            <ModalFooter>
              <Button variant='ghost' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button onClick={() => removeTask(_id)} color={'white'} bg={'default.200'} >Delete</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default DeleteModal