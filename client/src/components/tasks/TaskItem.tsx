import { Card, CardBody, Checkbox, Flex, Text } from "@chakra-ui/react";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import { useState } from "react";


interface Props {
    task: string
    _id: string
}

const TaskItem = ({task, _id}: Props) => {

const [isChecked, setIsChecked] = useState(false)
const handleCheckBox = () => {
  setIsChecked(!isChecked)
}

  return (
    <>
      <Card w={{base: '410px', sm:  '448px', md: '560px'}} mt={'1rem'} borderRadius={'10px'}>
        <CardBody>
          <Flex  h={'15px'} justify={'space-between'} align={'center'}>
          <Flex gap={'1rem'} align={'center'} justify={'center'}>
          <Checkbox onChange={handleCheckBox} />
          <Text as={isChecked ? 'del' : 'b'} fontWeight={'600'}  fontSize={'18px'}>{task}</Text>
          </Flex>
          <Flex gap={'1rem'}>
         {!isChecked && <EditModal task={task} _id={_id} /> }
          <DeleteModal task={task} _id={_id} />
          </Flex>
          </Flex>
        </CardBody>
      </Card>
    </>
  );
};

export default TaskItem;
