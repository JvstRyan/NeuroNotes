import {  Flex, Text } from "@chakra-ui/react";
import { FaBookmark } from "react-icons/fa6";
import { Quote } from "../../api/quote-request";

const QuoteItem = ({name, person, favourite, _id, note}: Quote) => {
  return (
    <>
        <Flex cursor={'pointer'} p={'5px'} borderRadius={'6px'} _hover={{bg: '#D9D9D9'}} color={"black"} mb={'1rem'} justify={'space-between'} align={'center'} w={'100%'}>
          <Flex align={'center'} gap={'5px'}>
            <FaBookmark size={19} />
            <Text as={'u'} whiteSpace={'none'} fontSize={'18px'} fontWeight={'600'}>
              {name}
            </Text>
          </Flex>
          <Flex align={'center'} >
            <Text as={'u'} fontSize={'18px'} fontWeight={'600'}>~ {person}</Text>
          </Flex>
        </Flex>
    </>
  );
};

export default QuoteItem;
