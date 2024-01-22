import {
  Flex,
  Button,
  FormControl,
  Input,
  Box,
  Text,
  Image,
  Alert,
  AlertIcon,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { createUser } from "../../api/user-request";
import { useState } from "react";

interface Props {
  onClick: () => void;
}

const SignupForm = ({ onClick }: Props) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const toast = useToast();

  const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {

      toast({
        title: "Account created",
        description:
          "We have created an account for you, please login with your credentials",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      onClick()
    },
    onError: () => {
      toast({
        title: "An error occured",
        description: "Please provide valid credentials",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    },
  });

  const postUser = () => {
    mutation.mutate({
      fullname: userName,
      email: userEmail,
      password: userPassword,
    });

  };


  return (
    <>
      <Box width={["100%", "100%", "50%", "30%"]} p={5}>
        <Flex direction={"column"} justify={"center"} align={"center"}>
          <Flex
            mt={"1rem"}
            justify={"center"}
            direction={"column"}
            align={"center"}
          >
           {mutation.status === 'pending' ? '' : <Image boxSize={"8rem"} src="/NeuroNotes.png" draggable={false} />}
           {mutation.status === 'pending' ? <Spinner /> : ''}
            {/* {errorMessage && <Text mt={'1rem'} color={'red'} >{errorMessage}</Text>} */}
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
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                focusBorderColor="black"
                h={"3rem"}
                w={"26rem"}
              ></Input>
              <Input
                mt={"1rem"}
                variant={"flushed"}
                placeholder="Email Address"
                onChange={(e) => setUserEmail(e.target.value)}
                required
                type="email"
                focusBorderColor="black"
                h={"3rem"}
                w={"26rem"}
              ></Input>
              <Input
                mt={"1rem"}
                variant={"flushed"}
                placeholder="Password"
                onChange={(e) => setUserPassword(e.target.value)}
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
                onClick={postUser}
              >
                Signup
              </Button>
              <Flex
                    justify={"center"}
                    gap={"10px"}
                    mt={"2rem"}
                    align={"center"}
                  >
                    <Text>Already have an account?</Text>
                    <Text
                      cursor={"pointer"}
                      onClick={onClick}
                      fontWeight={"bold"}
                      as={"u"}
                    >
                      Login now
                    </Text>
                  </Flex>
            </Flex>
          </FormControl>
        </Flex>
      </Box>
    </>
  );
};

export default SignupForm;
