import { TabList, Tabs, Tab, TabPanels, TabPanel, Box, Text } from '@chakra-ui/react'
import About from './BuildSteps/About'
import Education from './BuildSteps/Education'
import Projects from './BuildSteps/Project'
import Skills from './BuildSteps/Skills'
import Work from './BuildSteps/Work'
const Builder = () => {
    return (
        <Box
            bg={'gray.100'}
            w={'full'}
            maxW={'xl'}
            rounded={'md'}
            shadow={'md'}
            overflow={'hidden'}
            >
            <Tabs isFitted variant='enclosed'>
                <TabList>
                    <Tab><Text fontWeight={'medium'}>About</Text></Tab>
                    <Tab><Text fontWeight={'medium'}>Education</Text></Tab>
                    <Tab><Text fontWeight={'medium'}>Skills</Text></Tab>
                    <Tab><Text fontWeight={'medium'}>Projects</Text></Tab>
                    <Tab><Text fontWeight={'medium'}>Internship</Text></Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <About />
                    </TabPanel>
                    <TabPanel>
                        <Education />
                    </TabPanel>
                    <TabPanel>
                        <Skills />
                    </TabPanel>
                    <TabPanel>
                        <Projects />
                    </TabPanel>
                    <TabPanel>
                        <Work />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}
export default Builder