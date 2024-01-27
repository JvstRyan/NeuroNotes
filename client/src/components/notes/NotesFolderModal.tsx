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
  useDisclosure,
} from "@chakra-ui/react";
import NotesItem from "./NotesItem";
import FolderCard from "../folders/FolderCard";
import { useQuery } from "@tanstack/react-query";
import { fetchNotes } from "../../api/note-requests";
import AddNotes from "./AddNotes";

interface Props {
  name: string;
  description: string;
  folderId: string;
}

interface Notes {
  _id: string;
  title: string;
  description: string;
  content: string;
  folder: string;
}

const NotesModal = ({ name, description, folderId }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { data: notes } = useQuery<Notes[]>({
    queryKey: ["notes", folderId],
    queryFn: () => fetchNotes(folderId),
  });

  return (
    <>
      <FolderCard
        title={name}
        onClick={onOpen}
        description={description}
        id={folderId}
      />

      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
        size={"full"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={"3rem"}>{name}</ModalHeader>
          <Text ml={"2rem"} maxW={{base: "50%", md: '30%'}}>
            {description}
          </Text>
          <Divider mt={"2rem"} />
          <ModalCloseButton />
          <ModalBody>
            <SimpleGrid
              mt="2rem"
              placeItems={'center'}
              rowGap={'6'}
              columns={{ base: 1, md: 4 }}
            >
              {notes?.map((item) => (
                <NotesItem
                  key={item._id}
                  title={item.title}
                  description={item.description}
                  content={item.content}
                  _id={item._id}
                />
              ))}
              <AddNotes foldId={folderId} />
            </SimpleGrid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NotesModal;
