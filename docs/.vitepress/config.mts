import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FandomHub",

  description:
    "An API for managing and accessing anime and manga-related information, inspired by MyAnimeList. Built with Django and Django Rest Framework, PostgreSQL, SQLite, Redis, and Docker.",
  lang: "en-US",

  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1718409196/project_fandomhub_docs/jl2a92rkuo0kbrt3szce.svg",
      },
    ],
  ],
  ignoreDeadLinks: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    siteTitle: "FandomHub",
    logo: "https://res.cloudinary.com/dwyvfa5dj/image/upload/v1718409196/project_fandomhub_docs/jl2a92rkuo0kbrt3szce.svg",

    nav: [
      { text: "Documentation", link: "/introduction/what_is_fandomhub" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    search: {
      provider: "local",
    },

    footer: {
      message:
        'Released under the <a href="https://github.com/tyronejosee/project_fandomhub_api/blob/main/LICENSE">MIT License</a>.',
      copyright:
        'Copyright © 2023-present <a href="https://github.com/tyronejosee">Tyrone José</a>',
    },

    sidebar: [
      // Introduction
      {
        text: "Introduction",
        // collapsed: true,
        items: [
          {
            text: "What is FandomHub",
            link: "/introduction/what_is_fandomhub",
          },
          { text: "Installation", link: "/introduction/installation" },
          { text: "Structure folder", link: "/introduction/structure" },
          { text: "Endpoints", link: "/introduction/endpoints" },
        ],
      },
      // Models
      {
        text: "Models",
        items: [
          { text: "Anime model", link: "/models/anime" },
          { text: "AnimeList model", link: "/models/animelist" },
          { text: "AnimeListItem model", link: "/models/animelistitem" },
          { text: "AnimeStats model", link: "/models/animestats" },
          { text: "Broadcast model", link: "/models/broadcast" },
          { text: "Character model", link: "/models/character" },
          { text: "CharacterAnime model", link: "/models/characteranime" },
          { text: "CharacterManga model", link: "/models/charactermanga" },
          { text: "CharacterVoice model", link: "/models/charactervoice" },
          { text: "Club model", link: "/models/club" },
          { text: "ClubMember model", link: "/models/clubmember" },
          { text: "Demographic model", link: "/models/demographic" },
          { text: "Discussion model", link: "/models/discussion" },
          { text: "Event model", link: "/models/event" },
          { text: "Genre model", link: "/models/genre" },
          { text: "Magazine model", link: "/models/magazine" },
          { text: "Manga model", link: "/models/manga" },
          { text: "MangaList model", link: "/models/mangalist" },
          { text: "MangaListItem model", link: "/models/mangalistitem" },
          { text: "MangaStats model", link: "/models/mangastats" },
          { text: "News model", link: "/models/news" },
          { text: "Person model", link: "/models/person" },
          { text: "Picture model", link: "/models/picture" },
          { text: "Producer model", link: "/models/producer" },
          { text: "Profile model", link: "/models/profile" },
          { text: "Review model", link: "/models/review" },
          { text: "StaffAnime model", link: "/models/staffanime" },
          { text: "Theme model", link: "/models/theme" },
          { text: "Topic model", link: "/models/topic" },
          { text: "User model", link: "/models/user" },
          { text: "Video model", link: "/models/video" },
        ],
      },
      // Configuration
      {
        text: "References",
        items: [
          { text: "Requeriments", link: "/references/requeriments" },
          { text: "Server", link: "/references/server" },
        ],
      },
      {
        text: "FAQs",
        items: [
          { text: "Business model", link: "/faqs/business_model" },
          { text: "License", link: "/faqs/license" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/tyronejosee/project_fandomhub_api",
      },
    ],
  },

  locales: {
    root: {
      label: "English",
      lang: "en",
    },

    es: {
      label: "Español",
      lang: "es",
      link: "/es",
    },
  },
});
