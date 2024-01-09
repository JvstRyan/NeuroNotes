import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, FormControl, FormLabel, Input} from "@chakra-ui/react"
import axios from "axios"
import { useState } from "react"
import { CiEdit } from "react-icons/ci"

interface Props {
    goal: string
    _id: string
}

function EditModal({goal, _id}: Props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [updatedGoal, setUpdatedGoal] = useState('')


    const updateGoal = async (id: string) => {
        try {
         await axios.patch(`http://localhost:5000/api/goals/${id}`, {goal: updatedGoal} )
         setUpdatedGoal('')
        } catch(error) {
        console.error(error)
        }
    }

    const handleOpen = (id: string) => {
        updateGoal(id)
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
              placeholder={goal} />
            </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button variant='ghost' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button bg={'#5C5C5C'} _hover={{bg: '#313131'}} onClick={() => handleOpen(_id)} colorScheme='blue'>Update</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default EditModal