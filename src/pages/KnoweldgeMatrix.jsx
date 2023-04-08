import { Image, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import React from 'react';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    fontSize: 12,
    fontFamily: 'Roboto',
    color: '#22292f',
    backgroundColor: '#e0e4e9'
  },
  section: {
    padding: 20,

    flex: 1
  },
  segment: {
    backgroundColor: 'white',
    borderBottom: '1 solid grey',
    borderRadius: 1
  },
  row: {
    display: 'flex',
    fontFamily: 'Roboto-Bold',
    flexDirection: 'row',
    color: 'black',
    fontSize: 14
  },
  subrow: {
    fontFamily: 'Roboto',
    fontSize: 12,
    backgroundColor: '#f6f6f6',
    border: '1 solid #ededed',
    flex: 1
  },
  expand_arrow: {
    width: 14,
    height: 14,
    margin: 5
  },

  head: {
    padding: 5,
    fontFamily: 'Roboto-Bold',
    backgroundColor: '#2a3f4b',
    color: 'white'
  },
  col: {
    display: 'flex',
    flexDirection: 'row',

    padding: 5
  },
  circle: {
    padding: 2,
    height: 14,
    width: 14
  },
  year: {
    fontFamily: 'Roboto-Bold'
  }
});

const data = [
  { skill: 'Tecnologias Web', years: 5, rating: 0 },
  {
    skill: 'CSS',
    siblings: [
      { skill: 'Tailwind', years: 1, rating: 3 },
      { skill: 'Bootstrap', years: 1.5, rating: 4 },
      { skill: 'MUI', years: 2.5, rating: 4 },
      { skill: 'Bulma', years: 2.5, rating: 4 }
    ],
    years: 5,
    rating: 0
  },
  {
    skill: 'Frameworks',
    siblings: [
      { skill: 'Vue', years: 1.5, rating: 3 },
      { skill: 'React', years: 1, rating: 3 },
      { skill: 'Laravel', years: 0.5, rating: 1 },
      { skill: 'Zend Framework', years: 0.5, rating: 2 },
      { skill: 'jQuery', years: 1.5, rating: 3 },
    ],
    years: 4,
    rating: 0
  },
  {
    skill: 'Nativo / Aplicativos Híbridos',
    siblings: [
      { skill: 'Android/Java', years: 2, rating: 2 },
      { skill: 'Cordova', years: 3.5, rating: 3 },
      { skill: 'Flutter', years: 3.5, rating: 4 },
      { skill: 'React Native', years: 1, rating: 2 }
    ],
    years: 1.5,
    rating: 0
  },
];

const toolingData = [
  {
    skill: 'Ferramentas de desenvolvimento',
    siblings: [
      { skill: 'git', years: 5, rating: 3 },
      { skill: 'NPM', years: 4, rating: 4 },
      { skill: 'ESLint', years: 2.5, rating: 4 },
      { skill: 'Yarn', years: 2, rating: 4 },
      { skill: 'Docker', years: 2.5, rating: 2 }
    ],
    years: 5,
    rating: 0
  },
  {
    skill: 'Testing Tools',
    siblings: [
      { skill: 'Jasmine', years: 1, rating: 2 },
      { skill: 'Jest', years: 2, rating: 3 },
      { skill: 'Karma', years: 1, rating: 2 },
      { skill: 'PHPUnit', years: 1, rating: 3 }
    ],
    years: 5,
    rating: 0
  },
  {
    skill: 'Ferramentas de Construção',
    siblings: [
      { skill: 'Babel', years: 2, rating: 2 },
      { skill: 'Grunt', years: 1, rating: 3 },
      { skill: 'Gulp', years: 2, rating: 3 },
      { skill: 'Webpack', years: 2, rating: 3 }
    ],
    years: 2.5,
    rating: 0
  },
  {
    skill: 'Linux',
    siblings: [
      { skill: 'Bash scripting', years: 1, rating: 2 },
      { skill: "Ubuntu distro's", years: 12, rating: 3 },
      { skill: 'Apache', years: 7, rating: 2 },
      { skill: 'NGINX', years: 5, rating: 3 }
    ],
    years: 12,
    rating: 0
  },
  {
    skill: 'Cloud',
    siblings: [{ skill: 'AWS', years: 0.5, rating: 1 }, { skill: 'GCP', years: 0.5, rating: 1 }],
    years: 0.5,
    rating: 0
  }
];

