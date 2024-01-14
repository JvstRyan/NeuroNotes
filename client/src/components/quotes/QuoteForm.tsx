import { Box, Button, Divider, Flex, Spacer, Spinner, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import QuoteItem from "./QuoteItem";
import { useQuery } from "@tanstack/react-query";
import { Quote, fetchQuotes } from "../../api/quote-request";
import CreateQuote from "./CreateQuote";



const QuoteForm = () => {
  const [selectedButton, setSelectedButton] = useState('true');
  const [statement, setStatement] = useState('true')

  const {data: quotes, isLoading} = useQuery<Quote[]>({
      queryKey: ['quotes', statement],
      queryFn: () => fetchQuotes(statement)
  })

  const handleTrueClick = () => {
    setSelectedButton("true")
    setStatement('true')
  }

  const handleFalseClick = () => {
    setSelectedButton('false')
    setStatement('false')
  }

  return (
    <>
      <Text
        fontWeight={"600"}
        fontSize={"26px"}
        color="default.500"
        mt={"1rem"}
      >
        Quotes
      </Text>
      <Flex mt={'5px'} justify={"space-between"} align={"center"}>
        <Flex>
          <Flex direction={'column'}>
            <Button
              fontSize={"16px"}
              color={"default.200"}
              variant={"none"}
              onClick={handleTrueClick}
            >
              <FaStar size={16} />
              <Spacer w={"3px"} />
              Favourite
            </Button>
            {selectedButton === 'true' && <Divider borderColor={'black'}/>}
          </Flex>
          <Flex direction={'column'}>
          <Button fontSize={"16px"} color={"default.200"} variant={"none"}
          onClick={handleFalseClick}>
            <FaClock size={15} />
            <Spacer w={"3px"} />
            Recently Added
          </Button>
          {selectedButton === 'false' && <Divider borderColor={'black'}/>}
          </Flex>
        </Flex>
       <CreateQuote />
      </Flex>
      <Box w={'100%'}>
      <Divider borderColor={"black"} w={'100%'} />
      </Box>
      <Flex mt={"1rem"} w={'100%'} h={'100%'} direction={'column'}>
      {isLoading ? <Spinner /> : ''}
        {quotes?.map((item) => (
            <QuoteItem key={item._id} name={item.name} person={item.person} favourite={item.favourite} _id={item._id} note={item.note} />
        ))}
      </Flex>
    </>
  );
};

export default QuoteForm;
