import { Card, CardBody, Flex, Text } from "@chakra-ui/react";
import axios from "axios";
import { RxCross2 } from "react-icons/rx";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";


interface Props {
    task: string
    _id: string
}

const TaskItem = ({task, _id}: Props) => {

  return (
    <>
      <Card w={'30rem'} mt={'1rem'} borderRadius={'10px'}>
        <CardBody>
          <Flex  h={'15px'} justify={'space-between'} align={'center'}>
          <Text fontWeight={'bold'} fontSize={'18px'}>{task}</Text>
          <Flex gap={'1rem'}>
          <EditModal task={task} _id={_id} />
          <DeleteModal task={task} _id={_id} />
          </Flex>
          </Flex>
        </CardBody>
      </Card>
    </>
  );
};

export default TaskItem;
