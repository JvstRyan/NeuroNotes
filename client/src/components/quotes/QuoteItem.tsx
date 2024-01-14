import {
  Box,
  Button,
  Checkbox,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Input,
  Spacer,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { FaBookmark } from "react-icons/fa6";
import { Quote } from "../../api/quote-request";
import { IoPersonOutline } from "react-icons/io5";
import { CiSquareCheck } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { SlNotebook } from "react-icons/sl";

const QuoteItem = ({ name, person, favourite, _id, note }: Quote) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        cursor={"pointer"}
        onClick={onOpen}
        p={"5px"}
        borderRadius={"6px"}
        _hover={{ bg: "#D9D9D9" }}
        color={"black"}
        mb={"1rem"}
        justify={"space-between"}
        align={"center"}
        w={"100%"}
      >
        <Flex align={"center"} gap={"5px"} maxWidth={"80%"}>
          <FaBookmark size={19} />
          <Text
            isTruncated
            as={"u"}
            whiteSpace={"nowrap"}
            fontSize={"18px"}
            fontWeight={"600"}
          >
            {name}
          </Text>
        </Flex>
        <Flex align={"center"}>
          <Text as={"u"} fontSize={"18px"} fontWeight={"600"}>
            ~ {person}
          </Text>
        </Flex>
      </Flex>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton zIndex={"10"} />
          <DrawerHeader width={"100%"}>
            <Textarea
              color={"default.500"}
              fontWeight={"600"}
              fontSize={"2rem"}
              defaultValue={name}
              variant={"unstyled"}
              //   onChange={(e) => setNoteTitle(e.target.value)}
              spellCheck={false}
              whiteSpace={"none"}
              w={"100%"}
              h={"10rem"}
            />
          </DrawerHeader>
          <Divider />
          <DrawerBody mt={"1rem"}>
            <Flex fontSize={"18px"} justify={"start"} align={"start"} direction={"column"}>
            <Button bg={'default.100'} mb={'1rem'} alignItems={'center'} gap={'5px'}>
                <RxCross2 size={20}/>
                    Remove Quote
                </Button>
              <Flex align={'center'}>
                <Flex color={"default.200"} align={"center"} gap={"5px"}>
                  <IoPersonOutline size={20} />
                  <Text >Person:</Text>
                </Flex>
                <Input
                w={'100%'}
                defaultValue={person}
                variant={'none'}
                fontSize={'18px'}
                
                >
                </Input>
              </Flex>
              <Flex color={"default.200"} align={'center'} gap={'15px'}>
                <Flex align={"center"} gap={"5px"}>
                <CiSquareCheck size={20} />
                  <Text >Favourite:</Text>
                </Flex>
                <Checkbox colorScheme='green' size={'md'}>

                </Checkbox>
              </Flex>
              <Flex mt={'5px'} color={"default.200"} align={'center'} gap={'15px'}>
                <Flex align={"center"} gap={"5px"}>
                <SlNotebook size={20} />
                  <Text >Notes:</Text>
                </Flex>
              </Flex>
              <Divider mt={'20px'} />
              <Textarea 
              defaultValue={note}
              mt={'10px'}
              fontSize={'18px'}
              color={'default.500'}
              variant={'none'}
              minH={'15rem'}
              spellCheck={false}
              >

              </Textarea>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default QuoteItem;
