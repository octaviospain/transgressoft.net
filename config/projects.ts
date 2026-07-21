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
      "Cross-platform desktop music player built with JavaFX and Spring Boot on top of music-commons and lirp, with local-first library management, waveform visualization and iTunes import.",
    githubLink: "https://github.com/octaviospain/musicott",
    techStack: [
      "Java",
      "Kotlin",
      "JavaFX",
      "Spring Boot",
      "Software Testing",
    ],
    startDate: new Date("2015-01-01"),
    endDate: new Date("2026-07-01"),
    companyLogoImg: "/projects/musicott/logo.png",
    pagesInfoArr: [
      {
        title: "Desktop Application",
        description:
          "A JavaFX desktop music manager with local-first library management, playback, waveform visualization and iTunes import.",
        imgArr: ["/projects/musicott/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "A cross-platform desktop music player built with JavaFX and Spring Boot, on top of music-commons and lirp. Manage your local music library, organize hierarchical playlists, play tracks with waveform visualization, browse by artists, albums and genres, and import from iTunes.",
        "I started this project in my university years as a small pet project to solve a problem with audio metadata tagging, in the times when I started to DJ. Back then I used iTunes to organize my music library and when I started to use DJ software and import my files there, it turned out that iTunes was not writing the track information I spent so much time curating into the file metadata tags, therefore having a frustrated experience since I spent so much time tagging my entire music library in order to find the tracks I wanted to play in my sets with ease.",
        "Therefore I started a cli tool that parsed the itunes library xml file and wrote the info into the track metadata using jaudiotagger. Easy-peasy. However, why stop there? I was studying to become a software engineer so, why not build my own music library app?",
        "That became Musicott, the project I spent countless hours learning to code alongside my studies with the ambition to have some features that I did not find in other similar apps while helping me become a better Software Engineer. Over the years I refactored its architecture into three projects — Musicott, music-commons and lirp — and it now ships as native installers for Linux, Windows and macOS.",
      ],
      bullets: [
        "Built a desktop music manager with Java 25, Kotlin and JavaFX, booting Spring Boot in non-web mode with javafx-weaver wiring FXML controllers as Spring beans and components communicating through ApplicationEvent publishing.",
        "Local-first storage: a SQLite database for the audio library plus JSON files for playlists and the waveform cache.",
        "Guided four-step iTunes import wizard, cover-grid browsing by artists, albums and genres, and cached waveform visualization with click/drag-to-seek.",
        "Tested across four Gradle source sets (unit, integration, UI, end-to-end) running headless via TestFX/Monocle, and packaged as native installers for Linux, Windows and macOS.",
      ],
    },
  },
  {
    id: "music-commons",
    companyName: "music-commons",
    type: "Personal",
    category: ["Library", "Backend"],
    shortDescription:
      "Modular, reactive Kotlin library for managing audio libraries, playlists and waveforms, published to Maven Central and built on top of lirp.",
    githubLink: "https://github.com/octaviospain/music-commons",
    techStack: [
      "Kotlin",
      "JavaFX",
      "Concurrent Programming",
      "Software Testing",
      "Kotlin Coroutines",
      "Kotlin Serialization",
    ],
    startDate: new Date("2020-01-01"),
    endDate: new Date("2026-07-01"),
    companyLogoImg: "/projects/music-commons/logo.png",
    pagesInfoArr: [
      {
        title: "Kotlin Audio Library",
        description:
          "Reactive Kotlin library providing reusable, persistence-agnostic core components for audio file management.",
        imgArr: ["/projects/music-commons/logo.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "music-commons is a modular, reactive Kotlin library extracted from the Musicott desktop application to provide reusable, persistence-agnostic components for audio file management. It is published to Maven Central under net.transgressoft and built on top of lirp for its reactive entity framework and event-driven architecture.",
        "Domain state changes — metadata edits, imports, removals — propagate automatically to every dependent view: artist catalogs, album and genre projections, playlists, waveforms and JavaFX bindings, with no manual wiring. The goal was a foundation that could power not just Musicott, but any Java or Kotlin project that manages audio files in an event-driven way.",
      ],
      bullets: [
        "Reactive audio library with live artist, album and genre projections that update incrementally as items change.",
        "Split into opt-in modules — api, core, fx and media — plus mapping-only persistence modules, so consumers pick in-memory, JSON or SQL persistence.",
        "Headless playback engine over JavaSound decoders (MP3, FLAC, OGG Vorbis/Opus, AAC/ALAC-M4A, WAV) with cached waveform generation and a JavaFX bridge exposing observable properties.",
        "Guards its public ABI with a Binary Compatibility Validator apiCheck task and ships a CycloneDX SBOM with SHA-256 dependency verification.",
      ],
    },
  },
  {
    id: "lirp",
    companyName: "lirp",
    type: "Personal",
    category: ["Library", "Backend"],
    shortDescription:
      "Lightweight Reactive Persistence — a Kotlin/Java library where domain entities own their reactivity and repositories persist transparently to SQL, JSON or Kafka.",
    githubLink: "https://github.com/octaviospain/lirp",
    techStack: [
      "Kotlin",
      "Kotlin Coroutines",
      "Kotlin Serialization",
      "Apache Kafka",
      "Domain Driven Design",
      "Kotest",
    ],
    startDate: new Date("2020-01-01"),
    endDate: new Date("2026-07-01"),
    companyLogoImg: "/projects/lirp/logo.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "LIRP (Lightweight Reactive Persistence) is a Kotlin/Java library published to Maven Central that solves a specific problem: most reactive libraries make you wire streams manually, and most persistence libraries treat entities as passive data. LIRP does both — declare a property with reactiveProperty() and it becomes observable; add an entity to a repository and persistence happens automatically, transparently, to SQL, JSON or Kafka.",
        "In many codebases, domain objects end up as anemic structures shuffled between services that externally query and mutate them. lirp takes the opposite approach. Inspired by DDD's concept of rich domain models, entities in lirp own their reactivity. When a property changes, the entity itself publishes the event — no external event bus wiring, no service-layer glue. Subscribers observe the entity directly, preserving the Bounded Context boundary and keeping coupling low.",
      ],
      bullets: [
        "Entity-first reactivity plus transparent persistence — an in-memory-first architecture backed by SQL (Exposed + HikariCP), JSON files, or a Kafka transactional outbox.",
        "Convention-over-configuration KSP code generation produces table definitions and accessors; DDD aggregate references with compiler-enforced cardinality and cascade semantics.",
        "Type-safe, Kotlin-native Query DSL with automatic secondary-index routing, plus soft delete and @Version optimistic locking.",
        "Multi-module design (api, core, ksp, sql, fx, kafka, gradle-plugin) with a JavaFX bridge and full Java interoperability.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
