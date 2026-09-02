# AI 学习 Hub · 设计系统

## 定位

一个以 WorkBuddy 为入口的 AI 学习与资源共享平台。用户可以学习、获取、搭建、复用并分享 AI 工具、教师助手、个人工作台、Skill、提示词与实践案例。

## 体验原则

- 先给入口，再给路径：每一屏都回答“我现在可以做什么”。
- 内容可直接获取：下载、模板、教程和案例使用明确的动作标签。
- 平台化而非课程化：使用“学习、获取、搭建、复用、分享”，不使用一次性培训流程语言。
- 可信与克制：荧光绿只承担按钮、焦点和少量状态信号，不铺满页面。
- 保留原有知识：蓝皮书、案例与旧资料继续可访问，由新栏目提供索引。

## 视觉系统

- 风格：modern-minimal / resource hub
- 页面结构：Split Diptych 首屏 + 资源目录 + Step Sequence + 更新索引
- 主色：深蓝 `#163A63`
- 信号色：荧光绿 `#D9FF32`
- 画布：`#F7F8FA`
- 卡片：`#FFFFFF`
- 主文字：`#181A1F`
- 边框：`#E5E7EB`
- 中文字体：思源黑体 / 微软雅黑 / 苹方
- 像素字体：仅用于英文标签和装饰编号

## 组件约定

- 导航：左侧品牌，中间栏目，右侧搜索与“下载教师助手”。
- 按钮：主按钮荧光绿，次按钮白底深蓝边框；标签始终单行。
- 卡片：8–16px 圆角、可见细边框、无多层阴影；悬停只移动 2px。
- 焦点：使用深蓝外圈并即时出现。
- 动效：只保留首屏四卡轻微入场与悬停反馈；减少动态偏好下全部关闭。
- 移动端：320 / 375 / 414 / 768px 无横向滚动，首屏改为单列，导航交给 VitePress 菜单。

## 内容架构

1. 首页
2. WorkBuddy 手册
3. 教师助手
4. 工作台搭建
5. Skill 技能
6. 提示词库
7. 实践案例

旧 `/training/` 路由保留并重命名为“教师应用资料”，旧 `/bluebook/` 与 `/cases/` 路由保持不变。

## Token 导出

项目当前使用原生 CSS，完整来源见根目录 `tokens.css`。下面保留跨项目迁移时需要的三个映射。

### Tailwind v4

```css
@theme {
  --color-paper: oklch(98% 0.004 250);
  --color-surface: oklch(100% 0 0);
  --color-ink: oklch(22% 0.015 255);
  --color-brand: oklch(35.5% 0.085 250);
  --color-accent: oklch(94% 0.22 118);
  --color-rule: oklch(91.5% 0.008 255);
  --font-display: "Alibaba PuHuiTi 3", "Source Han Sans SC", "Microsoft YaHei", sans-serif;
  --font-body: "Source Han Sans SC", "Microsoft YaHei", "PingFang SC", sans-serif;
  --spacing-xs: 0.5rem;
  --spacing-sm: 0.75rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2.5rem;
}
```

### DTCG

```json
{
  "$schema": "https://design-tokens.github.io/community-group/format/",
  "color": {
    "paper": { "$value": "oklch(98% 0.004 250)", "$type": "color" },
    "surface": { "$value": "oklch(100% 0 0)", "$type": "color" },
    "ink": { "$value": "oklch(22% 0.015 255)", "$type": "color" },
    "brand": { "$value": "oklch(35.5% 0.085 250)", "$type": "color" },
    "accent": { "$value": "oklch(94% 0.22 118)", "$type": "color" },
    "rule": { "$value": "oklch(91.5% 0.008 255)", "$type": "color" }
  }
}
```

### shadcn/ui

```css
:root {
  --background: 98% 0.004 250;
  --foreground: 22% 0.015 255;
  --card: 100% 0 0;
  --card-foreground: 22% 0.015 255;
  --primary: 35.5% 0.085 250;
  --primary-foreground: 100% 0 0;
  --secondary: 94% 0.22 118;
  --secondary-foreground: 22% 0.015 255;
  --border: 91.5% 0.008 255;
  --ring: 52% 0.16 250;
  --radius: 0.75rem;
}
```
