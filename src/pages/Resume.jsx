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
  image: {
    width: 128,
    margin: 10,
    border: '1 solid #2a3f4b',
    borderRadius: 100
  },
  icon_container: {
    textAlign: 'center',
    paddingLeft: 58,
    width: 128
  },
  small_icon: {
    width: 12,
    height: 12,
    marginRight: 5
  },
  icon: {
    marginTop: -32,
    width: 32,
    padding: 7
  },
  circle: {
    padding: 10,
    height: 32,
    width: 32,
    borderRadius: 100,
    backgroundColor: '#2a3f4b'
  },
  sidebar: {
    padding: 20,

    backgroundColor: '#cdd1d7'
  },
  sidebar_content: {
    marginTop: 20,
    paddingTop: 17,
    marginRight: -20,
    borderRight: '3 solid #f1592a'
  },
  subject: {
    width: 150,
    padding: 10,
    textAlign: 'center'
  },
  subject_title: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'Lato',
    paddingBottom: 5
  },
  subject_content: {
    textAlign: 'left'
  },
  section: {
    padding: 10,
    flex: 1
  },
  header: {
    paddingBottom: 52
  },
  pagetitle: {
    paddingTop: 30,
    paddingBottom: 20,
    fontSize: 20
  },
  name: {
    fontSize: 32,
    paddingBottom: 5
  },
  contactdetails: {
    paddingRight: 10,
    paddingBottom: 0
  },
  timeline_item: {
    display: 'flex',
    flexDirection: 'row',
    height: 38,
    marginBottom: -7
  },
  timeline_bullet: {
    width: 32
  },
  interest_title: {
    padding: '5 0 3 0'
  },
  progressbar_bg: {
    height: 12,
    width: 125,
    backgroundColor: '#2a3f4b'
  },
  progressbar_fg: {
    height: 12,
    width: '40%',
    backgroundColor: '#f1592a'
  },
  tag: {
    padding: '8 8 5 8',
    margin: 5,
    fontSize: 12,
    fontWeight: 'bold',
    borderRadius: 100,
    color: '#fff',
    backgroundColor: '#2a3f4b'
  },
  birthday: {
    fontSize: 10
  },
  company: {
    fontFamily: 'Roboto-Bold'
  },
  strong: {
    fontFamily: 'Roboto-Bold'
  },
  row: { display: 'flex', flexDirection: 'row' }
});
const ResumePage = () => (
  <Page size="A4" style={styles.page}>
    <View style={styles.sidebar}>
      <Image style={styles.image} src={`assets/alexandre_photo.png`} />
      <View style={styles.sidebar_content}>
        <View style={styles.icon_container}>
          <View style={styles.circle} />
          <Image style={styles.icon} src="assets/icon-tag.png" />
        </View>
        <View style={styles.subject}>
          <Text style={styles.subject_title}>SOBRE MIM</Text>
          <Text
            style={[
              styles.subject_content,
              { marginTop: 5, marginLeft: -10, marginRight: -10 },
            ]}
          >
            Olá, meu nome é Alexandre. 
            Sou desenvolvedor web experiente com
            mais de 5 anos de atuação no mercado. Formado em Sistemas de
            Informação, tenho sólidos conhecimentos em desenvolvimento web e
            programação em geral. 
            Minha experiência abrange desde o desenvolvimento de sites institucionais e blogs até aplicações web
            complexas, utilizando as mais diversas tecnologias e frameworks do mercado.
          </Text>
        </View>
        <View style={styles.icon_container}>
          <View style={styles.circle} />
          <Image style={styles.icon} src="assets/icon-puzzle.png" />
        </View>
        <View style={styles.subject}>
          <Text style={styles.subject_title}>INTERESSES</Text>
          <View style={styles.subject_content}>
            <Text style={styles.interest_title}>Front-end Development</Text>
            <View style={styles.progressbar_bg}>
              <View style={[styles.progressbar_fg, { width: "85%" }]} />
            </View>
          </View>
          <View style={styles.subject_content}>
            <Text style={styles.interest_title}>Back-end Development</Text>
            <View style={styles.progressbar_bg}>
              <View style={[styles.progressbar_fg, { width: "75%" }]} />
            </View>
          </View>
          <View style={styles.subject_content}>
            <Text style={styles.interest_title}>Dev-Ops Engineering</Text>
            <View style={styles.progressbar_bg}>
              <View style={[styles.progressbar_fg, { width: "70%" }]} />
            </View>
          </View>
          <View style={styles.subject_content}>
            <Text style={styles.interest_title}>Quality Assurance Analyst</Text>
            <View style={styles.progressbar_bg}>
              <View style={[styles.progressbar_fg, { width: "69%" }]} />
            </View>
          </View>
        </View>
      </View>
    </View>
    <View style={styles.section}>
      <View style={styles.header}>
        <Text style={styles.pagetitle}>CURRICULUM VITAE</Text>
        <Text style={styles.name}>
          Alexandre Magno <Text style={styles.birthday}>Abr 04-04-1990</Text>
        </Text>
        <View style={styles.row}>
          <Image style={styles.small_icon} src="assets/icon-phone.png" />

          <Text style={styles.contactdetails}>(+37)9 99492674</Text>
          <Image style={styles.small_icon} src="assets/icon-mail.png" />

          <Text style={styles.contactdetails}> xandemag@gmail.com</Text>
        </View>
        <View style={styles.row}>
          <Image style={styles.small_icon} src="assets/icon-location-pin.png" />
          <Text>Formiga-MG</Text>
        </View>
      </View>
      <View>
        <View
          style={{ display: "flex", flexDirection: "row", marginBottom: 10 }}
        >
          <View style={(styles.icon_container, { paddingLeft: 0 })}>
            <View style={styles.circle} />
            <Image style={styles.icon} src="assets/icon-work.png" />
          </View>
          <View
            style={
              (styles.subject,
              { textAlign: "left", paddingTop: 8, paddingLeft: 10 })
            }
          >
            <Text style={styles.subject_title}>EXPERIÊNCIA DE TRABALHO</Text>
          </View>
        </View>
        <View style={styles.timeline_item}>
          <View style={{ width: 80, padding: 5, paddingTop: 0 }}>
            <Text>2022 - Agora</Text>
          </View>

          <View style={{}}>
            <Image
              style={styles.timeline_bullet}
              src="assets/timeline-bullet.png"
            />
          </View>
          <View style={{ padding: 5, paddingTop: 0 }}>
            <Text style={styles.company}>MOBIUP BEYOND DIGITAL</Text>
            <Text>Full-Stack Web-Developer</Text>
          </View>
        </View>
        <View style={styles.timeline_item}>
          <View style={{ width: 80, padding: 5, paddingTop: 0 }}>
            <Text>2018 - 2022</Text>
          </View>

          <View style={{}}>
            <Image style={styles.timeline_bullet} src="assets/timeline-bullet.png" />
          </View>
          <View style={{ padding: 5, paddingTop: 0 }}>
            <Text style={styles.company}>TRACKER UP TECNOLOGIA LTDA</Text>
            <Text>Desenvolvedor Web</Text>
          </View>
        </View>
        <View style={styles.timeline_item}>
          <View style={{ width: 80, padding: 5, paddingTop: 0 }}>
            <Text>2017 - 2017</Text>
          </View>

          <View style={{}}>
            <Image style={styles.timeline_bullet} src="assets/timeline-bullet.png" />
          </View>
          <View style={{ padding: 5, paddingTop: 0 }}>
            <Text style={styles.company}>W.E LOGUS INFORMATICA LTDA</Text>
            <Text>Assistente de TI</Text>
          </View>
        </View>
        <View style={styles.timeline_item}>
          <View style={{ width: 80, padding: 5, paddingTop: 0 }}>
            <Text>2016 - 2016</Text>
          </View>

          <View style={{}}>
            <Image style={styles.timeline_bullet} src="assets/timeline-bullet-last.png" />
          </View>
          <View style={{ padding: 5, paddingTop: 0 }}>
            <Text style={styles.company}>SOL LOGISTICA E LOCAÇÕES LTDA ME</Text>
            <Text>Auxiliar de TI</Text>
          </View>
        </View>

        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 13, marginBottom: 10 }}>
          <View style={(styles.icon_container, { paddingLeft: 0 })}>
            <View style={styles.circle} />
            <Image style={styles.icon} src="assets/icon-library.png" />
          </View>

          <View style={(styles.subject, { textAlign: 'left', paddingTop: 8, paddingLeft: 10 })}>
            <Text style={styles.subject_title}>EDUCAÇÃO</Text>
          </View>
        </View>
        <View style={styles.timeline_item}>
          <View style={{ width: 64, padding: 5, paddingTop: 0 }}>
            <Text>Jun 2011</Text>
            <Text>Dez 2015</Text>
          </View>

          <View style={{}}>
            <Image style={styles.timeline_bullet} src="assets/timeline-bullet.png" />
          </View>
          <View style={{ padding: 5, paddingTop: 0 }}>
            <Text style={styles.company}>Pontifícia Universidade Católica de Minas Gerais</Text>
            <Text>Bacharel em Sistemas da Informação</Text>
          </View>
        </View>


        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 17, marginBottom: 10 }}>
          <View style={(styles.icon_container, { paddingLeft: 0 })}>
            <View style={styles.circle} />
            <Image style={styles.icon} src="assets/icon-thumbs-up.png" />
          </View>
          <View style={(styles.subject, { textAlign: 'left', paddingTop: 8, paddingLeft: 10 })}>
            <Text style={styles.subject_title}>PAIXÃO POR</Text>
          </View>
        </View>
        <View style={styles.row}>
          <Text style={styles.tag}>Linux</Text>
          <Text style={styles.tag}>Ubuntu</Text>
          <Text style={styles.tag}>GPT</Text>
          <Text style={styles.tag}>Android</Text>
          <Text style={styles.tag}>Docker</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.tag}>git</Text>
          <Text style={styles.tag}>kubernetes</Text>
          <Text style={styles.tag}>AdonisJs</Text>
          <Text style={styles.tag}>VSCode</Text>
          <Text style={styles.tag}>firebase</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.tag}>NodeJS</Text>
          <Text style={styles.tag}>PHP</Text>
          <Text style={styles.tag}>HTML5</Text>
          <Text style={styles.tag}>CSS3</Text>
          <Text style={styles.tag}>JavaScript</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.tag}>TypeScript</Text>
          <Text style={styles.tag}>Jest</Text>
          <Text style={styles.tag}>Webpack</Text>
          <Text style={styles.tag}>VUE</Text>
          <Text style={styles.tag}>React</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.tag}>React Native</Text>
          <Text style={styles.tag}>Redux</Text>
          <Text style={styles.tag}>Laravel</Text>
          <Text style={styles.tag}>GraphQL</Text>
          <Text style={styles.tag}>Mongo</Text>
        </View>
      </View>
    </View>
    <View
      style={[
        styles.row,
        {
          position: "absolute",
          top: "98%",
          height: 20,
          width: "100%",
          backgroundColor: "#f1592a",
          color: "#fff",
          textAlign: "center",
        },
      ]}
    >
      <Text fixed={true}>
          Todos os direitos reservados 
        <Text style={styles.strong}> ©{new Date().getFullYear()}</Text>
      </Text>
    </View>
  </Page>
);

export default ResumePage;
