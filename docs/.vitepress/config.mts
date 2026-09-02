import { defineConfig } from "vitepress";

import { siteSidebar } from "./sidebar";
import { configureMermaidMarkdown } from "./mermaid-markdown";
import { createPageDescription, createSeoHead } from "./seo";

const siteUrl =
  process.env.VITEPRESS_SITE_URL || "https://teacher-ai-practice.pages.dev";

export default defineConfig({
    lang: "zh-CN",
    title: "AI学习Hub",
    titleTemplate: ":title · AI学习Hub",
    description: "以 WorkBuddy 为入口的 AI 学习、工具获取、工作台搭建与资源共享平台。",
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
      ["meta", { name: "theme-color", content: "#163A63" }],
      ["meta", { name: "author", content: "ChenNing-tech" }],
      [
        "meta",
        {
          name: "keywords",
          content:
            "AI学习Hub,WorkBuddy,教师助手,个人工作台,Skill技能,提示词,AI Agent,实践案例",
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
      siteTitle: "AI学习Hub",
      nav: [
        { text: "首页", link: "/" },
        { text: "WorkBuddy手册", link: "/bluebook/" },
        { text: "教师助手", link: "/teacher-assistant/" },
        { text: "工作台搭建", link: "/workbench/" },
        { text: "Skill技能", link: "/skills/" },
        { text: "提示词库", link: "/prompts/" },
        { text: "实践案例", link: "/cases/" },
        { text: "下载教师助手", link: "/teacher-assistant/#download" },
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
          '学习 · 获取 · 搭建 · 复用 · 分享 · Pixel icons by <a href="https://pixeliconlibrary.com/" target="_blank" rel="noreferrer">HackerNoon</a>',
        copyright: "Copyright © 2026 ChenNing-tech",
      },
    },
  });
