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
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { FaBookmark } from "react-icons/fa6";
import { Quote, updateQuotes } from "../../api/quote-request";
import { IoPersonOutline } from "react-icons/io5";
import { CiSquareCheck } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { SlNotebook } from "react-icons/sl";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import DeleteQuote from "./DeleteQuote";

const QuoteItem = ({ name: propName, person: propPerson, favourite: propFavourite, _id, note: propNote }: Quote) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const favouriteValue = JSON.parse(propFavourite)

  const [quoteName, setQuoteName] = useState(propName)
  const [quotePerson, setQuotePerson] = useState(propPerson)
  const [quoteFavourite, setQuoteFavourite] = useState(favouriteValue)
  const [quoteNote, setQuoteNote] = useState(propNote)



  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: updateQuotes,
    onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ['quotes']})
    }
  })

  const patchQuotes = () => {
    const name = quoteName !== '' ? quoteName : propName
    const person = quotePerson !== '' ? quotePerson : propPerson
    const favourite = quoteFavourite !== propFavourite ? quoteFavourite : propFavourite
    const note = quoteNote !== '' ? quoteNote : propNote
    if(quoteName !== propName || quotePerson !== propPerson || quoteFavourite !== propFavourite || quoteNote !== propNote) {
        mutation.mutate({id: _id, body: {name, person, favourite, note}})
    }
    onClose()
  }

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
            {propName}
          </Text>
        </Flex>
        <Flex align={"center"}>
          <Text as={"u"} fontSize={"18px"} fontWeight={"600"}>
            ~ {propPerson}
          </Text>
        </Flex>
      </Flex>
      <Drawer isOpen={isOpen} placement="right" onClose={patchQuotes} size="md">
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
              onChange={(e) => setQuoteName(e.target.value)}
              spellCheck={false}
              whiteSpace={"none"}
              w={"100%"}
              h={"10rem"}
            />
          </DrawerHeader>
          <Divider />
          <DrawerBody mt={"1rem"}>
            <Flex fontSize={"18px"} justify={"start"} align={"start"} direction={"column"}>
                <DeleteQuote person={propPerson} id={_id} />
              <Flex align={'center'}>
                <Flex color={"default.200"} align={"center"} gap={"5px"}>
                  <IoPersonOutline size={20} />
                  <Text >Person:</Text>
                </Flex>
                <Input
                w={'100%'}
                defaultValue={propPerson}
                onChange={(e) => setQuotePerson(e.target.value)}
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
                <Checkbox onChange={(e) => setQuoteFavourite(e.target.checked)} isChecked={quoteFavourite} colorScheme='green' size={'md'}>

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
              defaultValue={propNote}
              onChange={(e) => setQuoteNote(e.target.value)}
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
