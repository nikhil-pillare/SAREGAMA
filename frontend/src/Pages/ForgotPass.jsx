import React, { useEffect, useState } from "react";
import {
  Flex,
  Image,
  Box,
  Text,
  FormControl,
  FormLabel,
  InputGroup,
  Input,
  InputLeftElement,
  useToast,
  Button,
} from "@chakra-ui/react";
import forgot_pass from "../Components/images/forgot_pass.jpg";
import forgot_pass_mobile from "../Components/images/forgot_pass_mobile.jpg"
import logo from "../Components/images/logo.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "animate.css";
import { useDispatch, useSelector } from "react-redux";
import { userforgot } from "../Redux/authReducer/action";
import { USER_FAIL, USER_FORGOT_SUCCESS } from "../Redux/actionTypes";
import { Helmet } from "react-helmet";
import axios from "axios";

export default function ForgotPass() {
  const envelope = <FontAwesomeIcon size="md" icon={faEnvelope} />;
  const check = <FontAwesomeIcon size="sm" beat icon={faCheckCircle} />;
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const toast = useToast();
  const loading = useSelector((store) => store.authReducer.loading);

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email)
    axios.post(`http://localhost:8080/users/reset-password`,email)
    .then((res)=>console.log(res.data,"userRefister"))
    
  };
  return (
    <Flex
      justifyContent="space-between"
      w="100%"
      direction={{
        base: "column",
        sm: "column",
        md: "row",
        lg: "row",
        xl: "row",
      }}
    >
      <Helmet>
        <title>Forgot Password | Sa Re Ga Ma</title>
      </Helmet>
      <Box
        w={{ base: "100%", sm: "100%", md: "48%", lg: "48%", xl: "48%" }}
        height={{
          base: "200px",
          sm: "200px",
          md: "auto",
          lg: "auto",
          xl: "auto",
        }}
        filter="hue-rotate(50deg)"
        backgroundImage={{
          base: forgot_pass_mobile,
          sm: forgot_pass_mobile,
          md: forgot_pass,
          lg: forgot_pass,
          xl: forgot_pass,
        }}
        // backgroundImage={forgot_pass}
        
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        boxShadow="-50px 0 30px -5px white inset"
      ></Box>
      
      <Box w={{ base: "100%", sm: "100%", md: "48%", lg: "48%", xl: "48%" }}>
        <Box
          w={{
            base: "290px",
            sm: "330px",
            md: "330px",
            lg: "330px",
            xl: "330px",
          }}
          m="auto"
          mt={{ base: "30px", sm: "50px", md: "70px", lg: "70px", xl: "70px" }}
          mb={{
            base: "50px",
            sm: "10px",
            md: "160px",
            lg: "160px",
            xl: "160px",
          }}
        >
          {/* <Image w="50%" src={logo} alt="signup" /> */}
          <Text
            mt="25px"
            color="#7f07f7f5"
            fontWeight="bold"
            fontSize="27px"
            fontFamily="Franklin Gothic Medium"
          >
            Forgot Password
          </Text>
          <Text>Enter Your Registered Email to Forgot the Password.</Text>
          <br />
          <form
            onSubmit={handleSubmit}
            class="animate__animated animate__backInUp"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              border: "2px dashed #7f07f7f5",
              padding: "20px",
              borderRadius: "15px",
            }}
          >
            <FormControl isRequired>
              <FormLabel>EMAIL</FormLabel>
              <InputGroup>
                <InputLeftElement
                  borderRadius="5px 0px 0px 5px"
                  color="white"
                  bg="#7f07f7f5"
                >
                  {envelope}
                </InputLeftElement>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  border="1px solid #b655e2fa"
                  bg="#f5f5f5"
                  _focus={{
                    border: "1px solid #b655e2fa",
                    boxShadow: "#b655e2fa 0px 3px 8px",
                    bg: "#fff",
                  }}
                  _hover={{ bg: "#fff" }}
                  type="email"
                  placeholder=" Enter Registered Email"
                  required
                />
              </InputGroup>
              <br />

              {loading ? (
                <Button
                  isLoading
                  w="100%"
                  color="white"
                  bg="#7f07f7f5"
                  _hover={{ bg: "#7f07f7f5" }}
                ></Button>
              ) : (
                <button type="submit" class="custom-btn btn-7">
                  <span>Reset Password</span>
                </button>
              )}
            </FormControl>
          </form>
          <br />
          {text !== "" && (
            <Text textAlign="justify" fontWeight="bold" color="green">
              {check} {text}
            </Text>
          )}
        </Box>
      </Box>
    </Flex>
  );
}
