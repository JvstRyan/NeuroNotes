import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
} from "@chakra-ui/react";
import NotesCard from "./NotesCard";
import { BsThreeDots } from "react-icons/bs";

const NotesModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <NotesCard onClick={onOpen} />
      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
        size={"full"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={"3rem"}>Gym Progress</ModalHeader>
          <Text ml={"2rem"} maxW={"30%"}>
            Collection of notes documenting my progress in the gym, to keep
            track of my personal records and growth.
          </Text>
          <Divider mt={"2rem"} />
          <ModalCloseButton />
          <ModalBody>
            <Card minW={"sm"} borderRadius={"10px"}>
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
                  <Text>
                    Warm-up: 5-10 minutes of light cardio (e.g., jogging,
                    jumping jacks) Dynamic stretches for the upper body (arm
                    circles, shoulder rolls) Chest Day Routine: Barbell Bench
                    Press: Warm-up: 1 set of 12-15 reps with light weight
                    Working Sets: 4 sets of 8-12 reps Rest: 2 minutes between
                    sets Incline Dumbbell Press: 3 sets of 10-12 reps Rest: 1.5
                    minutes between sets Dumbbell Flyes: 3 sets of 12-15 reps
                    Focus on a controlled, smooth movement Rest: 1.5 minutes
                    between sets Chest Dips: 3 sets of 10-15 reps Use parallel
                    bars or assisted dip machine if needed Rest: 1.5 minutes
                    between sets Push-ups: 3 sets to failure Perform regular
                    push-ups or modify based on your fitness level Rest: 1
                    minute between sets Cable Crossover: 3 sets of 12-15 reps
                    Use cables or resistance bands for chest isolation Focus on
                    squeezing the chest at the peak of the movement Rest: 1.5
                    minutes between sets Cool Down: 5-10 minutes of light cardio
                    (e.g., brisk walking) Static stretching for the chest and
                    shoulders
                  </Text>
                </Flex>
              </CardBody>
              <CardFooter bg={"#5C5C5C"} mt={"3rem"}>
                <Flex align={"center"} justify={"space-between"}>
                  <Text color={"white"} fontWeight={"600"}>
                    Chest Day Routine
                  </Text>
                </Flex>
              </CardFooter>
            </Card>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NotesModal;
