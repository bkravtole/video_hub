import { Button, Container, HStack, Input, VStack} from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'

const Upload = () => {
    return (
        <Container maxW={"container.md"} h={"100vh"} p={"16"}>
            <VStack color={"purple.500"} h={"full"} justifyContent={"center"}>
                <AiOutlineCloudUpload size={"10vmax"} />
            </VStack>
            <form>
                <HStack>
                    <Input required type={"file"}
                    css={{

                       "&::file-selector-button":{
                        border : "none",
                        width : "100%",
                        height: "100%",
                        marginLeft : "-18px",
                        color : "purple",
                        backgroundColor: "white"
                       },




                    }}
                    
                    
                    
                    
                    />
                    <Button colorScheme={"purple"} type={"submit"}>
Upload
                    </Button>
                </HStack>
            </form>
        </Container>
    )
}

export default Upload
