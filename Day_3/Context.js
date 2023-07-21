import { createContext, useContext, useRef, useState } from "react";    

const ResumeContext = createContext();

export const useResume = () => useContext(ResumeContext);

export const ResumeProvider = ({ children }) => {

    const printElem = useRef();

    const [theme, setTheme] = useState('purple.400');

    const [about, setAbout] = useState({
        name: "",
        role: "",
        email: "",
        phone: "",
        address: "",
        linkedin: "",
        picture:"",
    });

    const [educationList, setEducationList] = useState([
        {
            id: "",
            degree: "",
            school: "",
            startYr: 0,
            endYr: 0,
            grade: "",
        },
    ]);

    const [skills, setSkills] = useState([
        {
            id: 1,
            name: "JavaScript",
        },
        {
            id: 2,
            name: "ReactJS",
        },
        {
            id: 3,
            name: "NodeJS",
        },
        {
            id: 4,
            name: "Java",
        },
        {
            id: 5,
            name: "RestAPI",
        },
        {
            id: 6,
            name: "jQuery",
        },
        {
            id: 7,
            name: "MySQL",
        },
        {
            id: 8,
            name: "HTML",
        },
        {
            id: 9,
            name: "CSS",
        },
        {
            id: 10,
            name: "C++",
        },
    ]);

    const [workList, setWorkList] = useState([
        {
            id: "",
            position: "",
            company: "",
            type: "",
            startDate: "",
            endDate: "",
            description: "",
        },
    ]);

    const [projects, setProjects] = useState([
        {
            id: "",
            name: "",
            description: "",
            url: "",
        },
    ]);
    const value = { about, setAbout, educationList, setEducationList, skills, setSkills, workList, setWorkList, projects, setProjects, printElem, theme, setTheme };

    return (
        <ResumeContext.Provider value={value}>
            {children}
        </ResumeContext.Provider>
    )
}