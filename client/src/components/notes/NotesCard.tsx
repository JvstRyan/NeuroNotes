import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Flex,
    Text
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import { PiNoteBlankThin } from "react-icons/pi";

interface Props {
    onClick: () => void
}

const NotesCard = ({onClick}: Props) => {

  return (
    <>
      <Card
        _hover={{ backgroundColor: "#F0F0F0" }}
        cursor={"pointer"}
        minW={"sm"}
        borderRadius={"10px"}
        onClick={onClick}
      >
        <CardHeader>
          <Flex zIndex={'10'} justify={"space-between"} align={"center"}>
            <Text size={"15px"} fontWeight={"600"} color={"#5C5C5C"}>
              Notes
            </Text>
            <BsThreeDots zInde size={30} cursor={"pointer"} />
          </Flex>
        </CardHeader>
        <CardBody>
          <Flex align={"center"} justify={"center"}>
            <PiNoteBlankThin color={"#5C5C5C"} size={100} />
          </Flex>
        </CardBody>
        <CardFooter bg={"#5C5C5C"} mt={"3rem"}>
          <Flex align={"center"} justify={"space-between"}>
            <Text color={"white"} fontWeight={"500"}>
              Gym Progress
            </Text>
          </Flex>
        </CardFooter>
      </Card>
    </>
  );
};

export default NotesCard;
