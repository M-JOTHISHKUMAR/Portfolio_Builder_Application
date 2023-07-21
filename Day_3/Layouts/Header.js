import {Image,Heading,Stack,Flex,Box,Text,Container,} from '@chakra-ui/react';
import hero from '../../images/AnimeGirl.png';
const Header = () => {
    return (
        <>
            <Container maxW='7xl' as='main'>
                <Stack
                    py={{ base: 8, md: 20 }}
                    spacing={{ base: 4, md: 10 }}
                    direction={{ base:'column',md:'row'}}
                    bg={'gray.100'}
                    align='center'>
                    <Stack flex={1} direction={'column'} spacing={4}>
                    <Heading
                            fontSize={{ base: '3xl', md: '5xl' }}
                            bgGradient="linear(to-r, red.500, blue.600)"
                            bgClip="text">
                            Create your Resume  
                        </Heading>
                        <Text color={'yellow.600'} lineHeight={1.7} style={{ fontFamily: 'Poppins' }}>
                            Here you create your resume with your own templete and your own style...
                        </Text>
                        <Stack
                            spacing={{ base: 4, sm: 6 }}
                            direction={{ base: 'column', sm: 'row' }}
                        >
                        </Stack>
                    </Stack>
                    <Flex
                        flex={1}
                    >
                        <Box
                            position={'relative'}
                            height={'600px'}
                            width={'full'}
                            overflow={'hidden'}
                        >
                            <Image
                                fit={'contain'}
                                align={'center'}
                                src={hero}
                            />
                        </Box>
                    </Flex>
                </Stack>
            </Container>
        </>
    )
}
export default Header