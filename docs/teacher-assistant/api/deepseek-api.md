---
title: DeepSeek API 创建与接入教程
description: 从零开始注册 DeepSeek 开放平台、创建 API Key，并在教师工作管理助手中完成接入配置的完整图文教程。
---

# DeepSeek API 创建与接入教程

分享版不包含制作者的 AI API；需要在线 AI 时，由使用者自行申请并配置。本教程带你从零开始，创建 DeepSeek API Key 并接入教师工作管理助手。

## 一、进入 DeepSeek 开放平台

打开 [DeepSeek 官网](https://www.deepseek.com/)，点击首页的 **“API 开放平台”**。

![DeepSeek 官网与“API 开放平台”入口](/teacher-assistant/deepseek-api-01.png)

首次使用需要注册或登录 DeepSeek 账号。登录后会进入开放平台控制台。

## 二、查看余额并充值

进入开放平台后，默认显示“用量信息”页面，可以查看：

- 充值余额
- 累计消费金额
- API 请求次数
- Token 使用量

DeepSeek API 按实际使用量计费。余额不足时，点击 **“去充值”**，根据页面提示完成充值。

![开放平台用量信息与充值入口](/teacher-assistant/deepseek-api-02.png)

## 三、创建 API Key

在左侧导航中点击 **“API keys”**，进入密钥管理页面，然后点击右上角的 **“创建 API key”**。

为密钥填写一个便于识别的名称，例如：

```
教师工作管理助手
```

也可以写得更具体：

```
教师工作管理助手-办公室电脑
```

填写完成后点击 **“创建”**。

![创建 API Key 并填写名称](/teacher-assistant/deepseek-api-03.png)

## 四、复制并妥善保管密钥

创建成功后，页面只会完整显示一次 API Key。点击 **“复制”**，将其临时保存到安全位置，随后立即填写到教师工作管理助手中。

注意：

- 不要把 API Key 发到微信群或聊天窗口。
- 不要把 API Key 放进使用教程、截图或公开代码。
- 不要与其他老师共用同一个私人密钥。
- 密钥丢失后无法再次查看，应删除旧密钥并重新创建。
- 怀疑密钥泄露时，应立即删除并更换。

![复制 API Key](/teacher-assistant/deepseek-api-04.png)

## 五、确认接口地址和模型名称

DeepSeek 官方调用文档：[https://api-docs.deepseek.com/zh-cn/](https://api-docs.deepseek.com/zh-cn/)

DeepSeek 官方 OpenAI 兼容接口地址为：

```
https://api.deepseek.com
```

日常使用推荐模型：

```
deepseek-v4-flash
```

需要更强分析能力时可以使用：

```
deepseek-v4-pro
```

教师工作管理助手当前主要处理文本，不需要填写视觉实验模型。

![DeepSeek API 文档中的 Base URL 和模型名称](/teacher-assistant/deepseek-api-05.png)

## 六、在教师工作管理助手中配置

进入：

```
设置 → AI 接口设置
```

建议填写如下：

| 设置项 | 填写内容 |
| --- | --- |
| 启用 AI 接口 | 勾选 |
| 服务商名称 | `DeepSeek` |
| API Base URL | `https://api.deepseek.com` |
| 重新输入 API Key | 粘贴刚创建的密钥 |
| 模型名称 | `deepseek-v4-flash` |
| Temperature | `0.3` |
| Max Tokens | `4000` |
| 请求超时 | `120` 秒 |
| 启用数据脱敏 | 勾选 |
| 隐藏学生姓名 | 建议勾选 |
| 保存 AI 调用日志 | 根据隐私要求选择 |

填写完成后，先点击 **“保存 AI 设置”**，再点击 **“测试连接”**。

## 七、常见问题

- **当前 API Key 显示“未配置”**：密钥尚未保存，请重新粘贴并保存。
- **提示 401**：API Key 错误、已删除或已失效。
- **提示余额不足**：进入 DeepSeek 开放平台充值。
- **提示模型不存在**：检查模型名称是否为 `deepseek-v4-flash`。
- **提示接口不存在**：检查 Base URL，不能继续使用 `https://api.openai.com/v1`。
- **请求超时**：将超时时间提高到 `120` 秒后重试。
- **测试成功但回答较慢**：DeepSeek 默认可能使用思考模式，属于正常情况。
