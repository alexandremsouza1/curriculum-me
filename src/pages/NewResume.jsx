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

const geNameInitials = (firstName, lastName) => {
  const result = [firstName, lastName];
  const initials = result.map((name) => name[0].toUpperCase());
  return initials.join("");
};

function addSpacesToName(name) {
  const characters = name.trim().toUpperCase().split("");
  return characters.join(" ");
}

/**
 * IMPORTANTE:
 * Este componente é renderizado pelo reconciliador próprio do @react-pdf/renderer,
 * que NÃO implementa todos os hooks do React (ex: useSyncExternalStore usado
 * internamente pelo react-i18next). Por isso ele NÃO chama useTranslation()
 * diretamente. Todo texto já deve chegar traduzido via `content`.
 *
 * `content` deve ser montado no componente pai (fora da árvore do PDF),
 * usando useTranslation() normalmente ali. Veja exemplo de App.js abaixo.
 */
const ResumePage = ({ content }) => {
  const sections = [
    {
      order: 1,
      key: "professionalSummary",
      name: content.sections.professionalSummary,
      content: content.professionalSummary.content,
    },
    {
      order: 2,
      key: "personalInformation",
      name: content.sections.personalInformation,
      content: content.personalInformation.content,
    },
    {
      order: 3,
      key: "workExperience",
      name: content.sections.workExperience,
      jobs: content.jobs,
    },
    {
      order: 4,
      key: "education",
      name: content.sections.education,
      title: content.education.title,
      content: content.education.content,
    },
    {
      order: 5,
      key: "skills",
      name: content.sections.skills,
      list: content.skills.list,
    },
  ];

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
    workExperience: renderExperience,
    skills: renderSkills,
  };

  const renderSection = (section) => {
    const renderFunction = sectionRenderers[section.key];
    if (renderFunction) {
      return renderFunction(section);
    }
    return <Text style={styles.sectionContent}>{section.content}</Text>;
  };

  const sortedSections = [...sections].sort((a, b) => a.order - b.order);

  const firstName = content.contact.firstName;
  const lastName = content.contact.lastName;

  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <View style={styles.logo}>
          <Text style={styles.initials}>{geNameInitials(firstName, lastName)}</Text>
        </View>
        <View style={styles.name}>
          <Text>{addSpacesToName(firstName)}</Text>
          <Text>{addSpacesToName(lastName)}</Text>
        </View>
        <View style={styles.contactdetails}>
          <View style={styles.contactItem}>
            <Image style={styles.icon} src="assets/icon-phone.png" />
            <Text>{content.contact.phone}</Text>
          </View>
          <View style={styles.contactItem}>
            <Image style={styles.icon} src="assets/icon-mail.png" />
            <Text>{content.contact.email}</Text>
          </View>
          <View style={styles.contactItem}>
            <Image style={styles.icon} src="assets/icon-location-pin.png" />
            <Text>{content.contact.location}</Text>
          </View>
        </View>
      </View>
      {sortedSections.map((section) => (
        <View key={section.key} style={styles.section}>
          <Text style={styles.sectionTitle}>{section.name}</Text>
          {section.title && <Text style={styles.title}>{section.title}</Text>}
          {renderSection(section)}
        </View>
      ))}
    </Page>
  );
};

export default ResumePage;