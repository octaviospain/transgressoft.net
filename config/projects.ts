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
      "Java 25 desktop music manager application using JavaFX and CSS, with dependency injection, and comprehensive testing.",
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
        "A cross-platform desktop music player built with JavaFX and Spring Boot, on top of music-commons and lirp. Manage your local music library, organize playlists, play tracks with waveform visualization, and import from iTunes.",
        "I started this project in my university years as a small pet project to solve a problem with audio metadata tagging, in the times when I started to DJ. Back then I used iTunes to organize my music library and when I started to use DJ software and import my files there, it turned out that iTunes was not writing the track information I spent so much time curating into the file metadata tags, therefore having a frustrated experience since I spent so much time tagging my entire music library in order to find the tracks I wanted to play in my sets with ease.",
        "Therefore I started a cli tool that parsed the itunes library xml file and wrote the info into the track metadata using jaudiotagger. Easy-peasy. However, why stop there? I was studying to become a software engineer so, why not build my own music library app?",
        "That became Musicott, the project I spent countless hours learning to code alongside my studies with the ambition to have some features that I did not find in other similar apps while helping me become a better Software Engineer.",
      ],
      bullets: [
        "Built a desktop music manager application using Java 25, Kotlin and JavaFX with CSS styling.",
        "Implemented unit testing with JUnit 5 and UI testing with TestFX for comprehensive test coverage.",
        "Spring Boot for clean architecture.",
        "Built on top of music-commons and lirp for modular architecture.",
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
    techStack: [
      "Kotlin",
      "Concurrent Programming",
      "Software Testing",
      "Kotlin Coroutines",
      "Kotlin Serialization",
    ],
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
    id: "lirp",
    companyName: "lirp",
    type: "Personal",
    category: ["Library", "Backend"],
    shortDescription:
      "A reactive programming library in Kotlin using Publisher-Subscriber pattern, Coroutines, and Domain Driven Design.",
    githubLink: "https://github.com/octaviospain/lirp",
    techStack: [
      "Kotlin",
      "Kotlin Coroutines",
      "Kotlin Serialization",
      "Kotest",
    ],
    startDate: new Date("2020-01-01"),
    endDate: new Date("2025-12-01"),
    companyLogoImg: "/projects/lirp/logo.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "A reactive library for Kotlin & Java projects that implements the Publisher-Subscriber pattern, enabling more maintainable and decoupled systems through reactive programming principles.",
        "In many codebases, domain objects end up as anemic structures shuffled between services that externally query and mutate them. lirp takes the opposite approach. Inspired by DDD's concept of rich domain models, entities in lirp own their reactivity. When a property changes, the entity itself publishes the event — no external event bus wiring, no service-layer glue. Subscribers observe the entity directly, preserving the Bounded Context boundary and keeping coupling low.",
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
