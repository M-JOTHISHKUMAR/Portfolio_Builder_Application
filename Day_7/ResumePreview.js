import {Box,Heading,HStack,Tag,TagLabel,Text,VStack,Wrap,UnorderedList,ListItem,} from "@chakra-ui/react";
import { useResume } from "../Context";
import { MdMail, MdLocalPhone, MdLocationPin } from "react-icons/md";
import { BiLinkExternal } from "react-icons/bi";

const ResumePreview = () => {
  const { theme, about, educationList, skills, workList, projects, printElem } =
    useResume();
    const imgStyle = {
      width:"115px",
      height:"115px",
      margin:"15px",
      borderRadius: "50%",
    };
  return (
    <>
      <Box
        bg={"white"}
        w={"full"}
        rounded={"md"}
        shadow={"md"}
        overflow={"hidden"}
        minH={"100vh"}
      >
        <div ref={printElem}>
          <HStack>
            {about.picture && (
              <img
                style={imgStyle}
                
                src={about.picture}
                alt="avatar"
              />
            )}

            <VStack m={4} alignItems={"flex-start"} spacing={0.5}>
              <Heading as="h4" size="md">
                {about.name ? about.name : "Name"}
              </Heading>
              <Text color={"gray.500"}>
                {about.role ? about.role : "Role"}
              </Text>
            </VStack>
          </HStack>

          <HStack
            bg={theme}
            color={"white"}
            p={4}
            justifyContent={"space-between"}
          >
            <HStack spacing={1}>
              <MdMail />{" "}
              <Text>{about.email ? about.email : "Email"}</Text>
            </HStack>
            <HStack spacing={1}>
              <MdLocalPhone />{" "}
              <Text>{about.phone ? about.phone : "phno"}</Text>
            </HStack>
            <HStack spacing={1}>
              <MdLocationPin />{" "}
              <Text>{about.address ? about.address : "Address"}</Text>
            </HStack>
          </HStack>

          <HStack
            w={"full"}
            h={"full"}
            my={2}
            mb={6}
            px={2}
            justifyContent={"space-between"}
            alignItems={"flex-start"}
            spacing={1}
          >
            <VStack mx={2} alignItems={"flex-start"} w={"full"} spacing={6}>
              
              <VStack alignItems={"flex-start"}>
                <Heading as="h4" size="md" color={"gray.700"}>
                  EDUCATION
                </Heading>

                {educationList.map((education) => {
                  const { degree, school, startYr, endYr, grade } = education;

                  return (
                    <VStack
                      spacing={0}
                      alignItems={"flex-start"}
                      w={"full"}
                      pb={2}
                    >
                      <Text fontWeight={"medium"}>
                        {degree ? degree : "College Name"}
                      </Text>
                      <Text fontSize={"sm"}>
                        {school ? school : "Course"}
                      </Text>
                      <HStack
                        fontSize={"xs"}
                        fontStyle={"italic"}
                        justifyContent={"space-between"}
                        w={"full"}
                      >
                        <Text>
                          {startYr ? startYr : 2021} - {endYr ? endYr : 2025}
                        </Text>
                        <Text>{grade ? grade : "CGPA"}</Text>
                      </HStack>
                    </VStack>
                  );
                })}
              </VStack>
              
              <VStack alignItems={"flex-start"}>
                <Heading as="h4" size="md" color={"gray.700"}>
                  Internship
                </Heading>

                {workList.map((work) => {
                  const {
                    position,
                    type,
                    company,
                    startDate,
                    endDate,
                    description: desc,
                  } = work;

                  return (
                    <VStack
                      spacing={0.5}
                      alignItems={"flex-start"}
                      lineHeight={1.3}
                      pb={2}
                    >
                      <Text fontWeight={"medium"}>
                        {position ? position : "Position"}
                      </Text>
                      <Text fontSize={"sm"}>
                        {company ? company : "Company Name"}
                        <Text>
                        {type ? type : "Employment Type"}
                        </Text>
                      </Text>
                      <Text fontSize={"xs"} fontStyle={"italic"}>
                        {startDate ? startDate : "starting"} -{" "}
                        {endDate ? endDate : "ending"}
                      </Text>
                      <Text fontSize={"sm"} as="p">
                        {desc
                          ? desc
                          : "Enter your internship details"}
                      </Text>
                    </VStack>
                  );
                })}
              </VStack>
              
            </VStack>

            <VStack mx={2} alignItems={"flex-start"} w={"full"} spacing={6}>
              
              <VStack alignItems={"flex-start"}>
                <Heading as="h4" size="md" color={"gray.700"}>
                  SKILLS
                </Heading>
                <Wrap>
                  {skills.map((skill, index) => (
                    <Tag
                      size={"md"}
                      borderRadius="md"
                      variant="solid"
                      bg={theme.replace("400", "500")}
                      key={index}
                    >
                      <TagLabel>{skill.name}</TagLabel>
                    </Tag>
                  ))}
                </Wrap>
              </VStack>
              
              <VStack alignItems={"flex-start"}>
                <Heading as="h4" size="md" color={"gray.700"}>
                  PROJECTS
                </Heading>

                {projects.map((project) => {
                  const { name, url, description: desc } = project;
                  return (
                    <VStack
                      spacing={0.5}
                      alignItems={"flex-start"}
                      lineHeight={1.3}
                      pb={2}
                    >
                      <HStack as="a" href={url} target="_blank" spacing={0.5}>
                        <Text fontWeight={"medium"} flex={"row"}>
                          {name ? name : "Project Name"}{" "}
                        </Text>{" "}
                        <BiLinkExternal />
                      </HStack>
                      <UnorderedList pl={5}>
                        <ListItem>
                          <Text fontSize={"sm"} as="p">
                            {desc
                              ? desc
                              : "Enter your project details."}
                          </Text>
                        </ListItem>
                      </UnorderedList>
                    </VStack>
                  );
                })}
              </VStack>
            </VStack>
          </HStack>
        </div>
      </Box>
    </>
  );
};

export default ResumePreview;