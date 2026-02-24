import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "musicott",
    companyName: "Musicott",
    type: "Personal",
    category: ["Desktop", "Backend"],
    shortDescription:
      "Java 8 desktop music manager application using JavaFX and CSS, with REST client, dependency injection, and comprehensive testing.",
    githubLink: "https://github.com/octaviospain/musicott",
    techStack: ["Java", "JavaFX", "Spring Boot", "Software Testing"],
    startDate: new Date("2015-01-01"),
    endDate: new Date("2025-12-01"),
    companyLogoImg: "/projects/musicott/logo.png",
    pagesInfoArr: [
      {
        title: "Desktop Application",
        description:
          "A JavaFX desktop music manager with library management, playback, and waveform visualization.",
        imgArr: ["/projects/musicott/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Musicott is a Java 8 desktop application for managing music libraries, built with JavaFX and CSS for a rich user interface experience.",
        "The project features unit testing with JUnit 5 and UI testing with TestFX, a REST web client with JAX-RS, and dependency injection with Google Guice and Spring Boot. Currently under redesign using music-commons and transgressoft-commons libraries as part of a modular architectural split.",
      ],
      bullets: [
        "Built a desktop music manager application using Java 8 and JavaFX with CSS styling.",
        "Implemented unit testing with JUnit 5 and UI testing with TestFX for comprehensive test coverage.",
        "Developed REST web client integration using JAX-RS.",
        "Used dependency injection with Google Guice and Spring Boot for clean architecture.",
        "Currently redesigning with music-commons and transgressoft-commons for modular architecture.",
      ],
    },
  },
  {
    id: "music-commons",
    companyName: "music-commons",
    type: "Personal",
    category: ["Library", "Backend"],
    shortDescription:
      "A modular, reactive Kotlin library for managing audio libraries, playlists, and waveform visualizations.",
    githubLink: "https://github.com/octaviospain/music-commons",
    techStack: ["Kotlin", "Concurrent Programming", "Software Testing"],
    startDate: new Date("2020-01-01"),
    endDate: new Date("2025-12-01"),
    companyLogoImg: "/projects/music-commons/logo.png",
    pagesInfoArr: [
      {
        title: "Kotlin Audio Library",
        description:
          "Reactive Kotlin library providing reusable core components for audio file management.",
        imgArr: ["/projects/music-commons/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "music-commons is a modular, reactive Kotlin library originally extracted from the Musicott desktop application to provide reusable core components for audio file management across multiple projects.",
        "The goal was to create a foundation that could power not just Musicott, but any project that needs to manage audio files and related operations — whether that's handling playlists, generating waveforms, managing metadata, or implementing import/export functionality.",
      ],
      bullets: [
        "Extracted reusable audio management logic from Musicott into a standalone Kotlin library.",
        "Implemented reactive programming patterns for audio library, playlist, and waveform management.",
        "Designed modular architecture to support multiple downstream projects.",
        "Provides core components for metadata handling, import/export, and audio file operations.",
      ],
    },
  },
  {
    id: "transgressoft-commons",
    companyName: "transgressoft-commons",
    type: "Personal",
    category: ["Library", "Backend"],
    shortDescription:
      "A reactive programming library in Kotlin using Publisher-Subscriber pattern, Coroutines, and Domain Driven Design.",
    githubLink: "https://github.com/octaviospain/transgressoft-commons",
    techStack: [
      "Kotlin",
      "Concurrent Programming",
      "Domain Driven Design",
      "Software Architecture",
    ],
    startDate: new Date("2020-01-01"),
    endDate: new Date("2025-12-01"),
    companyLogoImg: "/projects/transgressoft-commons/logo.png",
    pagesInfoArr: [
      {
        title: "Reactive Framework",
        description:
          "Lightweight Kotlin framework for building reactive, persistent applications with DDD principles.",
        imgArr: ["/projects/transgressoft-commons/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "transgressoft-commons is a reactive programming library in Kotlin using the Publisher-Subscriber pattern.",
        "It builds upon Kotlin Coroutines and Kotlin Serialization to provide a ready-to-use solution for building reactive, persistent applications in a clean, decoupled, and object-oriented approach loyal to Domain Driven Design (DDD).",
      ],
      bullets: [
        "Built a lightweight reactive framework using Kotlin Coroutines and Publisher-Subscriber pattern.",
        "Leveraged Kotlin Serialization for persistence in a clean, decoupled architecture.",
        "Applied Domain Driven Design (DDD) principles throughout the framework design.",
        "Provides ready-to-use foundation for building reactive, persistent applications.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
