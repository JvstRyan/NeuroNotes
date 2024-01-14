import {  Flex, Checkbox,  Box,  Text } from "@chakra-ui/react"
import { useState } from "react"
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
     <Box w={{base: '410px', sm:  '448px', md: '560px'}} mt={'1rem'} p={'15px'} pb={'1.45rem'}  borderBottom={'2px solid #000'}>
          <Flex  h={'15px'} justify={'space-between'} align={'center'}>
          <Flex gap={'1rem'} align={'center'} justify={'center'}>
          <Checkbox colorScheme="green" onChange={handleCheckBox} />
          <Text as={isChecked ? 'del' : 'b'} borderRadius={'5px'} color={'black'} fontWeight={'600'} fontSize={'18px'}>{goal}</Text>
          </Flex>
          <Flex gap={'1rem'}>
         { !isChecked && <EditModal goal={goal} _id={_id} /> }
          <DeleteModal goal={goal} _id={_id}/>
          </Flex>
          </Flex>
      </Box>
    </>
  )
}

export default GoalItem