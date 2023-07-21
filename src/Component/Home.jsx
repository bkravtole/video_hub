import React from 'react'
import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.png"

const headingoption = {
    pos: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50% ,-50%)",
    textTransform: "uppercase",
    p: "4",
    size: "3xl"
    
}
const Home = () => {
    return (
        <Box>
            <Mycarousel />

            <Container
                maxW={"container.xl"}
                minH={"100vh"} p={"16px"}>
                <Heading
                    textTransform={"uppercase"}
                    py="2"
                    w={"fit-content"}
                    borderBottom={"2px solid"}
                    m="auto" >Service
                </Heading>

                <Stack

                    h="full"
                    p={"4"}
                    alignItems={'center'}
                    direction={["column", "row"]}
                >
                    <Image src={img5}
                        h={["40", "400"]}
                        filter={"hue-Rotate(-130deg)"}
                        alt="not found" />
                    <Text
                        latterSpacing={"widest"}
                        lineHeight={"190%"}
                        p={["4", "16"]}
                        textAlign={"unset"}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, et. Vel, cupiditate esse ullam inventore illo recusandae. Sapiente quam tenetur rem quasi aspernatur dicta, tempore, nihil pariatur ab ipsam dolor. Minus praesentium eum sunt voluptatibus natus quam ipsum dicta repellendus et optio sapiente eligendi nemo similique quia aliquam distinctio, necessitatibus labore aliquid dolorem temporibus corporis illo! Similique commodi repellat harum, voluptatum aliquid illo culpa sit cupiditate doloremque, dolor numquam est atque consequuntur dignissimos sed maxime dolorum facere recusandae, voluptas labore repellendus quo quod. Officia pariatur ullam autem quis alias nesciunt minima, ut, veritatis incidunt non tempore possimus sed vitae voluptatum.
                    </Text>
                </Stack>
            </Container>
        </Box>
    )
}


const Mycarousel = () => {
    return <Carousel
        autoPlay
        infiniteLoop
        interval={1000}
        showStatus={false}
        showArrows={false}
        showThumbs={false}
    >

        <Box w="full" h={"100vh"}>
            <Image src={img1} h={"full"} w={"full"} objectFit ={"cover"} alt="Not Found" />
            <Heading bgColor={"blackAlpha.600"} color={"white"}
                {...headingoption}
            >
                watch the Future
            </Heading>
        </Box>
        <Box w="full" h={"100vh"}>
        <Image src={img2} h={"full"} w={"full"} objectFit ={"cover"} alt="Not Found" />
            <Heading bgColor={"whiteAlpha.700"} color={"black"}
                {...headingoption}
            >
                Future Is Gaming
            </Heading>
        </Box>
        <Box w="full" h={"100vh"}>
        <Image src={img3} h={"full"} w={"full"} objectFit ={"cover"} alt="Not Found" />
            <Heading bgColor={"whiteAlpha.600"} color={"black"}
                {...headingoption}
            >
                Gaming On Console
            </Heading>
        </Box>
        <Box w="full" h={"100vh"}>
        <Image src={img4} h={"full"} w={"full"} objectFit ={"cover"} alt="Not Found" />
            <Heading bgColor={"whiteAlpha.600"} color={"black"}
                {...headingoption}
            >
                Night View
            </Heading>
        </Box>

    </Carousel>

}




export default Home
