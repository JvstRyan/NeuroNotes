import {
  Flex,
  Button,
  FormControl,
  Input,
  Spacer,
  Box,
  Text,
  Image,
} from "@chakra-ui/react";

interface Props {
  onClick: () => void;
}

const SignupForm = ({ onClick }: Props) => {
  return (
    <>
      <Box width={["100%", "100%", "50%", "30%"]} p={5}>
        <Flex direction={"column"} justify={"center"} align={"center"}>
          <Flex mt={"1rem"} justify={"center"} align={"center"}>
            <Image boxSize={"8rem"} src="/NeuroNotes.png" draggable={false} />
          </Flex>
          <Flex justify={"center"} gap={"10px"} align={"center"} mt={"2rem"}>
            <Button
              size={"lg"}
              w={"13rem"}
              borderRadius={"5px"}
              color={"default.200"}
              variant={"outline"}
              _hover={{ backgroundColor: "default.200", color: "white" }}
              onClick={onClick}
            >
              Login
            </Button>
            <Button
              size={"lg"}
              w={"13rem"}
              borderRadius={"5px"}
              bg={"default.200"}
              color={"white"}
              _hover={{ backgroundColor: "default.500" }}
            >
              Signup
            </Button>
          </Flex>
          <FormControl>
            <Flex
              justify={"center"}
              align={"center"}
              mt={"2rem"}
              direction={"column"}
            >
              <Input
                variant={"flushed"}
                placeholder="Full name"
                required
                type="text"
                focusBorderColor="black"
                h={"3rem"}
                w={"26rem"}
              ></Input>
              <Input
                mt={'1rem'}
                variant={"flushed"}
                placeholder="Email Address"
                required
                type="email"
                focusBorderColor="black"
                h={"3rem"}
                w={"26rem"}
              ></Input>
              <Input
                mt={'1rem'}
                variant={"flushed"}
                placeholder="Password"
                required
                type="password"
                focusBorderColor="black"
                h={"3rem"}
                w={"26rem"}
              ></Input>
            </Flex>
            <Flex direction={"column"} justify={"center"} align={"center"}>
              <Button
                _hover={{ backgroundColor: "default.500" }}
                type="button"
                onSubmit={() => console.log("clicked")}
                mt={"3rem"}
                w={"26rem"}
                color={"white"}
                fontSize={"20px"}
                h={"3rem"}
                bg={"default.200"}
              >
                Signup
              </Button>
              <Text mt={"2rem"}>
                Already have an account?{" "}
                <b>
                  <u>Login now</u>
                </b>
              </Text>
            </Flex>
          </FormControl>
        </Flex>
      </Box>
    </>
  );
};

export default SignupForm;
