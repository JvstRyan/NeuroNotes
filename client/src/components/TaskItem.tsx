import { Card, CardBody, Flex, Text } from "@chakra-ui/react";
import axios from "axios";
import { RxCross2 } from "react-icons/rx";
import EditModal from "./EditModal";


interface Props {
    task: string
    _id: string
}

const TaskItem = ({task, _id}: Props) => {

    const deleteTask = async (_id: string) => {
        try {
        await axios.delete(`http://localhost:5000/api/tasks/${_id}`)
        } catch(error) {
            console.error(`${error}`)
        }
    }

    const handleDelete = (_id: string) => {
        deleteTask(_id)
    }


  return (
    <>
      <Card w={'30rem'} mt={'1rem'} borderRadius={'10px'}>
        <CardBody>
          <Flex  h={'15px'} justify={'space-between'} align={'center'}>
          <Text fontWeight={'bold'} fontSize={'18px'}>{task}</Text>
          <Flex gap={'1rem'}>
          <EditModal task={task} _id={_id} />
          <RxCross2 onClick={() => handleDelete(_id)} cursor={'pointer'} size={'26px'}/>
          </Flex>
          </Flex>
        </CardBody>
      </Card>
    </>
  );
};

export default TaskItem;
