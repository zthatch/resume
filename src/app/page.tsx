import Image from "next/image";
import avatar from "src/app/avatar.png";
import WorkExperience from "./WorkExperience";
import Button from '@mui/material/Button';

export default function Home() {
  return ( 
  <section>
    <header className="">
      <div className="">
        <Image
          alt="Zachary Thatcher"
          src={avatar}
          className=""
        />
        <p className="">
          Zachary Thatcher <br/> Senior Softare Engineer <br/> Geli/Qcells
        </p>
      </div>
      <p className="">
        Contact Info: <br/> zachary.alan.thatcher@gmail.com <br/> 860-839-0933
      </p>
    </header>
    <section>
      <h1 className="">
        Mission Statement
        </h1>
      <p className="">
        An architect of software solutions with extensive knowledge of different backend designs and technologies. Leads projects that improve data processing, facilitate scaling, and solve longstanding performance issues.
        <br/>
        <br/>
        Looking to for an opportunity to leverage early-stage product development skills and extensive background in the energy industry.
      </p>
    </section>

    <section>
      <h1 className="">
        Skills
      </h1>
      <p className="">
          Languages: Python (Flask, FastAPI, Pandas), Java(Spring), SQL, C, Javascript, CSS <br/>
          Message Brokers: Kafka, MQTT, AMQP <br/>
          Databases: Postgres, Cassandra, MongoDB, Redis <br/>
          Infrastructure/Monitoring: Git, Jenkins, Docker, Kubernetes, Prometheus
      </p>
    </section>

    <section>
      <h1 className="">
        Employment History
      </h1>
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
      </section>
      <Button variant="contained"> This is my Ideal Candidate! </Button>
  </section>
  )
}