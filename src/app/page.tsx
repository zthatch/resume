import Image from "next/image";
import avatar from "src/app/avatar.png";

export default function Home() {
  return ( 
  <section>
    <header className="flex justify-between">
      <div className="flex justify-left">
        <Image
          alt="Zachary Thatcher"
          src={avatar}
          className="border border-neutral-200 dark:border-neutral-700 rounded-full h-20 w-20 mr-5"
        />
        <p className="font-bold">
          Zachary Thatcher <br/> Senior Softare Engineer <br/> Geli/Qcells
        </p>
      </div>
      <p className="text-right font-bold">
        Contact Info: <br/> zachary.alan.thatcher@gmail.com <br/> 860-839-0933
      </p>
    </header>

    <h1 className="font-bold text-3xl my-3 tracking-tighter">
      Mission Statement
      </h1>
    <p className="ml-8">
      An architect of software solutions with extensive knowledge of different backend designs and technologies. Leads projects that improve data processing, facilitate scaling, and solve longstanding performance issues.
      <br/>
      <br/>
      Looking to for an opportunity to leverage early-stage product development skills and extensive background in the energy industry.
    </p>

    <h1 className="font-bold text-3xl my-3 tracking-tighter">
      Skills
    </h1>
    <p className="">
        Languages: Python (Flask, FastAPI, Pandas), Java(Spring), SQL, C, Javascript, CSS <br/>
        Message Brokers: Kafka, MQTT, AMQP <br/>
        Databases: Postgres, Cassandra, MongoDB, Redis <br/>
        Infrastructure/Monitoring: Git, Jenkins, Docker, Kubernetes, Prometheus
    </p>

    <h1 className="text-3xl font-bold tracking-tighter mt-5">
      Employment History
    </h1>
    <h2 className="mt-3 text-2xl font-bold tracking-tighter">
      Senior Software Engineer at Q-Cells - New York (Remote)
    </h2>
      <h3 className="font-bold tracking-tighter text-lg">
        MARCH 2022 — PRESENT  
      </h3>
      <p className="ml-8 ">
          Lead development for several backend services (Flask+Spring), as well as distributed schedulers, during period where scale increased by a factor of 100-1000x
      </p>
        <ul className="ml-12 list-disc">
          <li>Eliminated numerous performance issues for SQL backed services (Kubernetes resource management, ORM nuances, caching, etc.), leading to response time improvement of 50-100x</li>
          <li>Designed/implemented SQLAlchemy-style AWS Athena abstraction to create data lake for offline data analysis and debugging</li>
          <li>Created scalable async streaming services with Spring Cloud Stream and Spring Integrations for Kafka/AMQP/MQTT</li>
          <li>Implemented new async access patterns for Cassandra with Spring service</li>
          <li>Proposed/lead the implementation of OpenAPI documentation for rest APIs</li>
          <li>Manage technical relationship with third party APIs</li>
          <li>Implemented job locking for distributed python schedulers via Redis</li>
        </ul>

    <h2 className="mt-3 text-2xl font-bold tracking-tighter">
      Backend Python Researcher at Billinge Group - New York City
    </h2>
      <h3 className="font-bold tracking-tighter text-lg">
        MAY 2020 — FEBRUARY 2022
      </h3>
      <p className="ml-8">
        Backend infrastructure/data-processing specialist for a research group with a rapidly expanding cloud presence.
      </p>
        <ul className="ml-12 list-disc">
          <li>Created/deployed unsupervised clustering app for full stack research website</li>
          <li>Maintained full stack Flask app, pdfitc.org (PR acceptance rights and GCP privileges)</li>
          <li>Implemented proper frontend security practices including CSRF and CORS</li>
          <li>Added backend interchange-ability (aggregation and migration) to custom document DBMS/report generator</li>
          <li>Prototyped scientific-data search microservice via fast-api and Mongo Atlas</li>
        </ul>

    <h2 className="mt-3 text-2xl font-bold tracking-tighter">
        Engineering/Embedded Systems Consultant at MPR Associates, Inc. - Alexandria, VA
    </h2>
      <h3 className="font-bold tracking-tighter text-lg">
        JULY 2017 — APRIL 2020
      </h3>
      <p className="ml-8">
          Delivered a variety of engineering products for QA intensive industries. Mainly focused on embedded software development.
      </p>
        <ul className="ml-12 list-disc">
          <li>Partial and sole contributor to C/C++ codebases for several medical devices that went into commercial production</li>
          <li>Established and managed requirements throughout the QA lifecycle</li>
          <li>Performed QA inspections on client software development workflows according to ISO standards</li>
          <li>Wrote technical reports explaining engineering risks and failures</li>
          <li>Cost/schedule oversight and risk analysis for highly-technical asset acquisitions</li>
        </ul>
  </section>
  )
}