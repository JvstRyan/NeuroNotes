import {
    Card,
    CardBody
} from "@chakra-ui/react";


import { GoPlus } from "react-icons/go";


const AddFolder = () => {

  return (
    <>
      <Card
        _hover={{ backgroundColor: "#F0F0F0" }}
        cursor={"pointer"}
        minW={"sm"}
        h={'20rem'}
        borderRadius={"10px"}
        borderColor={'#5C5C5C'}
        placeContent={'center'}
        alignItems={'center'}
        variant={'elevated'}
      >
        <GoPlus  size={60} color={'#5C5C5C'} />

      </Card>
    </>
  );
};

export default AddFolder;
