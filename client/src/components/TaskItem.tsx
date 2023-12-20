import { Card, CardBody, Flex, Text } from "@chakra-ui/react";
import { PiTrashSimpleFill } from "react-icons/pi";


interface Props {
    task: string
}

const TaskItem = ({task}: Props) => {
  return (
    <>
      <Card w={'30rem'} mt={'1rem'} borderRadius={'10px'}>
        <CardBody>
          <Flex  h={'15px'} justify={'space-between'} align={'center'}>
          <Text fontWeight={'bold'} fontSize={'18px'}>{task}</Text>
          <PiTrashSimpleFill cursor={'pointer'} size={'26px'} color={'red'} />
          </Flex>
        </CardBody>
      </Card>
    </>
  );
};

export default TaskItem;
