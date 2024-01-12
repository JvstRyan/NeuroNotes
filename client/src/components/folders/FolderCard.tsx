import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Collapse,
  Flex,
  Text
} from "@chakra-ui/react";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { PiNoteBlankThin } from "react-icons/pi";
import DeleteFolder from "./DeleteFolder";
import EditFolder from "./EditFolder";

interface Props {
  onClick: () => void;
  title: string;
  description: string
  id: string
}



const NotesCard = ({ onClick, title, description, id }: Props) => {
  const [showIcons, setShowIcons] = useState(false);

  return (
    <>
      <Card w={{sm: 'md', md: 'sm'}} h={"xs"} mb={"1rem"} borderRadius={"10px"}>
        <CardHeader>
          <Flex zIndex={"10"} justify={"space-between"} align={"center"}>
            <Text size={"15px"} fontWeight={"600"} color={"#5C5C5C"}>
              Folder
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
                    <EditFolder title={title} description={description} _id={id} />
                    <DeleteFolder id={id} title={title} />
                  </Flex>
                </Collapse>
              </Box>
            </Flex>
          </Flex>
        </CardHeader>
        <CardBody>
          <Flex align={"center"} justify={"center"}>
            <PiNoteBlankThin onClick={onClick} cursor={'pointer'} color={"#5C5C5C"} size={100} />
          </Flex>
        </CardBody>
        <CardFooter
          bg={"#5C5C5C"}
          mt={"3rem"}
          onClick={onClick}
          _hover={{ backgroundColor: "#313131" }}
          cursor={"pointer"}
        >
          <Flex align={"center"} justify={"space-between"}>
            <Text color={"white"} fontWeight={"500"}>
              {title}
            </Text>
          </Flex>
        </CardFooter>
      </Card>
    </>
  );
};

export default NotesCard;
