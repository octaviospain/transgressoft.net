export interface contributionsInterface {
  repo: string;
  contributionDescription: string;
  repoOwner: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "sdk-kotlin",
    contributionDescription:
      "Building the official Kotlin SDK for CloudEvents: the core event model, attribute type system and validation, plus the build, contribution and quality foundation and supply-chain hardening. Also proposed the SDK to the CloudEvents specification.",
    repoOwner: "CloudEvents",
    link: "https://github.com/cloudevents/sdk-kotlin/pulls?q=is%3Apr+author%3Aoctaviospain",
  },
  {
    repo: "strawberry",
    contributionDescription:
      "Contributed whole-track waveform visualization on the playback seekbar, bringing to a popular open-source music player a feature born out of my own Musicott work.",
    repoOwner: "Strawberry Music Player",
    link: "https://github.com/strawberrymusicplayer/strawberry/pulls?q=is%3Apr+author%3Aoctaviospain",
  },
  {
    repo: "konture",
    contributionDescription:
      "Improving a Kotlin architecture-testing library that enforces architecture rules as fast, lightweight unit tests across Kotlin Multiplatform, Android and server-side projects. Refined its rule-violation reporting so failures pinpoint the exact declaration and source location, with localized messages across all supported locales.",
    repoOwner: "baole",
    link: "https://github.com/baole/konture/pulls?q=is%3Apr+author%3Aoctaviospain",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
