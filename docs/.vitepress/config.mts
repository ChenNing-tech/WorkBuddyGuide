import { defineConfig } from "vitepress";

import { siteSidebar } from "./sidebar";
import { configureMermaidMarkdown } from "./mermaid-markdown";
import { createPageDescription, createSeoHead } from "./seo";

const siteUrl =
  process.env.VITEPRESS_SITE_URL || "https://teacher-ai-practice.pages.dev";

export default defineConfig({
    lang: "zh-CN",
    title: "教师 AI 实践课",
    titleTemplate: ":title · 教师 AI 实践课",
    description: "面向教师的 AI 工具学习、办公实践、教学应用与培训资源平台。",
    cleanUrls: true,
    lastUpdated: true,
    srcExclude: ["**/source.md", "plans/**"],
    sitemap: {
      hostname: siteUrl,
    },
    transformPageData: (pageData, { siteConfig }) => {
      if (pageData.relativePath.startsWith("cases/")) {
        pageData.frontmatter.aside = false;
        pageData.frontmatter.outline = false;
      }

      return {
        description: createPageDescription(siteConfig.srcDir, pageData),
      };
    },
    transformHead: (context) => createSeoHead(siteUrl, context),
    head: [
      ["link", { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
      ["meta", { name: "theme-color", content: "#d8f238" }],
      ["meta", { name: "author", content: "ChenNing-tech" }],
      [
        "meta",
        {
          name: "keywords",
          content:
            "教师 AI 培训,AI 教学,教师数字素养,AI 办公,Word,Excel,PPT,提示词,教学案例",
        },
      ],
    ],
    markdown: {
      config: configureMermaidMarkdown,
      image: {
        lazyLoading: true,
      },
      theme: {
        light: "github-light",
        dark: "github-dark",
      },
    },
    themeConfig: {
      siteTitle: "教师 AI 实践课",
      nav: [
        { text: "首页", link: "/" },
        { text: "培训专区", link: "/training/" },
        { text: "学习手册", link: "/bluebook/" },
        { text: "实践案例", link: "/cases/" },
        { text: "阅读指南", link: "/reading-guide" },
      ],
      sidebar: siteSidebar,
      socialLinks: [
        { icon: "github", link: "https://github.com/ChenNing-tech/WorkBuddyGuide" },
      ],
      search: {
        provider: "local",
      },
      outline: {
        level: [2, 3],
        label: "本页目录",
      },
      docFooter: {
        prev: "上一篇",
        next: "下一篇",
      },
      lastUpdated: {
        text: "最后更新",
        formatOptions: {
          dateStyle: "medium",
          timeStyle: "short",
        },
      },
      editLink: {
        pattern: "https://github.com/ChenNing-tech/WorkBuddyGuide/edit/main/docs/:path",
        text: "在 GitHub 上改进此页",
      },
      footer: {
        message:
          '面向教师的 AI 学习、实践与培训资源站 · Pixel icons by <a href="https://pixeliconlibrary.com/" target="_blank" rel="noreferrer">HackerNoon</a>',
        copyright: "Copyright © 2026 ChenNing-tech",
      },
    },
  });
