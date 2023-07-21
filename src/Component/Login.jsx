import { Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <Container maxW={"container.md"} h={"100vh"} p={"16"} >
            <form>
                <VStack
                    alignItems={"stretch"}
                    spacing={"8"}
                    w={["full" ,"96"]}
                    m={"auto"}
                    my={"16"}

                > 
                    <Heading>
                        Welcome Back
                    </Heading>
                    <Input
                        type={"email"}
                        placeholder={"Enter your email"}
                        required
                        focusBorderColor={"purple.500"} />
                    <Input
                        type={'password'}
                        placeholder={"Password"}
                        required
                        focusBorderColor={"purple.500"} />

                    <Button variant={"link"} alignSelf={"flex-end"}>
                        <Link to ={"/forgotpassword"}> Forgot Password  </Link>
                    </Button>

                    <Button colorScheme={"purple"} type={"submit"}>
                        Log In
                    </Button>
                    <Text alignSelf={"end"}>
                        New User ?{" "}
                        <Button variant={"link"} colorScheme={"purple"}>
                        <Link to ={"/Signup"}> Signup </Link>
                    </Button>
                    </Text>

                   
                </VStack>
            </form>
        </Container>
    )
}

export default Login
