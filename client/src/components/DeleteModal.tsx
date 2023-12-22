import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"
import axios from "axios"
import { RxCross2 } from "react-icons/rx"

interface Props {
    _id: string
    task: string
}

function EditModal({ _id, task}: Props) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const deleteTask = async (_id: string) => {
        try {
        await axios.delete(`http://localhost:5000/api/tasks/${_id}`)
        } catch(error) {
            console.error(`${error}`)
        }
    }
   
    const handleDelete = (id: string) => {
        deleteTask(id)
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
            <ModalHeader>Edit Modal</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <Text>Are you sure you want to delete <b>"{task}"</b> ?</Text>
            </ModalBody>
            <ModalFooter>
              <Button variant='ghost' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button onClick={() => handleDelete(_id)} colorScheme='red'>Delete</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default EditModal