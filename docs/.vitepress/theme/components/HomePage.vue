<script setup lang="ts">
import PixelIcon from "./PixelIcon.vue";
import PixelIconSprite from "./PixelIconSprite.vue";

const entryCards = [
  { label: "LEARN", title: "阅读 WorkBuddy 手册", description: "从安装、基础操作到案例与进阶系统，按需查阅完整学习手册。", link: "/bluebook/", icon: "book" },
  { label: "GET", title: "下载教师助手", description: "获取 Windows 客户端，查看安装、启动、备份与隐私使用说明。", link: "/teacher-assistant/#download", icon: "user" },
  { label: "BUILD", title: "搭建个人工作台", description: "把文件、任务、工具和 AI 能力组织成一个可持续更新的工作系统。", link: "/workbench/", icon: "grid" },
  { label: "REUSE", title: "获取 Skill 与提示词", description: "复用经过整理的方法模板，并逐步沉淀为自己的 Skill。", link: "/skills/", icon: "refresh" },
] as const;

const resources = [
  { type: "GUIDE", title: "WorkBuddy 完整学习手册", link: "/bluebook/", meta: "入门 · 案例 · 进阶 · 行业" },
  { type: "APP", title: "教师工作管理助手", link: "/teacher-assistant/", meta: "Windows · 本地数据" },
  { type: "TEMPLATE", title: "个人工作台搭建清单", link: "/workbench/", meta: "结构 · 数据 · 迭代" },
  { type: "SKILL", title: "把经验做成可执行 Skill", link: "/skills/", meta: "创建 · 验证 · 分享" },
  { type: "PROMPT", title: "12 个常用提示词", link: "/prompts/", meta: "思考 · 学习 · 决策" },
] as const;

const cases = [
  { index: "01", title: "教师工作管理助手", summary: "课程、学生、通知、任务与资料的本地工作台。", link: "/teacher-assistant/" },
  { index: "02", title: "计算机网络可视化实训室", summary: "把抽象网络概念转化为可操作、可观察的学习场景。", link: "/cases/" },
  { index: "03", title: "个人工作台", summary: "围绕自己的文件与流程持续迭代一个专属 AI 工作系统。", link: "/workbench/" },
  { index: "04", title: "AI 阅卷系统", summary: "从材料整理、评分规则到人工复核的完整实践线索。", link: "/cases/" },
] as const;
</script>

