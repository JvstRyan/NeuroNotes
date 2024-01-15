import { Box, Button, Divider, Flex, Spacer, Spinner, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaPlus, FaSquareCheck } from "react-icons/fa6";
import { FaBookBookmark } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa6";


const BookForm = () => {
  const [selectedButton, setSelectedButton] = useState('books');
//   const [statement, setStatement] = useState('true')

//   const {data: quotes, isLoading} = useQuery<Quote[]>({
//       queryKey: ['quotes', statement],
//       queryFn: () => fetchQuotes(statement)
//   })

  

  return (
    <>
      <Text
        fontWeight={"600"}
        fontSize={"26px"}
        color="default.500"
        mt={"3rem"}
      >
        Books
      </Text>
      <Flex mt={'5px'} justify={"space-between"} align={"center"}>
        <Flex>
          <Flex direction={'column'}>
            <Button
              fontSize={"16px"}
              color={"default.200"}
              variant={"none"}
              onClick={() => setSelectedButton('books')}
            >
             <FaBookBookmark size={16} />
              <Spacer w={"3px"} />
              All Books
            </Button>
            {selectedButton === 'books' && <Divider borderColor={'black'}/>}
          </Flex>
          <Flex direction={'column'}>
          <Button fontSize={"16px"} color={"default.200"} variant={"none"}
          onClick={() => setSelectedButton('reading')}>
            <FaBookOpen size={17} />
            <Spacer w={"4px"} />
            Reading
          </Button>
          {selectedButton === 'reading' && <Divider borderColor={'black'}/>}
          </Flex>
          <Flex direction={'column'}>
          <Button fontSize={"16px"} color={"default.200"} variant={"none"}
          onClick={() => setSelectedButton('read')}>
            <FaSquareCheck size={16} />
            <Spacer w={"4px"} />
            Read
          </Button>
          {selectedButton === 'read' && <Divider borderColor={'black'}/>}
          </Flex>
        </Flex>
        <Button
          fontSize={"16px"}
          variant={"none"}
          >
          <FaPlus size={16} />
          <Spacer w={"3px"} />
         New Book
      </Button>
      </Flex>
      <Box w={'100%'}>
      <Divider borderColor={"black"} w={'100%'} />
      </Box>
      <Flex mt={"1rem"} w={'100%'} h={'100%'} direction={'column'}>
      {/* {isLoading ? <Spinner /> : ''}
        {quotes?.map((item) => (
            <QuoteItem key={item._id} name={item.name} person={item.person} favourite={item.favourite} _id={item._id} note={item.note} />
        ))} */}
      </Flex>
    </>
  );
};

export default BookForm;
