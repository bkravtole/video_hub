import { Box, Button, HStack, Heading, Input, Stack, VStack, Text } from '@chakra-ui/react'
import { AiOutlineSend } from "react-icons/ai"
import React from 'react'

const Footer = () => {
    return (
        <Box bgColor={"blackAlpha.900"} minH={"40"} p={"16"} color={"white"}>

            <Stack direction={["column", "row"]} >
                <VStack w={"full"} alignItems={"stretch"}>
                    <Heading textTransform={"uppercase"} size={"md"} textAlign={["center", "left"]}>
                        Technomach
                    </Heading>
                    <HStack
                        borderBottom={"2px solid white"}
                        py={"2"}>
                        <Input
                            placeholder='Enter Your Email...'
                            border={"none"}
                            borderRadius={'none'}
                            focusBorderColor='none'
                            outline={"none"} />
                        <Button
                            p={0}
                            colorScheme={"purple"}
                            variant={'ghost'}
                            borderRadius={"0 20px 20px 0"}>
                            <AiOutlineSend size={20} />
                        </Button>
                    </HStack>
                </VStack>
                <VStack w={"full"}
                    borderLeft={["none", "1px solid white"]}
                    borderRight={["none", "1px solid white"]}>
                    <Heading textTransform={"uppercase"} textAlign={"center"}>
                        Video hub
                    </Heading>
                    <Text>
                        All rights Received
                    </Text>
                </VStack>

                <VStack w={"full"}>
                    <Heading size={"md"} textTransform={"uppercase"}>
                        social media
                    </Heading>

                    <Button variant={"link"} colorScheme={"whiteAlpha.900"} >
                        <a target={"blank"} href='https://youtube.com'>Youtube</a>
                    </Button>
                    <Button variant={"link"} colorScheme={"whiteAlpha.900"} >
                        <a target={"blank"} href='https://instagram.com'>Instagram</a>
                    </Button>
                    <Button variant={"link"} colorScheme={"whiteAlpha/900"} >
                        <a  target={"blank"} href='https://github.com'>GitHub</a>

                    </Button>


                </VStack>
            </Stack>
        </Box>
    )
}

export default Footer
