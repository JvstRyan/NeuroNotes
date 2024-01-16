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
import { CiSquareCheck } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { SlNotebook } from "react-icons/sl";
import { FaBookBookmark } from "react-icons/fa6";

const BookItem = () => {
  // const [showIcons, setShowIcons] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

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
            <FaBookOpen cursor={"pointer"} onClick={onOpen} color={"#393733"} size={100} />
            <Badge
              isTruncated
              colorScheme="default"
              bg={"default.200"}
              color={"white"}
              fontWeight={"600"}
              fontSize={"17px"}
              mt={"5px"}
              maxW={'60%'}
            >
             Atomic Habits
            </Badge>
          </Flex>
          <Divider mt={'2rem'} />
        </CardBody>
        <CardFooter
          cursor={"pointer"}
          onClick={onOpen}
          mt={'-2rem'}
        >
          <Flex color={'default.200'} direction={"column"}  justify={"start"}>
            <Flex gap={'7px'} align={'center'}>
            <FaBookBookmark  />
            <Text fontWeight={'600'} maxWidth={'90%'} whiteSpace={'nowrap'} isTruncated fontSize={'17px'}>Atomic Habits</Text>
            </Flex>
            <Text mb={'3px'}>James Clear</Text>
            <Flex align={"center"} gap={"10px"}>
              <Text fontSize={'15px'} fontWeight={"600"}>
                80%
              </Text>
              <Progress
                borderRadius={"5px"}
                w={"5rem"}
                size={"sm"}
                h={'5px'}
                colorScheme="default"
                bg={"lightgrey"}
                value={80}
              />
            </Flex>
          </Flex>
        </CardFooter>
      </Card>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton zIndex={"10"} />
          <DrawerHeader width={"100%"}>
            <Textarea
              color={"default.500"}
              fontWeight={"600"}
              fontSize={"2rem"}
              defaultValue={"How to make friends and infleunce people"}
              variant={"unstyled"}
              //   onChange={(e) => setQuoteName(e.target.value)}
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
              {/* <DeleteQuote person={propPerson} id={_id} /> */}
              <Flex align={"center"}>
                <Flex color={"default.200"} align={"center"} gap={"5px"}>
                  <IoPersonOutline size={20} />
                  <Text>Person:</Text>
                </Flex>
                <Input
                  w={"100%"}
                  defaultValue={""}
                  // onChange={(e) => setQuotePerson(e.target.value)}
                  variant={"none"}
                  fontSize={"18px"}
                ></Input>
              </Flex>
              <Flex color={"default.200"} align={"center"} gap={"15px"}>
                <Flex align={"center"} gap={"5px"}>
                  <CiSquareCheck size={20} />
                  <Text>Favourite:</Text>
                </Flex>
                {/* <Checkbox onChange={(e) => setQuoteFavourite(e.target.checked)} isChecked={quoteFavourite} colorScheme='green' size={'md'}>

                </Checkbox> */}
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
                defaultValue={""}
                //   onChange={(e) => setQuoteNote(e.target.value)}
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
