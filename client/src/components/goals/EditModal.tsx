import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, FormControl, FormLabel, Input} from "@chakra-ui/react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"
import { CiEdit } from "react-icons/ci"
import { patchGoal } from "../../api/goal-requests"

interface Props {
    goal: string
    _id: string
}

function EditModal({goal, _id}: Props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [updatedGoal, setUpdatedGoal] = useState('')


    const queryClient = useQueryClient()

    const mutation = useMutation({
      mutationFn: patchGoal,
      onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ['goals']})
      }
    })

    const updateGoal = (_id: string) => {
      mutation.mutate({id: _id, body: {goal: updatedGoal}})
      setUpdatedGoal('')
      onClose()
    }


    return (
      <>
        <CiEdit onClick={onOpen} cursor={'pointer'} size={'26px'}/>
        <Modal
        
          onClose={onClose}
          isOpen={isOpen}
          motionPreset='slideInBottom'
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Goal</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <FormControl>
              <FormLabel>Goal Name:</FormLabel>
              <Input 
              value={updatedGoal}
              onChange={(e) => setUpdatedGoal(e.target.value)}
              placeholder={goal} 
              focusBorderColor="black"
              />
            </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button variant='ghost' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button bg={'#5C5C5C'} _hover={{bg: '#313131'}} onClick={() => updateGoal(_id)} colorScheme='blue'>Update</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default EditModal