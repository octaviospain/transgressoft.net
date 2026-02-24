import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "cisco",
    position: "Software Engineer, Java Backend Engineer",
    company: "Cisco Systems",
    location: "Prague (remote)",
    startDate: new Date("2024-05-01"),
    endDate: new Date("2025-11-01"),
    description: [
      "Design, implementation, testing, and maintenance of new features, bugfixes and architectural changes of a JVM backend (Java 8, Java 17 and Scala) using Spring Boot and React + Redux frontend.",
      "Architected and implemented new REST API design using OpenAPI, enhancing developer productivity by providing clear documentation.",
    ],
    achievements: [
      "Architected and implemented new REST API design using OpenAPI, enhancing developer productivity by providing clear documentation.",
      "Developed and maintained features across a multi-version JVM backend codebase (Java 8, Java 17, Scala).",
    ],
    skills: ["Java", "Scala", "Spring Boot", "React", "OpenAPI"],
    companyUrl: "https://www.cisco.com",
  },
  {
    id: "sp-global",
    position: "Software Engineer, Java Backend Engineer",
    company: "S&P Global",
    location: "Prague (remote)",
    startDate: new Date("2023-08-01"),
    endDate: new Date("2024-12-01"),
    description: [
      "Implementation, testing and maintenance of features in a Java backend system with a Swing based desktop application.",
      "Design and development of a data migration tool with JavaFX.",
      "Design and development of testing tools for API REST endpoint e2e testing.",
      "Development of features for a green field platform using Apache Ignite.",
      "Design and development of a data migration tool using UI and CLI entrypoints and concurrent programming.",
    ],
    achievements: [
      "Designed and developed a data migration tool with JavaFX using concurrent programming techniques.",
      "Built testing tools for API REST endpoint e2e testing, improving quality assurance.",
      "Developed features for a green field platform using Apache Ignite.",
    ],
    skills: ["Java", "JavaFX", "Apache Ignite", "Concurrent Programming", "API Design"],
  },
  {
    id: "flatexdegiro",
    position: "Software Engineer, Java Backend Engineer",
    company: "flatexDegiro",
    location: "Prague (remote)",
    startDate: new Date("2022-02-01"),
    endDate: new Date("2023-04-01"),
    description: [
      "Implementation of features in microservices codebase written in Java, using Spring and Spring Boot using REST APIs.",
      "Incident handling, bug tracking and fixes and production support of the system and the MySQL databases.",
      "Development of microservices using Apache Kafka.",
    ],
    achievements: [
      "Implemented event-driven microservices using Apache Kafka for financial transaction processing.",
      "Maintained and optimized MySQL databases for production systems.",
    ],
    skills: ["Java", "Spring Boot", "Apache Kafka", "MySQL"],
  },
  {
    id: "deutsche-borse",
    position: "Software Engineer",
    company: "Deutsche Börse",
    location: "Prague (hybrid)",
    startDate: new Date("2020-02-01"),
    endDate: new Date("2022-02-01"),
    description: [
      "Design, implementation, testing and maintenance of enterprise modular mainframe system of a Service Oriented Architecture, deployed on JBoss and Tomcat on RHEL servers, using Spring Boot and Hibernate.",
      "Maintenance and development of a GWT-based frontend.",
    ],
    achievements: [
      "Designed and maintained enterprise SOA system deployed on JBoss and Tomcat on RHEL servers.",
      "Developed features using Spring Boot and Hibernate for a modular mainframe system.",
    ],
    skills: ["Java", "Spring Boot", "Hibernate"],
  },
  {
    id: "deloitte",
    position: "Java Developer",
    company: "Deloitte Digital",
    location: "Prague",
    startDate: new Date("2019-04-01"),
    endDate: new Date("2019-11-01"),
    description: [
      "Implementation of e-commerce solutions using SAP Hybris Commerce platform for different clients in Java and Spring Boot.",
    ],
    achievements: [
      "Delivered e-commerce solutions using SAP Hybris Commerce platform for multiple clients.",
    ],
    skills: ["Java", "Spring Boot"],
  },
  {
    id: "creative-dock",
    position: "Software Engineer",
    company: "Creative Dock",
    location: "Prague",
    startDate: new Date("2018-08-01"),
    endDate: new Date("2019-03-01"),
    description: [
      "Implementation, testing and maintenance of a BPM application using Camunda and Spring Boot.",
      "Requirements analysis, architectural and component design, implementation and testing of a microservices system with applications in Java with Spring Boot deployed on AWS; and in Node.js with TypeScript on a Kubernetes cluster. Integration of Blockchain technology, and API usage with GraphQL.",
    ],
    achievements: [
      "Built BPM application using Camunda and Spring Boot.",
      "Architected microservices system deployed on AWS (Java/Spring Boot) and Kubernetes (Node.js/TypeScript).",
    ],
    skills: [
      "Java",
      "Spring Boot",
      "Camunda",
      "Node.js",
      "Typescript",
      "AWS",
      "Kubernetes",
      "GraphQL",
    ],
  },
  {
    id: "barclays",
    position: "Software Engineer",
    company: "Barclays Investment Bank",
    location: "Prague",
    startDate: new Date("2017-07-01"),
    endDate: new Date("2018-07-01"),
    description: [
      "Implementation, testing and maintenance of backend systems coded in Java, with multi environment-agnostic profiles, interconnected via message queues with RabbitMQ, SOAP and REST web services and RMI.",
    ],
    achievements: [
      "Developed and maintained Java backend systems interconnected via RabbitMQ message queues and REST/SOAP web services.",
    ],
    skills: ["Java", "RabbitMQ"],
  },
];
