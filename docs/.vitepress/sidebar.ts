import { readFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";

import type { DefaultTheme } from "vitepress";

const route = (...segments: string[]): string =>
  encodeURI(`/bluebook/${segments.map((segment) => segment.trim()).join("/")}/`);

const part1 = "第一篇 使用手册：先把 WorkBuddy 用起来";
const part2 = "第二篇 案例篇：从一项任务到一支 AI 团队";
const part3 = "第三篇 进阶篇：把案例变成自己的工作系统";
const part4 = "第四篇 岗位与行业落地";
const appendix = "附录";

const item = (directory: string, text = directory): DefaultTheme.SidebarItem => ({
  text,
  link: route(directory),
});

const child = (
  parent: string,
  directory: string,
  text = directory,
): DefaultTheme.SidebarItem => ({
  text,
  link: route(parent, directory),
});

export const bluebookSidebar: DefaultTheme.Sidebar = {
  "/bluebook/": [
    { text: "蓝皮书总览", link: "/bluebook/" },
    {
      text: "第一篇 · 使用手册",
      collapsed: false,
      items: [
        item(part1, "本篇导读"),
        child(part1, "第 1 章 初识 WorkBuddy"),
        child(part1, "第 2 章 WorkBuddy的下载、安装、登录与更新"),
        child(part1, "第 3 章 WorkBuddy 的主界面、任务与工作区"),
        child(part1, "第 4 章 快速完成第一个 WorkBuddy 任务"),
        child(part1, "第 5 章 WorkBuddy加载一个真正用得上的 Skill"),
        child(part1, "第 6 章 WorkBuddy的专家和专家团"),
        child(part1, "第 7 章 WorkBuddy 使用连接器"),
        child(part1, "第 8 章 WorkBuddy 接入小程序与 IM 助理"),
        child(part1, "第 9 章 如何接入外部 API"),
        child(part1, "第 10 章 WorkBuddy 自动化任务"),
        child(part1, "课外阅读：一章看懂 AI 工作系统"),
      ],
    },
    {
      text: "第二篇 · 实战案例",
      collapsed: false,
      items: [
        item(part2, "本篇导读"),
        child(part2, "第 11 章 办公三件套：Word、Excel、PPT"),
        child(part2, "第 12 章 从整理桌面文件这些小事做起"),
        child(part2, "第 13 章 远程控制你的电脑，不用发愁不在电脑前"),
        child(part2, "第 14 章 生活助手的价值，是减少琐碎"),
        child(part2, "第 15 章 资讯整合：把信息流变成每日通知"),
        child(part2, "第 16 章 收藏不是知识管理，能再次用起来才是"),
        child(part2, "第 17 章 会议结束不是终点，工作才刚刚开始"),
        child(part2, "第 18 章 把投资分析变成你的日常"),
        child(part2, "第 19 章 一句话召唤 AI 视频团队"),
        child(part2, "第 20 章 自媒体不只是靠努力，而是一条增长闭环"),
        child(part2, "第 21 章 WorkBuddy也能做GEO专家"),
      ],
    },
    {
      text: "第三篇 · 进阶系统",
      collapsed: false,
      items: [
        item(part3, "本篇导读"),
        child(part3, "第 22 章 打造skill：将书和视频蒸馏为可执行 Skill"),
        child(part3, "第 23 章 其他用法补充：WorkBuddy 实操案例集"),
        child(part3, "第 24 章 如何进行多 Agent 系统设计"),
        child(part3, "第 25 章 自动化工作流的可靠性"),
      ],
    },
    {
      text: "第四篇 · 岗位与行业",
      collapsed: false,
      items: [
        item(part4, "本篇导读"),
        child(part4, "第 26 章 岗位路线图：不同岗位如何把 WorkBuddy 用深"),
        child(part4, "第 27 章 行业路线图：从通用能力到行业工作流"),
      ],
    },
    {
      text: "附录",
      collapsed: false,
      items: [
        item(appendix, "附录导读"),
        child(appendix, "附录 A 常用指令模板"),
        child(appendix, "附录 B 场景速查表"),
      ],
    },
  ],
};

const casesDirectory = fileURLToPath(
  new URL("../cases/submissions/", import.meta.url),
);

const caseItems = readdirSync(casesDirectory, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => {
    const markdown = readFileSync(
      new URL(`../cases/submissions/${entry.name}/index.md`, import.meta.url),
      "utf8",
    );
    const frontmatter = markdown.match(/^---\s*\n([\s\S]*?)\n---/)?.[1] || "";
    const readField = (field: string): string =>
      frontmatter
        .match(new RegExp(`^${field}:\\s*(.+)$`, "m"))?.[1]
        ?.trim()
        .replace(/^['"]|['"]$/g, "") || "";

    return {
      date: readField("date"),
      item: {
        text: readField("title") || entry.name,
        link: encodeURI(`/cases/submissions/${entry.name}/`),
      } satisfies DefaultTheme.SidebarItem,
    };
  })
  .sort((left, right) => left.date.localeCompare(right.date))
  .map(({ item: caseItem }) => caseItem);

const casesSidebar: DefaultTheme.SidebarItem[] = [
  { text: "案例集首页", link: "/cases/" },
  { text: "如何提交 Case", link: "/community/case-contributing" },
  {
    text: "社区 Case",
    collapsed: false,
    items: caseItems,
  },
];

const trainingSidebar: DefaultTheme.SidebarItem[] = [
  { text: "教师应用资料", link: "/training/" },
  {
    text: "学习与实践",
    collapsed: false,
    items: [
      { text: "使用前准备", link: "/training/01-before-class" },
      { text: "AI 基础能力", link: "/training/02-basic-skills" },
      { text: "办公应用", link: "/training/03-office-practice" },
      { text: "教学案例", link: "/training/04-teaching-cases" },
      { text: "安全与使用边界", link: "/training/safety" },
      { text: "可复用资源", link: "/training/resources" },
      { text: "常见问题", link: "/training/faq" },
    ],
  },
];

const hubSidebar = (
  title: string,
  root: string,
): DefaultTheme.SidebarItem[] => [
  { text: title, link: root },
  {
    text: "继续探索",
    collapsed: false,
    items: [
      { text: "WorkBuddy 手册", link: "/bluebook/" },
      { text: "教师助手", link: "/teacher-assistant/" },
      { text: "工作台搭建", link: "/workbench/" },
      { text: "Skill 技能", link: "/skills/" },
      { text: "提示词库", link: "/prompts/" },
      { text: "实践案例", link: "/cases/" },
    ],
  },
];

const teacherAssistantSidebar: DefaultTheme.SidebarItem[] = [
  { text: "教师助手首页", link: "/teacher-assistant/" },
  {
    text: "教师工作管理助手使用教程",
    collapsed: false,
    items: [
      { text: "1. 安装与首次启动", link: "/teacher-assistant/01-installation" },
      { text: "2. 首页与通用操作", link: "/teacher-assistant/02-home-and-common" },
      { text: "3. 工作事务", link: "/teacher-assistant/03-work-affairs" },
      { text: "4. 个人效率", link: "/teacher-assistant/04-personal-efficiency" },
      { text: "5. 教学中心", link: "/teacher-assistant/05-teaching-center" },
      { text: "6. 成长与科研", link: "/teacher-assistant/06-growth-research" },
      { text: "7. 资源中心", link: "/teacher-assistant/07-resources" },
      { text: "8. AI 功能与设置", link: "/teacher-assistant/08-ai-settings" },
      { text: "9. 备份、恢复与迁移", link: "/teacher-assistant/09-backup-migration" },
      { text: "10. 常见问题", link: "/teacher-assistant/10-troubleshooting" },
    ],
  },
  {
    text: "API 申请教程",
    collapsed: false,
    items: [
      { text: "DeepSeek API 创建与接入", link: "/teacher-assistant/api/deepseek-api" },
    ],
  },
  {
    text: "继续探索",
    collapsed: true,
    items: [
      { text: "WorkBuddy 手册", link: "/bluebook/" },
      { text: "工作台搭建", link: "/workbench/" },
      { text: "Skill 技能", link: "/skills/" },
      { text: "提示词库", link: "/prompts/" },
      { text: "实践案例", link: "/cases/" },
    ],
  },
];

export const siteSidebar: DefaultTheme.Sidebar = {
  ...bluebookSidebar,
  "/workbuddy/": hubSidebar("WorkBuddy 手册", "/workbuddy/"),
  "/teacher-assistant/": teacherAssistantSidebar,
  "/workbench/": hubSidebar("工作台搭建", "/workbench/"),
  "/skills/": hubSidebar("Skill 技能", "/skills/"),
  "/prompts/": hubSidebar("提示词库", "/prompts/"),
  "/training/": trainingSidebar,
  "/cases/": casesSidebar,
  "/community/case-contributing": casesSidebar,
};
