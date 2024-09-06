import { Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import React from 'react';

// Create styles
const styles = StyleSheet.create({
    page: {
        with: 100,
        flexDirection: 'column',
        fontSize: 10,
        fontFamily: 'Lato',
        backgroundColor: '#FFFFFF',
        color: '#023642',
        padding: 50,
        margin: 10,
        lineHeight: 1.5,
        letterSpacing: 1,
    },
    sectionTitle: {
        marginTop: 20,
        color: '#305fec',
        fontFamily: 'SourceSansPro-Bold',
        textTransform: 'uppercase',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        marginBottom: 1,
    }, 
    title: {
        fontFamily: 'SourceSansPro-Bold',
    },
    sectionContent: {
        color: '#023642',
    },
    job: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 100,
    },
    jobCompany: {
        fontFamily: 'SourceSansPro-Bold',
    },
    jobSectionContent: {
        color: '#023642',
        marginBottom: 5,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    content: {
        flexDirection: 'column',
        flex: 1,
    },
    name: {
        fontSize: 18,
        textAlign: 'left',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        color: '#305fec',
        lineHeight: 0,
        letterSpacing: 1,
    },
    contactdetails: {
        justifyContent: 'flex-end',
        textAlign: 'left',
    },
    logo: {
        width: 50,
        height: 50,
        backgroundColor: 'blue',
        fontFamily: 'SourceSansPro-Bold',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    initials: {
        color: 'white',
        fontSize: 20,
    }
});

const contactInfo = {
    firstName: "Alexandre",
    lastName: "Magno",
    email: "alexandremagnodev0@gmail.com",
    phone: "+55(37)9 99492674",
    location: "Minas Gerais, Brazil",
}

const sections = [
    {
        order: 1,
        name: "Professional Summary",
        content: `Full-stack developer with a emphasis on backend development. 
        Proven ability to design, develop, and deploy robust web applications. 
        Seeking a challenging role to leverage my skills in Golang, PHP (Laravel and other),NodeJS and contribute to innovative projects.`
    },
    {
        order: 2,
        name: "Personal Information",
        content: `Date of Birth: 04/04/90
        LinkedIn: https://www.linkedin.com/in/alexandre-m-souza/`
    },
    {
        order: 3,
        name: "Work Experience",
        jobs: [
            {
                "company": "Mobiup Beyond Digital",
                "period": "Jan 2022 - Jul 2024, Sao Paulo",
                "role": "Full-Stack Web-Developer",
                "description": "Web Developer focused on the maintenance and enhancement of e-commerce projects, blogs, and payment gateway integrations. Responsible for leading improvements, implementing new features, and performing fixes, ensuring system stability and efficiency. I actively participated in the company's transition from a monolithic e-commerce architecture to microservices, including the implementation of a container orchestration infrastructure using Envoy."
            },
            {
                "company": "Trackerup Tecnologia LTDA",
                "period": "Jan 2018 - Jan 2022, Sao Paulo",
                "role": "Software Developer",
                "description": "I was responsible for maintaining and enhancing a task tracking and routing system for field employees. My activities included fixing bugs, implementing new features, optimizing system performance, and ensuring the accuracy of location and routing data, which improved the efficiency of external operations."
            },
            {
                "company": "W.E Logus Informática LTDA",
                "period": "Jan 2017 - Jan 2017, Formiga",
                "role": "T.I Assistant",
                "description": "I contributed to the company's CRM system by ensuring quality control through comprehensive testing, managing backup processes to safeguard data integrity, and delivering exceptional customer support. My role was essential in maintaining system reliability and providing clients with seamless experiences."
            },
            {
                "company": "SOL Logística e Locações LTDA ME",
                "period": "Jan 2016 - Jan 2016, Belo Horizonte",
                "role": "Administrative Assistant",
                "description": "I was responsible for issuing Electronic Transport Knowledge (CTe) documents, managing load control, and preparing balance sheets and reports. My role was crucial in ensuring accurate documentation and efficient logistics operations."
            }
        ]
    },
    {
        order: 4,
        name: "Education",
        title: "Pontifical Catholic University of Minas Gerais - PUC",
        content: "Bachelor's Degree in Information Systems | 06/2011 - 06/2015",
    },
    {
        order: 5,
        name: "Skills",

    }
]

const geNameInitials = () => {
    const result = [contactInfo.firstName, contactInfo.lastName];
    const initials = result.map(name => name[0].toUpperCase());
    return initials.join("");
}

function addSpacesToName(name) {
    const characters = name.trim().toUpperCase().split('')
    return characters.join(' ');
}

const sortedSections = [...sections].sort((a, b) => a.order - b.order);

const ResumePage = () => (
    <Page size="A4" style={styles.page}>
        <View style={styles.header}>
            <View style={styles.logo}>
                <Text style={styles.initials}>{geNameInitials()}</Text>
            </View>
            <View style={styles.name}>
                <Text>{addSpacesToName(contactInfo.firstName)}</Text>
                <Text>{addSpacesToName(contactInfo.lastName)}</Text>
            </View>
            <View style={styles.contactdetails}>
                <Text>{contactInfo.phone}</Text>
                <Text>{contactInfo.email}</Text>
                <Text>{contactInfo.location}</Text>
            </View>
        </View>
        {sortedSections.map((section,index) => (
            <View key={index} style={styles.section}>
                <Text style={styles.sectionTitle}>{section.name}</Text>
                {section.title && <Text style={styles.title}>{section.title}</Text>}
                {section.name === "Work Experience" ? (
                    <View>
                        {section.jobs.map((job, jobIndex) => (
                            <View key={jobIndex}>
                                <Text style={styles.jobCompany}> • {job.company} | {job.role} | {job.period}</Text>
                                <Text style={styles.jobSectionContent}>{job.description}</Text>
                            </View>
                        ))}
                    </View>
                ) : (
                    <Text style={styles.sectionContent}>{section.content}</Text>
                )}
            </View>
        ))}
    </Page>
);

export default ResumePage;