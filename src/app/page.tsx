import Image from "next/image";
import avatar from "src/app/avatar.png";
import WorkExperience from "./WorkExperience";
import Section from "./Section"
import {Button, Box, Typography, List, ListItem, ListItemText, Avatar, Tooltip} from '@mui/material';

const breakpoints = {
  flex: { xs: "100%", sm: "calc(50% - 50px)",
   md: "calc(33% - 50px)", lg: "calc(25% - 50px)" },
};

export default function Home() {
  return ( 
  <section>
    <Box sx={{ display: 'flex' , flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', pt: 5}}>
      <Box sx={{display: 'flex', mb: 2, alignItems: 'center', justifyContent: {xs: "center", sm: "left"}, ...breakpoints}}>
        <Avatar sx={{ width: 85, height: 85 }}>
          <Image
            alt="Zachary Thatcher"
            src={avatar}
          />
        </Avatar>
        <Typography color="initial" sx={{pl: 2}}>
          Zachary Thatcher <br/> Senior Softare Engineer <br/> Geli/Qcells
        </Typography>
          
      </Box>
      <Button variant="contained" sx={{breakpoints}}> This is my Ideal Candidate! </Button>
      <Typography sx={{mt: 2, textAlign: {xs: "center", sm: "right"}, ...breakpoints}}>
        Contact Info: <br/> zachary.alan.thatcher@gmail.com <br/> 860-839-0933
      </Typography>
    </Box>
    <Section title="Mission Statement">
      <Typography>
        An architect of software solutions with extensive knowledge of different backend designs and technologies. Leads projects that improve data processing, facilitate scaling, and solve longstanding performance issues.
        <br/>
        <br/>
        Looking to for an opportunity to leverage early-stage product development skills and extensive background in the energy industry.
      </Typography>
    </Section>

    <Section title="Skills">
      <List disablePadding={true}>
          <ListItem><ListItemText primary="Languages: Python (Flask, FastAPI, Pandas), Java (Spring), SQL, C, Javascript, CSS"/> </ListItem>
          <ListItem><ListItemText primary="Message Brokers: Kafka, MQTT, AMQP"/></ListItem>
          <ListItem><ListItemText primary="Databases: Postgres, Cassandra, MongoDB, Redis"/></ListItem>
          <ListItem><ListItemText primary="Infrastructure/Monitoring: Git, Jenkins, Docker, Kubernetes, Prometheus"/></ListItem>
      </List>
    </Section>

    <Section title="Employment History">
        <WorkExperience 
        title={"Senior Software Engineer at Q-Cells - New York (Remote)"} 
        timespan={"MARCH 2022 — PRESENT "} 
        summary={"Lead development for several backend services (Flask+Spring), as well as distributed schedulers, during period where scale increased by a factor of 100-1000x"} 
        achievements={[
          "Eliminated numerous performance issues for SQL backed services (Kubernetes resource management, ORM nuances, caching, etc.), leading to response time improvement of 50-100x",
          "Designed/implemented SQLAlchemy-style AWS Athena abstraction to create data lake for offline data analysis and debugging",
          "Created scalable async streaming services with Spring Cloud Stream and Spring Integrations for Kafka/AMQP/MQTT",
          "Implemented new async access patterns for Cassandra with Spring service",
          "Proposed/lead the implementation of OpenAPI documentation for rest APIs",
          "Manage technical relationship with third party APIs",
          "Implemented job locking for distributed python schedulers via Redis"
        ]
        }/>
        <WorkExperience 
        title={"Backend Python Researcher at Billinge Group - New York City"} 
        timespan={"MAY 2020 — FEBRUARY 2022"} 
        summary={"Backend infrastructure/data-processing specialist for a research group with a rapidly expanding cloud presence."} 
        achievements={[
          "Created/deployed unsupervised clustering app for full stack research website",
          "Maintained full stack Flask app, pdfitc.org (PR acceptance rights and GCP privileges)",
          "Implemented proper frontend security practices including CSRF and CORS",
          "Added backend interchange-ability (aggregation and migration) to custom document DBMS/report generator",
          "Prototyped scientific-data search microservice via fast-api and Mongo Atlas"
        ]
        }/>
        <WorkExperience 
        title={"Engineering/Embedded Systems Consultant at MPR Associates, Inc. - Alexandria, VA"} 
        timespan={"JULY 2017 — APRIL 2020"} 
        summary={"Delivered a variety of engineering products for QA intensive industries. Mainly focused on embedded software development."} 
        achievements={[
          "Partial and sole contributor to C/C++ codebases for several medical devices that went into commercial production",
          "Established and managed requirements throughout the QA lifecycle",
          "Performed QA inspections on client software development workflows according to ISO standards",
          "Wrote technical reports explaining engineering risks and failures",
          "Cost/schedule oversight and risk analysis for highly-technical asset acquisitions"
        ]
        }/>
    </Section>
  </section>
  )
}