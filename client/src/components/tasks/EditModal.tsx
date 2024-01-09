import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, FormControl, FormLabel, Input} from "@chakra-ui/react"
import axios from "axios"
import { useState } from "react"
import { CiEdit } from "react-icons/ci"

interface Props {
    task: string
    _id: string
}

function EditModal({task, _id}: Props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [updatedTask, setUpdatedTask] = useState('')


    const updateTask = async (id: string) => {
        try {
         await axios.patch(`http://localhost:5000/api/tasks/${id}`, {name: updatedTask} )
         setUpdatedTask('')
        } catch(error) {
        console.error(error)
        }
    }

    const handleOpen = (id: string) => {
        updateTask(id)
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
            <ModalHeader>Edit Modal</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <FormControl>
              <FormLabel>Task Name:</FormLabel>
              <Input 
              value={updatedTask}
              onChange={(e) => setUpdatedTask(e.target.value)}
              placeholder={task} />
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