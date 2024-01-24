import {
  Box,
  Button,
  Divider,
  Flex,
  SimpleGrid,
  Spacer,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaSquareCheck } from "react-icons/fa6";
import { FaBookBookmark } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa6";
import BookItem from "./BookItem";
import { useFetchBooks } from "../../api/book-request";
import CreateBook from "./CreateBook";

const BookForm = () => {
  const [selectedButton, setSelectedButton] = useState("books");
  const [statement, setStatement] = useState<boolean | undefined>(undefined)
  const {data: books, isFetching} = useFetchBooks(statement)

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
      <Flex mt={"5px"} justify={"space-between"} align={"center"}>
        <Flex>
          <Flex direction={"column"}>
            <Button
              fontSize={"16px"}
              color={"default.200"}
              variant={"none"}
              onClick={() => {setSelectedButton("books"); setStatement(undefined)}}
            >
              <FaBookBookmark size={16} />
              <Spacer w={"3px"} />
              All Books
            </Button>
            {selectedButton === "books" && <Divider borderColor={"black"} />}
          </Flex>
          <Flex direction={"column"}>
            <Button
              fontSize={"16px"}
              color={"default.200"}
              variant={"none"}
              onClick={() => {setSelectedButton("reading"); setStatement(true)}}
            >
              <FaBookOpen size={17} />
              <Spacer w={"4px"} />
              Reading
            </Button>
            {selectedButton === "reading" && <Divider borderColor={"black"} />}
          </Flex>
          <Flex direction={"column"}>
            <Button
              fontSize={"16px"}
              color={"default.200"}
              variant={"none"}
              onClick={() => {setSelectedButton("read"); setStatement(false)}}
            >
              <FaSquareCheck size={16} />
              <Spacer w={"4px"} />
              Read
            </Button>
            {selectedButton === "read" && <Divider borderColor={"black"} />}
          </Flex>
        </Flex>
        <CreateBook />
      </Flex>
      <Box w={"100%"}>
        <Divider borderColor={"black"} w={"100%"} />
      </Box>
      <SimpleGrid
          columns={{ sm: 1, md: 3 }}
          alignItems={"center"}
          justifyItems={"center"}
          spacingX={6}
          mb={'5rem'}
          mt={'1rem'}
        >
         { isFetching ? <Spinner /> : ''}
          {
            books?.map((item) => (
              <BookItem 
              key={item._id}
              name={item.name}
              author={item.author}
              totalpages={item.totalpages}
              currentpage={item.currentpage}
              notes={item.notes}
              reading={item.reading}
              _id={item._id}
              />
            ))
          }
        

        </SimpleGrid>
    </>
  );
};

export default BookForm;
