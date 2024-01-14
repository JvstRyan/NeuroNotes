import {  Flex, Text } from "@chakra-ui/react";
import { FaBookmark } from "react-icons/fa6";

const QuoteItem = () => {
  return (
    <>
        <Flex cursor={'pointer'} p={'5px'} borderRadius={'6px'} _hover={{bg: '#D9D9D9'}} color={"black"} mb={'10rem'} justify={'space-between'} align={'center'} w={'100%'}>
          <Flex align={'center'} gap={'5px'}>
            <FaBookmark size={19} />
            <Text as={'u'} whiteSpace={'none'} fontSize={'18px'} fontWeight={'600'}>
              The secret to wealth is to earn more than you spend.
            </Text>
          </Flex>
          <Flex align={'center'} >
            <Text as={'u'} fontSize={'18px'} fontWeight={'600'}>~ George Washington</Text>
          </Flex>
        </Flex>
    </>
  );
};

export default QuoteItem;