<template>
  <main class="hub-home">
    <PixelIconSprite />

    <section class="hub-hero" aria-labelledby="hub-hero-title">
      <div class="hub-hero__copy">
        <p class="hub-kicker">AI LEARNING HUB · LEARN · BUILD · SHARE · 2026</p>
        <p class="hub-wordmark" aria-label="AI 学习 Hub">AI学习Hub</p>
        <h1 id="hub-hero-title">从使用AI，到创造自己的AI工具</h1>
        <p class="hub-hero__summary">以WorkBuddy为入口，学习AI Agent的使用方法；获取教师助手、个人工作台、Skill技能与优质提示词，把AI真正应用到教学、办公和个人项目中。</p>
        <div class="hub-actions">
          <a class="hub-button hub-button--primary" href="/bluebook/">从WorkBuddy开始 <PixelIcon name="arrow-right" /></a>
          <a class="hub-button hub-button--secondary" href="/cases/">浏览实践案例</a>
        </div>
      </div>

      <div class="hub-card-stack" aria-label="AI 学习 Hub 四个功能入口">
        <span class="hub-pixel-mark" aria-hidden="true">HUB_01</span>
        <a class="hub-stack-card hub-stack-card--workbuddy" href="/bluebook/"><small>START HERE</small><strong>WorkBuddy手册</strong><span>完整学习手册</span></a>
        <a class="hub-stack-card hub-stack-card--assistant" href="/teacher-assistant/"><small>GET TOOL</small><strong>教师助手</strong><span>下载与使用</span></a>
        <a class="hub-stack-card hub-stack-card--skill" href="/skills/"><small>REUSE METHOD</small><strong>Skill技能</strong><span>制作与分享</span></a>
        <a class="hub-stack-card hub-stack-card--workbench" href="/workbench/"><small>BUILD YOURS</small><strong>个人工作台</strong><span>持续创造</span></a>
      </div>

      <div class="hub-value-strip" aria-label="平台价值">
        <a href="/bluebook/"><b>WorkBuddy手册</b><span>从入门到进阶实践</span></a>
        <a href="/teacher-assistant/"><b>工具直接获取</b><span>下载教师助手与项目模板</span></a>
        <a href="/skills/"><b>方法可以复用</b><span>使用Skill和优质提示词</span></a>
        <a href="/workbench/"><b>项目持续创造</b><span>搭建自己的AI工作台</span></a>
      </div>
    </section>

    <section class="hub-section hub-entry" aria-labelledby="hub-entry-title">
      <div class="hub-section__head">
        <div><p class="hub-section__index">01 / ENTRY</p><h2 id="hub-entry-title">选择你的入口</h2></div>
        <p>不必按固定顺序学习。先从眼前最需要解决的一件事开始，再把有效方法沉淀下来。</p>
      </div>
      <div class="hub-entry-grid">
        <a v-for="card in entryCards" :key="card.title" class="hub-entry-card" :href="card.link">
          <span class="hub-entry-card__icon"><PixelIcon :name="card.icon" /></span>
          <small>{{ card.label }}</small><h3>{{ card.title }}</h3><p>{{ card.description }}</p>
          <span class="hub-text-link">打开入口 <PixelIcon name="arrow-right" /></span>
        </a>
      </div>
    </section>

    <section class="hub-section hub-path" aria-labelledby="hub-path-title">
      <div class="hub-section__head hub-section__head--light">
        <div><p class="hub-section__index">02 / PATH</p><h2 id="hub-path-title">推荐学习路径</h2></div>
        <p>从理解 Agent 到分享自己的项目，每一步都留下可复用的结果。</p>
      </div>
      <ol class="hub-path__steps">
        <li><b>01</b><strong>认识 AI Agent</strong><span>从“聊天”转向“委托任务”</span></li>
        <li><b>02</b><strong>学习 WorkBuddy</strong><span>完成第一个真实任务</span></li>
        <li><b>03</b><strong>使用 Skill 和提示词</strong><span>复用成熟的方法结构</span></li>
        <li><b>04</b><strong>搭建个人工作台</strong><span>连接文件、工具与流程</span></li>
        <li><b>05</b><strong>分享实践成果</strong><span>让案例成为新的公共资源</span></li>
      </ol>
      <a class="hub-path__guide" href="/12-steps/">
        <div>
          <small>START FROM ZERO · 新手流程</small>
          <strong>从 0 开始，12 步学会用好 AI</strong>
          <p>完全新手也没关系：跟着 12 个步骤，把最不想做的事交给 AI，并把过程沉淀成可复用的 Skill。</p>
        </div>
        <span class="hub-path__guide-cta">阅读完整流程 <PixelIcon name="arrow-right" /></span>
      </a>
    </section>

    <section class="hub-section hub-resources" aria-labelledby="hub-resources-title">
      <div class="hub-section__head">
        <div><p class="hub-section__index">03 / RESOURCES</p><h2 id="hub-resources-title">热门资源</h2></div>
        <p>教程、客户端、模板、Skill 和提示词集中在同一处，打开即可开始使用。</p>
      </div>
      <div class="hub-resource-list">
        <a v-for="resource in resources" :key="resource.title" :href="resource.link">
          <small>{{ resource.type }}</small><strong>{{ resource.title }}</strong><span>{{ resource.meta }}</span><PixelIcon name="arrow-right" />
        </a>
      </div>
    </section>

    <section class="hub-section hub-cases" aria-labelledby="hub-cases-title">
      <div class="hub-section__head">
        <div><p class="hub-section__index">04 / BUILT</p><h2 id="hub-cases-title">精选实践案例</h2></div>
        <p>看别人怎样从一个具体问题出发，做出真正可以运行、修改和分享的 AI 项目。</p>
      </div>
      <div class="hub-case-grid">
        <a v-for="item in cases" :key="item.title" :href="item.link"><small>{{ item.index }}</small><h3>{{ item.title }}</h3><p>{{ item.summary }}</p><span>查看案例 →</span></a>
      </div>
    </section>

    <section class="hub-section hub-updates" aria-labelledby="hub-updates-title">
      <div class="hub-updates__intro"><p class="hub-section__index">05 / UPDATED</p><h2 id="hub-updates-title">最近更新</h2><p>平台会持续补充教程、Skill、提示词和客户端版本。</p></div>
      <div class="hub-update-list">
        <a href="/teacher-assistant/"><time datetime="2026-09-01">2026.09.01</time><b>教师工作管理助手</b><span>新增 Windows 客户端下载与完整使用说明</span></a>
        <a href="/prompts/"><time datetime="2026-09-02">2026.09.02</time><b>提示词库</b><span>新增 12 个适用于思考、学习与决策的提示词</span></a>
        <a href="/bluebook/"><time datetime="2026-09-02">2026.09.02</time><b>WorkBuddy 手册</b><span>恢复完整蓝皮书学习内容与章节导航</span></a>
      </div>
    </section>

    <section class="hub-closing" aria-labelledby="hub-closing-title">
      <p>AI LEARNING HUB</p><h2 id="hub-closing-title">学会一个方法，做出一个工具，再把它分享出去。</h2>
      <div class="hub-actions"><a class="hub-button hub-button--primary" href="/bluebook/">打开手册</a><a class="hub-button hub-button--dark" href="https://github.com/ChenNing-tech/WorkBuddyGuide">查看项目源码</a></div>
    </section>
  </main>
</template>
