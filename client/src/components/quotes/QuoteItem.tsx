import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import { FaBookmark } from "react-icons/fa6";

const QuoteItem = () => {
  return (
    <>
        <Flex color={"default.500"} mb={'10rem'} justify={'space-between'} align={'center'} w={'100%'}>
          <Flex align={'center'} gap={'5px'}>
            <FaBookmark size={18} />
            <Text  fontSize={'18px'} fontWeight={'600'} noOfLines={1} maxW={"80%"}>
              The secret to wealth is to earn more than you spend.
            </Text>
          </Flex>
          <Box>
            <Text  fontSize={'18px'} fontWeight={'600'}>George Washington</Text>
          </Box>
        </Flex>

    </>
  );
};

export default QuoteItem;
