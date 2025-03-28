import { Page, StyleSheet, Text, View, Image } from "@react-pdf/renderer";
import React from "react";

// Create styles
const styles = StyleSheet.create({
  page: {
    with: 100,
    flexDirection: "column",
    fontSize: 10,
    fontFamily: "Lato",
    backgroundColor: "#FFFFFF",
    color: "#023642",
    padding: 50,
    margin: 10,
    lineHeight: 1.5,
  },
  sectionTitle: {
    marginTop: 20,
    color: "#305fec",
    fontFamily: "SourceSansPro-Bold",
    textTransform: "uppercase",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    marginBottom: 1,
  },
  title: {
    fontFamily: "SourceSansPro-Bold",
  },
  sectionContent: {
    color: "#023642",
  },
  job: {
    flexDirection: "row",
    alignItems: "center",
    width: 100,
  },
  jobCompany: {
    fontFamily: "SourceSansPro-Bold",
  },
  jobSectionContent: {
    color: "#023642",
    marginBottom: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  content: {
    flexDirection: "column",
    flex: 1,
  },
  name: {
    fontSize: 18,
    textAlign: "left",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    color: "#305fec",
    lineHeight: 0,
    flexGrow: 1,
    marginLeft: 10,
  },
  contactdetails: {
    flexDirection: "column",
    textAlign: "left",
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 8,
    height: 8,
    marginRight: 2,
  },
  logo: {
    width: 50,
    height: 50,
    backgroundColor: "blue",
    fontFamily: "SourceSansPro-Bold",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  initials: {
    color: "white",
    fontSize: 20,
  },
  skillsContainer: {
    marginTop: 10,
  },
  skillsTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5,
  },
  skillsList: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  skillItem: {
    fontSize: 10,
  },
});

const contactInfo = {
  firstName: "Alexandre",
  lastName: "Magno",
  email: "alexandremagnodev0@gmail.com",
  phone: "(37)9 9949-2674",
  location: "Minas Gerais, Brazil",
};

const sections = [
  {
    order: 1,
    name: "Professional Summary",
    content: `Full-stack developer with a emphasis on backend development. 
        Proven ability to design, develop, and deploy robust web applications. 
        Seeking a challenging role to leverage my skills in Golang, PHP (Laravel and other),NodeJS and contribute to innovative projects.`,
  },
  {
    order: 2,
    name: "Personal Information",
    content: `Date of Birth: 04/04/90
        LinkedIn: https://www.linkedin.com/in/alexandre-m-souza/`,
  },
  {
    order: 3,
    name: "Work Experience",
    jobs: [
      {
        company: "LETS Delivery",
        period: "Feb 2025 - Present · 2 mos, São Paulo, Brazil · Remote",
        role: "Full Stack Engineer",
        description: `- Responsible for maintaining and developing projects related to the integration hub.
        - Developed APIs using Node.js and implemented serverless functions with AWS Lambda.
        - Integrated merchants with multiple marketplaces and logistics partners into a unified system.
        - Followed best development practices, writing clean and efficient code.
        - Implemented unit tests with Jest to ensure code quality and reliability.`,
      },
      {
        company: "Plastika Produtos Digitais",
        period:
          "Oct 2024 - Feb 2025 · 5 mos, Curitiba, Paraná, Brazil · Remote",
        role: "Full-Stack Web-Developer",
        description: `- Responsible for maintaining the Aston project, a fintech focused on providing digital financial solutions.
                - Developed a feature that enables fiduciary agents and banking correspondents to sell financial products directly through the platform.
                - Worked on development, testing, and optimization with a focus on stability and performance.
                - Ensured scalability, multi-provider support, performance, and availability.
                - Utilized Laravel Nova for building and managing the platform's administrative interface.`,
      },
      {
        company: "Mobiup Beyond Digital",
        period: "May 2022 - Jul 2024, Sao Paulo",
        role: "Full-Stack Web-Developer",
        description: `- Worked in the support and projects team, contributing to various e-commerce initiatives.
                - Participated in a project for a platform offering exclusive benefits and loyalty points for purchases.
                - Developed solutions for a ticketing system, integrating various services and APIs.
                - Actively contributed to Coca-Cola’s e-commerce platform, focused on the company’s products.
                - Took part in a large-scale project involving the migration of a legacy system to a microservices architecture, covering both backend and application migration.
                - Implemented performance, security, and scalability improvements during the migration process, using modern software development practices.
                - Worked with WordPress, customizing themes and plugins to enhance functionality.
                - Developed and maintained websites using WordPress Elementor, ensuring responsive and dynamic designs.
                - Integrated third-party plugins and optimized WordPress-based platforms for performance and SEO.`,
      },
      {
        company: "Trackerup Tecnologia LTDA",
        period: "Apr 2018 - May 2022, Sao Paulo",
        role: "Software Developer",
        description: `- Worked on the maintenance of the TrackerUp application tracking project, which allows advanced coordination of external teams in a fast and streamlined way. Key functionalities include: real-time task management, route suggestions, history of traveled routes, intelligent reporting
                 - Participated in the implementation of a large project for Whirlpool, managing tasks for employees responsible for maintaining white goods appliances.
                 - Contributed to the implementation of a project for Sanofi, calculating customer routes based on a schedule of visits to optimize costs for the company`,
      },
      {
        company: "W.E Logus Informática LTDA",
        period: "Dez 2016 - Nov 2017, Formiga",
        role: "T.I Assistant",
        description: `- Initially worked in customer service and support before transitioning to the quality department.
                 - Developed metrics to evaluate customer service performance and collected data to assess the acceptance of new features and the expected outcomes.
                 - Tested features deployed to the Eficaz ERP CRM to identify any side effects or issues.
                 - Responsible for database migration and ensuring data integrity during transitions.`,
      },
      {
        company: "SOL Logística e Locações LTDA ME",
        period: "Apr 2016 - Aug 2016, Belo Horizonte",
        role: "Administrative Assistant",
        description: `- Managed the issuance of tax documents related to cargo operations.
                 - Controlled internal operations for the Vilma Flour project, overseeing inventory management for incoming and outgoing products in the warehouse.
                 - Participated in the installation of the internal network and configuration of servers to support operational needs.`,
      },
    ],
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
    list: [
      "Vue",
      "React",
      "Laravel",
      "React-Native",
      "Expo",
      "PHP",
      "Go",
      "NodeJS",
      "Javascript",
      "Typescript",
      "Docker",
      "Kubernetes",
    ],
  },
];

const geNameInitials = () => {
  const result = [contactInfo.firstName, contactInfo.lastName];
  const initials = result.map((name) => name[0].toUpperCase());
  return initials.join("");
};

function addSpacesToName(name) {
  const characters = name.trim().toUpperCase().split("");
  return characters.join(" ");
}

const renderExperience = (section) => (
  <View>
    {section.jobs.map((job, jobIndex) => (
      <View key={jobIndex}>
        <Text style={styles.jobCompany}>
          {" "}
          • {job.company} | {job.role} | {job.period}
        </Text>
        <Text style={styles.jobSectionContent}>{job.description}</Text>
      </View>
    ))}
  </View>
);

const renderSkills = (section) => (
  <View style={styles.skillsContainer}>
    <Text style={styles.skillsList}>
      {section.list.map((skill, index) => (
        <Text key={index} style={styles.skillItem}>
          {" • " + skill}
        </Text>
      ))}
    </Text>
  </View>
);

const sectionRenderers = {
  "Work Experience": renderExperience,
  Skills: renderSkills,
};

const renderSection = (section) => {
  const renderFunction = sectionRenderers[section.name];
  if (renderFunction) {
    return renderFunction(section);
  }
  return <Text style={styles.sectionContent}>{section.content}</Text>;
};

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
        <View style={styles.contactItem}>
          <Image style={styles.icon} src="assets/icon-phone.png" />
          <Text>{contactInfo.phone}</Text>
        </View>
        <View style={styles.contactItem}>
          <Image style={styles.icon} src="assets/icon-mail.png" />
          <Text>{contactInfo.email}</Text>
        </View>
        <View style={styles.contactItem}>
          <Image style={styles.icon} src="assets/icon-location-pin.png" />
          <Text>{contactInfo.location}</Text>
        </View>
      </View>
    </View>
    {sortedSections.map((section, index) => (
      <View key={index} style={styles.section}>
        <Text style={styles.sectionTitle}>{section.name}</Text>
        {section.title && <Text style={styles.title}>{section.title}</Text>}
        {renderSection(section)}
      </View>
    ))}
  </Page>
);

export default ResumePage;