const backendSkillsData = [
  {
    skill: 'Linguagens de programação',
    siblings: [
      { skill: 'Python', years: 0.5, rating: 0 },
      { skill: 'C#', years: 0.5, rating: 0 },
      { skill: 'Java', years: 2, rating: 0 },
      { skill: 'NodeJS', years: 4, rating: 0 },
      { skill: 'PHP', years: 2, rating: 0 },
      { skill: 'Javascript', years: 2, rating: 0 },
      { skill: 'Typescript', years: 2, rating: 0 }
    ],
    years: 4,
    rating: 0
  },
  {
    skill: 'Banco de Dados',
    siblings: [
      { skill: 'MongoDB', years: 1, rating: 0 },
      { skill: 'MYSQL', years: 2, rating: 0 },
      { skill: 'Postgres', years: 1.5, rating: 0 },
      { skill: 'Redis', years: 1, rating: 0 },
      { skill: 'SQLite', years: 1, ratingx: 0 },
      { skill: 'Oracle', years: 3, rating: 0 },
      { skill: 'Firebase', years: 3, rating: 0 }
    ],
    years: 4,
    rating: 0
  },
  {
    skill: 'ORM',
    siblings: [
      { skill: 'Eloquent', years: 0.5, rating: 0 },
      { skill: 'Hibernate', years: 2, rating: 0 },
    ],
    years: 4,
    rating: 0
  },
  {
    skill: 'Arquitetura de Software',
    siblings: [
      { skill: 'GraphQL', years: 2, rating: 0 },
      { skill: 'REST', years: 3.5, rating: 0 },
      { skill: 'SOAP', years: 2, rating: 0 },
    ],
    years: 4,
    rating: 0
  }
];

const KnoweldgeMatrix = () => (
  <Page size="A4" style={styles.page}>
    <View style={styles.section}>
      <View style={styles.row}>
        <Text style={[styles.head, { flex: 1 }]}>Front-end Skills</Text>
      </View>
      {data.map(item => (
        <View style={styles.segment} wrap={false}>
          <View style={styles.row}>{SkillRow(item.skill, item.years, item.rating, item.siblings)}</View>
          <View style={styles.row}>
            {item.siblings && <Image style={styles.expand_arrow} src={'assets/arrow.png'} />}
            {item.siblings &&
              item.siblings.map(subitem => (
                <View style={styles.subrow}>{SkillRow(subitem.skill, subitem.years, subitem.rating)}</View>
              ))}
          </View>
        </View>
      ))}
      <Text break={true} style={{ paddingTop: 20 }} />
      <View style={styles.row}>
        <Text style={[styles.head, { flex: 1 }]}>Back-end Skills</Text>
      </View>
      {backendSkillsData.map(item => (
        <View style={styles.segment} wrap={false}>
          <View style={styles.row}>{SkillRow(item.skill, item.years, item.rating, item.siblings)}</View>
          <View style={styles.row}>
            {item.siblings && <Image style={styles.expand_arrow} src={'assets/arrow.png'} />}
            {item.siblings &&
              item.siblings.map(subitem => (
                <View style={styles.subrow}>{SkillRow(subitem.skill, subitem.years, subitem.rating)}</View>
              ))}
          </View>
        </View>
      ))}
      <Text break={true} style={{ paddingTop: 20 }} />

      <View style={styles.row}>
        <Text style={[styles.head, { flex: 1 }]}>Ferramentas</Text>
      </View>
      {toolingData.map(item => (
        <View style={styles.segment} wrap={false}>
          <View style={styles.row}>{SkillRow(item.skill, item.years, item.rating, item.siblings)}</View>
          <View style={styles.row}>
            {item.siblings && <Image style={styles.expand_arrow} src={'assets/arrow.png'} />}
            {item.siblings &&
              item.siblings.map(subitem => (
                <View style={styles.subrow}>{SkillRow(subitem.skill, subitem.years, subitem.rating)}</View>
              ))}
          </View>
        </View>
      ))}
    </View>
  </Page>
);

const SkillRow = (skill, years, rating, siblings = []) => (
  <React.Fragment>
    <Text style={[styles.col, { flex: 1 }]}>{skill}</Text>
    {/* <Text style={[styles.col, styles.year]}>{years} jaar</Text> */}
    <View style={[styles.col, { width: '16%' }]}>
      {/* {[...Array(rating)].map(r => (
        <Image key={`rate-${r}`} style={styles.circle} src={'assets/star.png'} />
      ))} */}
    </View>
  </React.Fragment>
);

export default KnoweldgeMatrix;
