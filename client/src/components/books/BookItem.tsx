import {
    Badge,
    Box,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Collapse,
    Flex,
    Text
  } from "@chakra-ui/react";
  import { BsThreeDots } from "react-icons/bs";
  import { FaBookOpen } from "react-icons/fa";
  import { Progress } from '@chakra-ui/react'
  
  
  const BookItem = () => {
    // const [showIcons, setShowIcons] = useState(false);
  
    return (
      <>
        <Card w={{base: '450px', md: '385px'}} h={"xs"} mb={"1rem"} borderRadius={"10px"}>
          <CardHeader>
            <Flex zIndex={"10"} justify={"space-between"} align={"center"}>
              <Text size={"15px"} fontWeight={"600"} color={"#5C5C5C"}>
                Book
              </Text>
              <Flex
                gap={"5px"}
                align={"center"}
                zIndex={"10"}
                direction={"column"}
              >
                <BsThreeDots
                  size={30}
                  cursor={"pointer"}
                //   onClick={() => setShowIcons(!showIcons)}
                />
                <Box
                  zIndex={"12"}
                  alignItems={"center"}
                  pos={"absolute"}
                  top={"50px"}
                >
                  <Collapse animateOpacity>
                    <Flex direction={"column"} gap={"8px"}>
                      {/* <EditFolder title={title} description={description} _id={id} />
                      <DeleteFolder id={id} title={title} /> */}
                    </Flex>
                  </Collapse>
                </Box>
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody>
            <Flex align={"center"} justify={"center"} direction={'column'}>
              <FaBookOpen cursor={'pointer'} color={"#393733"} size={100} />
              <Badge colorScheme="default" bg={'default.200'} color={'white'} fontWeight={'600'} fontSize={'17px'} mt={'5px'}>Atomic Habits</Badge>
            </Flex>
          </CardBody>
          <CardFooter
            bg={"default.200"}
            mt={"3rem"}
            
            _hover={{ backgroundColor: "default.500" }}
            cursor={"pointer"}
          >
            <Flex align={'center'} gap={'1rem'} justify={'start'}>
            <Progress borderRadius={'5px'} w={'5rem'} size={'sm'} colorScheme="neutral" bg={'default.500'} value={50} />
            <Text fontWeight={'600'} color={'white'}>80% Completed</Text>
            </Flex>
          </CardFooter>
        </Card>
      </>
    );
  };
  
  export default BookItem;
  