import {  Flex, Checkbox,  Box,  Text } from "@chakra-ui/react"
import { useState } from "react"
import { CiEdit } from "react-icons/ci"
import DeleteModal from "./DeleteModal"
import EditModal from "./EditModal"

interface Props {
    goal: string
    _id: string
}

const GoalItem = ({goal, _id}: Props) => {
const [isChecked, setIsChecked] = useState(false)
const handleCheckBox = () => {
  setIsChecked(!isChecked)
}
  return (
    <>
     <Box w={{base: '24rem', sm:  '28rem', md: '35rem'}} mt={'1rem'} p={'15px'} pb={'1.5rem'}  borderBottom={'2px solid #000'}>
          <Flex  h={'15px'} justify={'space-between'} align={'center'}>
          <Flex gap={'1rem'} align={'center'} justify={'center'}>
          <Checkbox onChange={handleCheckBox} />
          <Text as={isChecked ? 'del' : 'b'} borderRadius={'5px'} colorScheme="blue" fontWeight={'600'} fontSize={'18px'}>{goal}</Text>
          </Flex>
          <Flex gap={'1rem'}>
          {/* <Text fontWeight={'bold'} fontSize={'17px'}>2023</Text> */}
         { !isChecked && <EditModal goal={goal} _id={_id} /> }
          <DeleteModal goal={goal} _id={_id}/>
          </Flex>
          </Flex>
      </Box>
    </>
  )
}

export default GoalItem