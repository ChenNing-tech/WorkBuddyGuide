<script setup lang="ts">
import PixelIcon from "./PixelIcon.vue";
import PixelIconSprite from "./PixelIconSprite.vue";
</script>

<template>
  <main class="wb-home">
    <PixelIconSprite />

    <section class="wb-hero" aria-labelledby="wb-hero-title">
      <div class="wb-hero__stage">
        <div class="wb-hero__copy">
          <p class="wb-pixel-label">TEACHER AI LAB · LEARN BY DOING · 2026</p>
          <h1 id="wb-hero-title" class="wb-hero__title--training">教师AI实践课</h1>
          <p class="wb-hero__summary">
            面向教师的 AI 学习与培训入口。先完成课前准备，再跟着现场任务练习，最后把可用的方法带回备课、教研和日常办公。
          </p>
          <div class="wb-hero__actions">
            <a class="wb-button wb-button--primary" href="/training/">
              <span>进入培训专区</span>
              <PixelIcon name="arrow-right" />
            </a>
            <a class="wb-button wb-button--outline" href="/bluebook/">浏览完整手册</a>
          </div>
        </div>

        <div class="wb-hero__art" aria-label="教师 AI 培训像素图标组合">
          <span class="wb-hero__monogram">AI_</span>
          <span class="wb-icon-card wb-icon-card--buddy">
            <PixelIcon name="user" />
          </span>
          <span class="wb-icon-card wb-icon-card--book">
            <PixelIcon name="book" />
          </span>
          <span class="wb-icon-card wb-icon-card--flow">
            <PixelIcon name="briefcase" />
          </span>
          <span class="wb-icon-card wb-icon-card--work">
            <PixelIcon name="robot" />
          </span>
          <div class="wb-hero__metrics" aria-label="培训学习流程">
            <span>PREP</span>
            <span>PRACTICE</span>
            <span>REUSE</span>
          </div>
        </div>
      </div>

      <div class="wb-value-strip" aria-label="培训设计原则">
        <div class="wb-value-strip__item">
          <PixelIcon name="check-box" />
          <span><b>目标清楚</b><small>CLEAR GOAL</small></span>
        </div>
        <div class="wb-value-strip__item">
          <PixelIcon name="briefcase" />
          <span><b>现场能做</b><small>HANDS ON</small></span>
        </div>
        <div class="wb-value-strip__item">
          <PixelIcon name="grid" />
          <span><b>结果可验收</b><small>CHECKABLE</small></span>
        </div>
        <div class="wb-value-strip__item">
          <PixelIcon name="refresh" />
          <span><b>课后可复用</b><small>REUSABLE</small></span>
        </div>
      </div>
    </section>

    <section class="wb-section wb-reading" aria-labelledby="wb-reading-title">
      <div class="wb-section__heading">
        <div>
          <h2 id="wb-reading-title">从培训现场开始，依次完成四个模块</h2>
        </div>
        <p>每个模块都有任务目标、操作步骤、验收标准和课后练习，适合讲师带练，也适合老师自学。</p>
      </div>

      <div class="wb-reading-grid">
        <a class="wb-reading-card" href="/training/01-before-class">
          <span class="wb-reading-card__icon"><PixelIcon name="check-box" /></span>
          <span class="wb-reading-card__content">
            <small>BEFORE CLASS</small>
            <strong>课前准备：把环境和材料准备好</strong>
            <span>确认设备、账号、练习文件和隐私边界，减少现场等待。</span>
            <em><b>设备检查</b><b>材料清单</b></em>
          </span>
          <PixelIcon name="arrow-right" class="wb-reading-card__arrow" />
        </a>

        <a class="wb-reading-card" href="/training/02-basic-skills">
          <span class="wb-reading-card__icon"><PixelIcon name="robot" /></span>
          <span class="wb-reading-card__content">
            <small>CORE SKILLS</small>
            <strong>AI 基础：把模糊想法变成明确任务</strong>
            <span>学会说明目标、受众、材料、格式与验收标准。</span>
            <em><b>提示词结构</b><b>结果验收</b></em>
          </span>
          <PixelIcon name="arrow-right" class="wb-reading-card__arrow" />
        </a>

        <a class="wb-reading-card" href="/training/03-office-practice">
          <span class="wb-reading-card__icon"><PixelIcon name="briefcase" /></span>
          <span class="wb-reading-card__content">
            <small>OFFICE PRACTICE</small>
            <strong>办公实践：完成一套可交付成果</strong>
            <span>围绕真实材料生成文档、表格和汇报，并检查关键结果。</span>
            <em><b>Word</b><b>Excel</b><b>PPT</b></em>
          </span>
          <PixelIcon name="arrow-right" class="wb-reading-card__arrow" />
        </a>

        <a class="wb-reading-card" href="/training/04-teaching-cases">
          <span class="wb-reading-card__icon"><PixelIcon name="users" /></span>
          <span class="wb-reading-card__content">
            <small>TEACHING CASES</small>
            <strong>教学应用：把方法带回课堂与教研</strong>
            <span>练习备课、课堂活动、分层任务、评价反馈与教研整理。</span>
            <em><b>备课</b><b>评价</b><b>教研</b></em>
          </span>
          <PixelIcon name="arrow-right" class="wb-reading-card__arrow" />
        </a>
      </div>
    </section>

    <section class="wb-section wb-task-index" aria-labelledby="wb-task-index-title">
      <div class="wb-section__heading wb-section__heading--compact">
        <div>
          <h2 id="wb-task-index-title">培训中需要什么，直接从这里拿</h2>
        </div>
        <p>模板可以直接复制，案例可以现场演示，安全清单适合在开始操作前统一说明。</p>
      </div>

      <div class="wb-task-grid">
        <a href="/training/resources#通用任务模板">
          <PixelIcon name="book" /><strong>任务模板</strong><span>目标 · 材料 · 格式 · 验收</span>
        </a>
        <a href="/training/resources#现场练习清单">
          <PixelIcon name="check-box" /><strong>练习清单</strong><span>讲师演示 · 学员操作 · 结果检查</span>
        </a>
        <a href="/training/03-office-practice">
          <PixelIcon name="briefcase" /><strong>办公案例</strong><span>文档 · 表格 · 汇报</span>
        </a>
        <a href="/training/04-teaching-cases">
          <PixelIcon name="users" /><strong>教学案例</strong><span>备课 · 活动 · 评价</span>
        </a>
        <a href="/training/safety">
          <PixelIcon name="handshake" /><strong>安全边界</strong><span>学生信息 · 授权 · 人工复核</span>
        </a>
        <a href="/training/faq">
          <PixelIcon name="refresh" /><strong>常见问题</strong><span>登录 · 文件 · 结果 · 故障处理</span>
        </a>
      </div>
    </section>

    <section class="wb-section wb-system" aria-labelledby="wb-system-title">
      <div class="wb-system__intro">
        <p class="wb-pixel-label">TRAINING LOOP</p>
        <h2 id="wb-system-title">培训结束后，留下能继续使用的方法。</h2>
        <p>现场完成任务只是起点。把输入材料、有效指令、修改过程和验收标准一起保存，下一次备课或教研时就能直接复用。</p>
      </div>
      <ol class="wb-system__steps">
        <li><b>01</b><strong>PREP</strong><span>准备设备与真实材料</span></li>
        <li><b>02</b><strong>PRACTICE</strong><span>跟随讲师完成任务</span></li>
        <li><b>03</b><strong>REVIEW</strong><span>检查事实、格式与边界</span></li>
        <li><b>04</b><strong>REUSE</strong><span>保存模板并迁移到教学场景</span></li>
      </ol>
    </section>

    <section class="wb-community" aria-labelledby="wb-community-title">
      <div>
        <h2 id="wb-community-title">把网址发给老师，就可以开始培训。</h2>
      </div>
      <div class="wb-community__actions">
        <a class="wb-button wb-button--acid" href="/training/">进入培训专区</a>
        <a class="wb-button wb-button--dark-outline" href="https://github.com/ChenNing-tech/WorkBuddyGuide">查看项目源码</a>
      </div>
      <PixelIcon name="book" class="wb-community__icon" />
    </section>
  </main>
</template>
