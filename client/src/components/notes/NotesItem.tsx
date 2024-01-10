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
  Icon,
  Input,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaTrash } from "react-icons/fa6";

interface Props {
  title: string;
  description: string;
  content: string;
  id: string
}

const NotesItem = ({ title, description, content, id }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showIcons, setShowIcons] = useState(false);

  const [noteTitle, setNoteTitle] = useState('')
  const [noteDescription, setNoteDescription] = useState('')
  const [noteContent, setNoteContent] = useState('')

  return (
    <>
      <Card minW={"xs"} minH={"xs"} borderRadius={"10px"}>
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
                    <Icon
                      as={FaTrash}
                      cursor={"pointer"}
                      color={"#5C5C5C"}
                      boxSize={6}
                      _hover={{ color: "#313131" }}
                    />
                  </Flex>
                </Collapse>
              </Box>
            </Flex>
          </Flex>
        </CardHeader>
        <CardBody>
          <Flex align={"center"} justify={"start"}>
            <Text onClick={onOpen} cursor={'pointer'} size={"md"} pr={'25px'} noOfLines={3}>
              {content}
            </Text>
          </Flex>
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
              {title}
            </Text>
          </Flex>
        </CardFooter>
      </Card>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton zIndex={"10"} />
          <DrawerHeader>
            <Input
              fontSize={"2rem"}
              defaultValue={title}
              variant={"unstyled"}
            />
          </DrawerHeader>
          <Textarea
            defaultValue={description}
            ml={"2rem"}
            variant={"unstyled"}
            placeSelf={"start"}
          ></Textarea>
          <Divider />
          <DrawerBody>
            <Textarea
              color={"black"}
              h={"100%"}
              w={"100%"}
              variant={"unstyled"}
              resize={"none"}
              _focus={{ outline: "none" }}
              defaultValue={content}
            ></Textarea>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NotesItem;
