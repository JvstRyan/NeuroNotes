import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { RxCross2 } from "react-icons/rx"
import { deleteGoal } from "../../api/goal-requests"

interface Props {
    _id: string
    goal: string
}

function DeleteModal({ _id, goal}: Props) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const queryClient = useQueryClient()

    const mutation = useMutation({
      mutationFn: deleteGoal,
      onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ['goals']})
      }
    })

    const removeGoal = (_id: string) => {
      mutation.mutate(_id)
      onClose()
    }
    
    return (
      <>
        <RxCross2 onClick={onOpen} cursor={'pointer'} size={'26px'}/>
        <Modal
        
          onClose={onClose}
          isOpen={isOpen}
          motionPreset='slideInBottom'
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Delete Modal</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <Text>Are you sure you want to delete <b>"{goal}"</b> ?</Text>
            </ModalBody>
            <ModalFooter>
              <Button variant='ghost' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button onClick={() => removeGoal(_id)} color={'white'} bg={'default.200'} _hover={{bg: 'default.500'}}>Delete</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default DeleteModal