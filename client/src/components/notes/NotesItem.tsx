import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Collapse,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Input,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { patchNotes } from "../../api/note-requests";
import DeleteNotes from "./DeleteNotes";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface Props {
  title: string;
  description: string;
  content: string;
  _id: string;
}

const NotesItem = ({
  title: propTitle,
  description: propDescription,
  content: propContent,
  _id,
}: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showIcons, setShowIcons] = useState(false);

  const [noteTitle, setNoteTitle] = useState(propTitle);
  const [noteDescription, setNoteDescription] = useState(propDescription);
  const [noteContent, setNoteContent] = useState(propContent);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: patchNotes,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
  });

  const updateNotes = (_id: string) => {
    const title = noteTitle !== "" ? noteTitle : propTitle;
    const description =
      noteDescription !== "" ? noteDescription : propDescription;
    const content = noteContent !== "" ? noteContent : propContent;
    if (
      noteTitle !== propTitle ||
      noteDescription !== propDescription ||
      noteContent !== propContent
    ) {
      mutation.mutate({ id: _id, body: { title, description, content } });
    }
    onClose();
  };


  return (
    <>
      <Card w={{ base: "350px" }} minH={"xs"} borderRadius={"10px"}>
        <CardHeader>
          <Flex justify={"space-between"} align={"center"}>
            <Text size={"15px"} fontWeight={"600"} color={"#5C5C5C"}>
              Notes
            </Text>
            <Flex
              gap={"5px"}
              align={"center"}
              zIndex={"10"}
              direction={"column"}
            >
              <BsThreeDots
                size={30}
                cursor={"pointer"}
                onClick={() => setShowIcons(!showIcons)}
              />
              <Box
                zIndex={"12"}
                alignItems={"center"}
                pos={"absolute"}
                top={"50px"}
              >
                <Collapse in={showIcons} animateOpacity>
                  <Flex direction={"column"} gap={"8px"}>
                    <DeleteNotes title={propTitle} id={_id} />
                  </Flex>
                </Collapse>
              </Box>
            </Flex>
          </Flex>
        </CardHeader>
        <CardBody>
        </CardBody>
        <CardFooter
          bg={"#5C5C5C"}
          mt={"3rem"}
          onClick={onOpen}
          _hover={{ backgroundColor: "#313131" }}
          cursor={"pointer"}
        >
          <Flex align={"center"} justify={"space-between"}>
            <Text color={"white"} fontWeight={"600"}>
              {propTitle}
            </Text>
          </Flex>
        </CardFooter>
      </Card>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={() => updateNotes(_id)}
        size="lg"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton zIndex={"10"} />
          <DrawerHeader>
            <Input
              fontSize={"2rem"}
              defaultValue={propTitle}
              variant={"unstyled"}
              onChange={(e) => setNoteTitle(e.target.value)}
              spellCheck={false}
            />
          </DrawerHeader>
          <Textarea
            defaultValue={propDescription}
            ml={"2rem"}
            variant={"unstyled"}
            placeSelf={"start"}
            onChange={(e) => setNoteDescription(e.target.value)}
            placeholder="Add a descripton to your note!"
            spellCheck={false}
          ></Textarea>
          <Divider />
          <DrawerBody mt={"1rem"}>
            {/* <Textarea
              color={"black"}
              h={"100%"}
              w={"100%"}
              variant={"unstyled"}
              resize={"none"}
              _focus={{ outline: "none" }}
              defaultValue={propContent}
              onChange={(e) => setNoteContent(e.target.value)}
              placeholder="Start writing your note!"
              spellCheck={false}
            ></Textarea> */}
            <ReactQuill style={{height: '100%', width: '100%', padding: '0px'}} theme="snow" value={noteContent} onChange={setNoteContent} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NotesItem;
