import { Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'

const Signup = () => {
    return (
        <Container maxW={"container.md"} h={"100vh"} p={"16"} >
            <form>
                <VStack
                    alignItems={"stretch"}
                    spacing={"4"}
                    w={["full" ,"96"]}
                    m={"auto"}
                    my={"10"}

                >
                    <Heading textAlign={"center"}>
                       Video Hub
                    </Heading>
                    <Avatar alignSelf={"center"} boxSize={"28"} />
                    <Input
                        type={"text"}
                        placeholder={"Enter your Name"}
                        required
                        focusBorderColor={"purple.500"} />
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

                   

                    <Button colorScheme={"purple"} type={"submit"}>
                        Sign Up
                    </Button>
                    <Text alignSelf={"end"}>
                       Already Signup?{" "}
                        <Button variant={"link"} colorScheme={"purple"}>
                        <Link to ={"/login"}> Login </Link>
                    </Button>
                    </Text>

                   
                </VStack>
            </form>
        </Container>
    )
}




export default Signup
