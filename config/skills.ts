import { Icons } from "@/components/common/icons";

export interface SkillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: SkillsInterface[] = [
  {
    name: "Java",
    description:
      "Core language with 9+ years of professional experience across enterprise systems, microservices, and desktop applications.",
    rating: 5,
    icon: Icons.Java,
  },
  {
    name: "Kotlin",
    description:
      "Modern JVM language used for building reactive libraries, coroutine-based frameworks, and Spring Boot services.",
    rating: 5,
    icon: Icons.Kotlin,
  },
  {
    name: "Spring Framework",
    description:
      "Deep expertise in Spring Boot, Spring MVC, and Spring ecosystem for enterprise backend development.",
    rating: 5,
    icon: Icons.Spring,
  },
  {
    name: "Concurrent Programming",
    description:
      "Extensive experience with multithreading, reactive programming, coroutines, and high-throughput systems.",
    rating: 5,
    icon: Icons.Star,
  },
  {
    name: "API Design",
    description:
      "Design and implementation of RESTful APIs, OpenAPI specifications, and GraphQL schemas.",
    rating: 5,
    icon: Icons.Star,
  },
  {
    name: "JavaFX",
    description:
      "Desktop application development with rich UI components and media capabilities.",
    rating: 5,
    icon: Icons.Java,
  },
  {
    name: "Software Architecture",
    description:
      "Designing scalable microservice architectures, event-driven systems, and distributed platforms.",
    rating: 4,
    icon: Icons.Star,
  },
  {
    name: "Apache Kafka",
    description:
      "Event-driven architecture with Kafka for high-throughput messaging and stream processing.",
    rating: 3,
    icon: Icons.Apachekafka,
  },
  {
    name: "Docker",
    description:
      "Containerization of services and local development environments with Docker and Docker Compose.",
    rating: 3,
    icon: Icons.Docker,
  },
  {
    name: "Maven",
    description:
      "Build automation and dependency management for Java/Kotlin projects.",
    rating: 4,
    icon: Icons.Apachemaven,
  },
  {
    name: "Gradle",
    description:
      "Modern build tool for JVM projects with custom plugins and multi-module setups.",
    rating: 4,
    icon: Icons.Gradle,
  },
  {
    name: "MySQL",
    description:
      "Relational database design, query optimization, and schema management.",
    rating: 3,
    icon: Icons.Mysql,
  },
  {
    name: "Domain Driven Design",
    description:
      "Applying DDD patterns including bounded contexts, aggregates, and ubiquitous language.",
    rating: 4,
    icon: Icons.Star,
  },
  {
    name: "Software Testing",
    description:
      "Unit testing, integration testing, and TDD with JUnit, Mockito, and Kotest.",
    rating: 4,
    icon: Icons.Star,
  },
  {
    name: "React.js",
    description:
      "Building interactive user interfaces with components, hooks, and state management.",
    rating: 3,
    icon: Icons.React,
  },
  {
    name: "GraphQL",
    description:
      "API query language for flexible data fetching and schema-first development.",
    rating: 3,
    icon: Icons.Graphql,
  },
  {
    name: "Typescript",
    description:
      "Type-safe JavaScript for building reliable frontend and Node.js applications.",
    rating: 3,
    icon: Icons.Typescript,
  },
  {
    name: "Javascript",
    description:
      "Dynamic scripting for web applications and server-side development.",
    rating: 3,
    icon: Icons.Javascript,
  },
  {
    name: "AWS",
    description:
      "Cloud services including EC2, S3, Lambda, and infrastructure management.",
    rating: 3,
    icon: Icons.Amazonaws,
  },
  {
    name: "Node.js",
    description:
      "Server-side JavaScript runtime for building APIs and tooling.",
    rating: 2,
    icon: Icons.Nodejs,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
