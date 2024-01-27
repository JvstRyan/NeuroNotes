import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  Spacer,
  Text,
  Image,
  useBreakpointValue,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { useState } from "react";
import SignupForm from "./SignupForm";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../../api/user-request";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [loginForm, setLoginForm] = useState(true);
  const toast = useToast();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      toast({
        title: "Succesfully logged in",
        position: 'top',
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      navigate("/dashboard");
    },
    onError: () => {
      toast({
        title: "An error occured",
        position: 'top',
        description: "Please provide valid credentials",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    },
  });

  const postLogin = () => {
    mutation.mutate({ email: userEmail, password: userPassword });
  };

  return (
    <Flex>
      {loginForm && (
        <Box width={["100%", "100%", "50%", "30%"]} p={5}>
          <Flex direction={"column"} justify={"center"} align={"center"}>
            <Flex mt={"1rem"} justify={"center"} align={"center"}>
            {mutation.status === 'pending' ? '' : <Image boxSize={"8rem"} src="/NeuroNotes.png" draggable={false} />}
            {mutation.status === 'pending' ? <Spinner /> : ''}
            </Flex>
            <Flex justify={"center"} gap={"10px"} align={"center"} mt={"2rem"}>
              <Button
                size={"lg"}
                border={'none'}
                variant={'outline'}
                w={"13rem"}
                borderRadius={"5px"}
                bg={'black'}
                color={'white'}
                _hover={{backgroundColor: 'black'}}
              >
                Login
              </Button>
              <Button
                size={"lg"}
                w={"13rem"}
                borderRadius={"5px"}
                border={'2px solid'}
                color={'black'}
                variant={"outline"}
                _hover={{ backgroundColor: "black", color: "white", border: 'none',  transform: 'scale(0.98)' }}
                onClick={() => setLoginForm(false)}
              >
                Signup
              </Button>
            </Flex>
            <Flex
              mt={"2rem"}
              direction={"column"}
              justify={"center"}
              align={"center"}
            >
              <FormControl>
                <Input
                  onChange={(e) => setUserEmail(e.target.value)}
                  variant={"flushed"}
                  placeholder="Email Address"
                  required
                  type="email"
                  focusBorderColor="black"
                  h={"3rem"}
                  w={"26rem"}
                ></Input>
                <Spacer h={"1rem"} />
                <Input
                  variant={"flushed"}
                  onChange={(e) => setUserPassword(e.target.value)}
                  placeholder="Password"
                  required
                  type="password"
                  focusBorderColor="black"
                  h={"3rem"}
                  w={"26rem"}
                ></Input>
                <Flex direction={"column"} justify={"center"} align={"center"}>
                  <Button
                    _hover={{ backgroundColor: "black", transform: 'scale(0.98)' }}
                    type="button"
                    onClick={postLogin}
                    mt={"3rem"}
                    w={"100%"}
                    color={"white"}
                    fontSize={"20px"}
                    h={"3rem"}
                    bg={"black"}
                   
                  >
                    Login
                  </Button>
                  <Flex
                    justify={"center"}
                    gap={"10px"}
                    mt={"2rem"}
                    align={"center"}
                  >
                    <Text>Don't have an account?</Text>
                    <Text
                      cursor={"pointer"}
                      onClick={() => setLoginForm(false)}
                      fontWeight={"bold"}
                      as={"u"}
                    >
                      Signup now
                    </Text>
                  </Flex>
                </Flex>
              </FormControl>
            </Flex>
          </Flex>
        </Box>
      )}
      {!loginForm && <SignupForm onClick={() => setLoginForm(true)} />}
      {!isMobile && (
        <Box
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
        </Box>
      )}
    </Flex>
  );
};

export default LoginForm;
