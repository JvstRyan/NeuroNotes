import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
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
import { BsThreeDots } from "react-icons/bs";

interface Props {
  title: string
  description: string
  content: string
}



const NotesItem = ({title, description, content}: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();


  return (
    <>
      <Card
        _hover={{ backgroundColor: "#F0F0F0" }}
        cursor={"pointer"}
        minW={"xs"}
        minH={"xs"}
        borderRadius={"10px"}
        onClick={onOpen}
      >
        <CardHeader>
          <Flex justify={"space-between"} align={"center"}>
            <Text size={"15px"} fontWeight={"600"} color={"#5C5C5C"}>
              Notes
            </Text>
            <BsThreeDots size={30} cursor={"pointer"} />
          </Flex>
        </CardHeader>
        <CardBody>
          <Flex align={"center"} justify={"start"}>
            <Text size={"md"} pl={"10px"} pr={"10px"} noOfLines={3}>
             {description}
            </Text>
          </Flex>
        </CardBody>
        <CardFooter bg={"#5C5C5C"} mt={"3rem"}>
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
          <DrawerCloseButton zIndex={'10'} />
          <DrawerHeader>
            <Input
              fontSize={"2rem"}
              defaultValue={`Chest Day Routine`}
              variant={"unstyled"}
            />
          </DrawerHeader>
          <Textarea
            defaultValue=
            {description}
            ml={"2rem"}
            variant={'unstyled'}
            placeSelf={'start'}
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
