import {
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import NotesCard from "./FolderCard";
import NotesItem from "./NotesItem";
import axios from "axios";
import { useState, useEffect } from "react";
import FolderCard from "./FolderCard";

interface Props {
  name: string
  description: string
  folderId: string
}

interface Notes {
  id: string
  title: string
  description: string
  content: string
  folder: string
}



const NotesModal = ({name, description, folderId}: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [notes, setNotes] = useState<Notes[]>()

  useEffect( ()  =>  {
    const fetchNotes = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/notes?folderId=${folderId}`)
        console.log(folderId)
        console.log(response.data.note)
        setNotes(response.data.note)
      } catch(error) {
        console.error(error);
      }
    }
    fetchNotes()
  },[notes])


  return (
    <>
      <FolderCard title={name} onClick={onOpen} description={description} id={folderId} />
      
      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
        size={"full"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={"3rem"}>{name}</ModalHeader>
          <Text ml={"2rem"} maxW={"30%"}>
            {description}
          </Text>
          <Divider mt={"2rem"} />
          <ModalCloseButton />
          <ModalBody>
            <SimpleGrid mt="2rem" columns={4} spacing={5}>
              {notes?.map((item) => (
               <NotesItem key={item.id} title={item.title} description={item.description} content={item.content}   />
              ))}
            </SimpleGrid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NotesModal;
