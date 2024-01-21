import { Box, Button, Flex, FormControl, Input, Spacer, Text, Image, useBreakpointValue } from "@chakra-ui/react";

const LoginForm = () => {
const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex>
      <Box width={["100%", "100%", "50%", "30%"]} p={5}>
        <Flex direction={'column'} justify={'center'} align={'center'}>
        <Flex mt={'1rem'} justify={"center"} align={"center"}>
          <Image boxSize={'8rem'} src='/NeuroNotes.png' draggable={false} />
        </Flex>
        <Flex justify={"center"} gap={"10px"} align={"center"} mt={"2rem"}>
          <Button
            size={"lg"}
            w={'13rem'}
            borderRadius={"5px"}
            bg={"default.200"}
            color={"white"}
            _hover={{backgroundColor: 'default.500'}}
          >
            Login
          </Button>
          <Button
            size={"lg"}
            w={'13rem'}
            borderRadius={"5px"}
            color={"default.200"}
            variant={"outline"}
            _hover={{ backgroundColor: "default.200", color: "white" }}
          >
            Signup
          </Button>
        </Flex>
        <Flex mt={'2rem'} direction={"column"} justify={"center"} align={"center"}>
          <FormControl>
            <Input
            variant={'flushed'}
            placeholder="Email Address"
            required
            type="email"
            focusBorderColor="black"
            h={'3rem'}
            w={'26rem'}
            >

            </Input>
            <Spacer h={'1rem'} />
            <Input
            variant={'flushed'}
            placeholder="Password"
            required
            type="password"
            focusBorderColor="black"
            h={'3rem'}
            >

            </Input>
            <Flex direction={'column'} justify={'center'} align={'center'}>
            <Button  _hover={{backgroundColor: 'default.500'}} type="button" onSubmit={() => console.log('clicked')} mt={'3rem'} w={'100%'} color={'white'} fontSize={'20px'} h={'3rem'} bg={'default.200'}>
                Login
            </Button>
            <Text mt={'2rem'}>Don't have an account? <b><u>Signup now</u></b></Text>
            </Flex>
          </FormControl>
        </Flex>
        </Flex>
      </Box>
      
      {!isMobile && <Box
        position="relative"
        width={["100%", "100%", "50%", "70%"]}
        height="100vh"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          sx={{
            backdropFilter: "blur(2px)",
            backgroundColor: "rgba(000, 000, 000, 0.2)",
          }}
        />
        <video
          autoPlay
          loop
          muted
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: "-1",
          }}
        >
          <source src="/NeuroNote.mp4" type="video/mp4" />
        </video> 
      </Box> }
    </Flex>
  );
};

export default LoginForm;
