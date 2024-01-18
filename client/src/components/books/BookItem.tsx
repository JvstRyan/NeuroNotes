import {
  Badge,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Input,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { FaBookOpen } from "react-icons/fa";
import { Progress } from "@chakra-ui/react";
import { IoPersonOutline } from "react-icons/io5";
import { SlNotebook } from "react-icons/sl";
import { FaBookBookmark } from "react-icons/fa6";
import { Books, updateBooks } from "../../api/book-request";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import DeleteBook from "./DeleteBook";

const BookItem = ({
  _id,
  name: propName,
  author: propAuthor,
  totalpages: propTotalPages,
  currentpage: propCurrentPage,
  notes: propNotes,
  reading: propReading,
}: Books) => {
  // const [showIcons, setShowIcons] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [bookTitle, setBookTitle] = useState(propName);
  const [bookAuthor, setBookAuthor] = useState(propAuthor);
  const [bookTotalP, setBookTotalP] = useState(propTotalPages);
  const [bookCurrentP, setBookCurrentP] = useState(propCurrentPage);
  const [bookNotes, setBookNotes] = useState(propNotes);
  const [reading, setReading] = useState(false)

  const percentageBook = (
    (Number(propCurrentPage) / Number(propTotalPages)) *
    100
  ).toFixed(0);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: updateBooks,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
    },
  });

  // const patchQuotes = () => {
  //   const name = quoteName !== '' ? quoteName : propName
  //   const person = quotePerson !== '' ? quotePerson : propPerson
  //   const favourite = quoteFavourite !== propFavourite ? quoteFavourite : propFavourite
  //   const note = quoteNote !== '' ? quoteNote : propNote
  //   if(quoteName !== propName || quotePerson !== propPerson || quoteFavourite !== propFavourite || quoteNote !== propNote) {
  //       mutation.mutate({id: _id, body: {name, person, favourite, note}})
  //   }
  //   onClose()
  // }

  const patchBook = () => {
    const name = bookTitle !== "" ? bookTitle : propName;
    const author = bookAuthor !== "" ? bookAuthor : propAuthor;
    const totalpages = bookTotalP !== "" ? bookTotalP : propTotalPages;
    const currentpage = bookCurrentP !== "" ? bookCurrentP : propCurrentPage;
    const notes = bookNotes !== "" ? bookNotes : propNotes;
    let readingstatus = currentpage === totalpages ? false : true;
    setReading(readingstatus);  
    if (
      bookTitle !== propName ||
      bookAuthor !== propAuthor ||
      bookTotalP !== propTotalPages ||
      bookCurrentP !== propCurrentPage ||
      bookNotes !== propNotes ||
      reading !== propReading
    ) {
      mutation.mutate({
        id: _id,
        body: { name, author, totalpages, currentpage, notes, reading: readingstatus },
      });
    }
    onClose()
  };

  return (
    <>
      <Card
        w={{ base: "450px", md: "385px" }}
        h={"xs"}
        mb={"1rem"}
        borderRadius={"10px"}
      >
        <CardHeader></CardHeader>
        <CardBody>
          <Flex align={"center"} justify={"center"} direction={"column"}>
            <FaBookOpen
              cursor={"pointer"}
              onClick={onOpen}
              color={"#393733"}
              size={100}
            />
            <Badge
              isTruncated
              colorScheme="default"
              bg={"default.200"}
              color={"white"}
              fontWeight={"600"}
              fontSize={"17px"}
              mt={"5px"}
              maxW={"60%"}
            >
              {propName}
            </Badge>
          </Flex>
          <Divider mt={"2rem"} />
        </CardBody>
        <CardFooter cursor={"pointer"} onClick={onOpen} mt={"-2rem"}>
          <Flex color={"default.200"} direction={"column"} justify={"start"}>
            <Flex gap={"7px"} align={"center"}>
              <FaBookBookmark />
              <Text
                fontWeight={"600"}
                maxWidth={"90%"}
                whiteSpace={"nowrap"}
                isTruncated
                fontSize={"17px"}
              >
                {propName}
              </Text>
            </Flex>
            <Text mb={"3px"}>{propAuthor}</Text>
            <Flex align={"center"} gap={"10px"}>
              <Text fontSize={"15px"} fontWeight={"600"}>
                {`${percentageBook} %`}
              </Text>
              <Progress
                borderRadius={"5px"}
                w={"5rem"}
                size={"sm"}
                h={"5px"}
                colorScheme="default"
                bg={"lightgrey"}
                value={Number(percentageBook)}
              />
            </Flex>
          </Flex>
        </CardFooter>
      </Card>
      <Drawer isOpen={isOpen} placement="right" onClose={patchBook} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton zIndex={"10"} />
          <DrawerHeader width={"100%"}>
            <Textarea
              color={"default.500"}
              fontWeight={"600"}
              fontSize={"2rem"}
              defaultValue={propName}
              variant={"unstyled"}
              onChange={(e) => setBookTitle(e.target.value)}
              spellCheck={false}
              whiteSpace={"none"}
              w={"100%"}
              h={"7rem"}
            />
          </DrawerHeader>
          <Divider />
          <DrawerBody mt={"1rem"}>
            <Flex
              fontSize={"18px"}
              justify={"start"}
              align={"start"}
              direction={"column"}
            >
            <DeleteBook author={propAuthor} id={_id} />
              <Flex align={"center"}>
                <Flex color={"default.200"} align={"center"} gap={"5px"}>
                  <IoPersonOutline size={20} />
                  <Text>Author:</Text>
                </Flex>
                <Input
                  w={"100%"}
                  defaultValue={propAuthor}
                  onChange={(e) => setBookAuthor(e.target.value)}
                  variant={"none"}
                  fontSize={"18px"}
                  spellCheck={false}
                ></Input>
              </Flex>
              <Flex align={"center"}>
                <Flex color={"default.200"} align={"center"} gap={"5px"}>
                  <IoPersonOutline size={20} />
                  <Text whiteSpace={"nowrap"}>Total Pages:</Text>
                </Flex>
                <Input
                  w={"100%"}
                  defaultValue={propTotalPages}
                  onChange={(e) => setBookTotalP(e.target.value)}
                  variant={"none"}
                  fontSize={"18px"}
                  spellCheck={false}
                ></Input>
              </Flex>
              <Flex align={"center"}>
                <Flex color={"default.200"} align={"center"} gap={"5px"}>
                  <IoPersonOutline size={20} />
                  <Text whiteSpace={"nowrap"}>Current Page:</Text>
                </Flex>
                <Input
                  w={"100%"}
                  defaultValue={propCurrentPage}
                  onChange={(e) => setBookCurrentP(e.target.value)}
                  variant={"none"}
                  fontSize={"18px"}
                  spellCheck={false}
                ></Input>
              </Flex>
              <Flex
                mt={"5px"}
                color={"default.200"}
                align={"center"}
                gap={"15px"}
              >
                <Flex align={"center"} gap={"5px"}>
                  <SlNotebook size={20} />
                  <Text>Notes:</Text>
                </Flex>
              </Flex>
              <Divider mt={"20px"} />
              <Textarea
                defaultValue={propNotes}
                onChange={(e) => setBookNotes(e.target.value)}
                mt={"10px"}
                fontSize={"18px"}
                color={"default.500"}
                variant={"none"}
                minH={"15rem"}
                spellCheck={false}
              ></Textarea>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default BookItem;
