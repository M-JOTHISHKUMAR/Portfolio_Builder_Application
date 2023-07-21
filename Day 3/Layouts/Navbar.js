import {Stack,Flex,Heading,Spacer,HStack,Button} from "@chakra-ui/react";

const Navbar = () => {
    return (
        <Stack
            p={5}
            bg={'gray.50'}
            as='header'
        >
            <Flex
                w='full'
                alignItems={'center'}
            >
                <Heading as='h3' ml={{ base: 0, sm: 8 }} size='lg' fontWeight={'thin'} color='purple.500' style={{ fontFamily: "Pacifico" }}>Resume Portfolio Builder</Heading>
                <Spacer></Spacer>
                <HStack spacing={10} mr={{ base: 0, sm: 8 }} as='nav' style={{ fontFamily: 'Poppins' }}>
                    <Button
                                as={'a'}
                                href={'#builder'}
                                rounded={'md'}
                                size={'lg'}
                                px={6}
                                colorScheme={'red'}
                            >Build Resume</Button>
                </HStack>
            </Flex>

        </Stack>
    )
}

export default Navbar