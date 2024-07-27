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
      { text: "Documentation", link: "/en/introduction/what_is_fandomhub" },
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
            link: "/en/introduction/what_is_fandomhub",
          },
          { text: "Installation", link: "/en/introduction/installation" },
          { text: "Structure folder", link: "/en/introduction/structure" },
          { text: "Endpoints", link: "/en/introduction/endpoints" },
        ],
      },
      // Models
      {
        text: "Models",
        items: [
          { text: "Anime model", link: "/en/models/anime" },
          { text: "AnimeList model", link: "/en/models/animelist" },
          { text: "AnimeListItem model", link: "/en/models/animelistitem" },
          { text: "AnimeStats model", link: "/en/models/animestats" },
          { text: "Broadcast model", link: "/en/models/broadcast" },
          { text: "Character model", link: "/en/models/character" },
          { text: "CharacterAnime model", link: "/en/models/characteranime" },
          { text: "CharacterManga model", link: "/en/models/charactermanga" },
          { text: "CharacterVoice model", link: "/en/models/charactervoice" },
          { text: "Club model", link: "/en/models/club" },
          { text: "ClubMember model", link: "/en/models/clubmember" },
          { text: "Demographic model", link: "/en/models/demographic" },
          { text: "Discussion model", link: "/en/models/discussion" },
          { text: "Event model", link: "/en/models/event" },
          { text: "Genre model", link: "/en/models/genre" },
          { text: "Magazine model", link: "/en/models/magazine" },
          { text: "Manga model", link: "/en/models/manga" },
          { text: "MangaList model", link: "/en/models/mangalist" },
          { text: "MangaListItem model", link: "/en/models/mangalistitem" },
          { text: "MangaStats model", link: "/en/models/mangastats" },
          { text: "News model", link: "/en/models/news" },
          { text: "Person model", link: "/en/models/person" },
          { text: "Picture model", link: "/en/models/picture" },
          { text: "Producer model", link: "/en/models/producer" },
          { text: "Profile model", link: "/en/models/profile" },
          { text: "Review model", link: "/en/models/review" },
          { text: "StaffAnime model", link: "/en/models/staffanime" },
          { text: "Theme model", link: "/en/models/theme" },
          { text: "Topic model", link: "/en/models/topic" },
          { text: "User model", link: "/en/models/user" },
          { text: "Video model", link: "/en/models/video" },
        ],
      },
      // Configuration
      {
        text: "References",
        items: [
          { text: "Requeriments", link: "/en/references/requeriments" },
          { text: "Server", link: "/en/references/server" },
        ],
      },
      {
        text: "FAQs",
        items: [
          { text: "Business model", link: "/en/faqs/business_model" },
          { text: "License", link: "/en/faqs/license" },
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
      link: "/es/index",
    },
  },
});
