import { Button, Card, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Textarea, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const CreateQuote = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [quoteName, setQuoteName] = useState('')
  const [quotePerson, setQuotePerson] = useState('')
  const [quoteNote, setQuoteNote] = useState('')
 
  return (
    <>
      <Button
          fontSize={"16px"}
          variant={"none"}
          onClick={onOpen}
          >
          <FaPlus size={16} />
          <Spacer w={"3px"} />
         New Quote
      </Button>
      <Modal onClose={onClose} isOpen={isOpen} motionPreset="slideInBottom">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Quote</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
            <Flex mt={"10px"} mb={'10px'} direction={"column"}>
                <FormLabel>Quote:</FormLabel>
                <Textarea
                  focusBorderColor="black"
                  spellCheck={false}
                  onChange={(e) => setQuoteName(e.target.value)}
                ></Textarea>
              </Flex>
              <FormLabel>Person:</FormLabel>
              <Input
                focusBorderColor="black"
                spellCheck={false}
                onChange={(e) => setQuotePerson(e.target.value)}
              />
              <Flex mt={"10px"} direction={"column"}>
                <FormLabel>Notes:</FormLabel>
                <Textarea
                  h={"12rem"}
                  focusBorderColor="black"
                  spellCheck={false}
                  onChange={(e) => setQuoteNote(e.target.value)}
                ></Textarea>
              </Flex>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              bg={"default.200"}
              _hover={{ bg: "default.500" }}
              
              colorScheme="blue"
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent> 
      </Modal>
    </>
  );
};

export default CreateQuote;
