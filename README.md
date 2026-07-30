# 个人网站更新说明（第 2 版）

## 上传方式

仓库 `yuyan0h/YuyanHuang` 是一个 Vite 项目，Actions 会跑 `vite build` 再发布 `dist/`。Vite 会把资源路径改名（上次 `assets/avatar.jpg` 被它改成了 `assets/avatar-D0LucYmI.jpg`），但它**不处理 `<a href>` 指向的 PDF**，所以上次 CV 按钮 404。

Vite 的规则是：`public/` 文件夹里的东西原样拷到网站根目录。所以这次把静态文件放 `public/`：

| 本地文件 | 传到仓库的位置 |
|---|---|
| `index.html` | 根目录（覆盖旧的） |
| `public/avatar.jpg` | 仓库已有的 `public/` 文件夹里 |
| `public/CV-YuyanHuang.pdf` | 仓库已有的 `public/` 文件夹里 |

上次传的根目录 `assets/` 文件夹可以删掉，已经没用了。

**不要改 Pages 设置**（保持 `GitHub Actions`）。我上一条建议改成 branch 部署，现在不用了——放 `public/` 更省事，两处都不用动。

传完等 Actions 跑完（1–2 分钟），然后 **Cmd + Shift + R 硬刷新**，最后点一下左侧 CV (PDF) 按钮确认能下载。

## 这一版改了什么

- 「黄雨嫣」放大到和英文名同字号
- 全站删除 em dash（`—`），改成逗号、冒号或改写句子。日期区间里的 `–`（en dash，如 `2023 – 2026`）保留，这是标准排版写法，要一起去掉告诉我
- 删掉侧栏 `Singapore · M.Eng. Tongji Univ.`
- 删掉简介末句 `First-author work published in Nature Cities and presented at ACSP, IACP and AESOP.`（Nature Cities 在论文区和项目 04 里还在）
- 删掉 `Deep RL` 标签（TAMPUS 项目的技术栈那行还留着 Deep RL）
- 删掉整条数据条（92.5% / 100k+ / 10 / 7）。这四个数字在项目和论文区都还能读到。如果只是想删 `100k+` 一格、其他三个留下，说一声我加回来
- CV 链接改成 `CV-YuyanHuang.pdf`，favicon 和 og:image 也改成不经 Vite 改名的路径

## Publications 已按 CV 逐字对齐

23 条（期刊 11 / 会议 7 / 书章报告 5）全部与 CV 原文逐字比对通过，顺序也照 CV。具体改动：

- 分组标题 `Books, Reports & White Papers` → `Book Chapters, Reports & White Papers`
- 去掉 `preprint` / `under review` / `oral` 那些小徽章，改回 CV 的括号写法：`arXiv preprint.`、`(under review).`、`In preparation.`、`(in Chinese).`、`(translator, in Chinese).`、`(oral).`
- 会议地点补全：`IACP 2025, Xiamen, China`、`AESOP 2025, Istanbul, Turkey`
- 会议报告不再折叠，7 条全部展开（CV 里是全列的）
- DOI 从 `doi ↗` 改成显示实际编号，例如 `10.1038/s44284-025-00235-9`

## 日常维护

- **中英双语**：需要翻译的元素上有 `data-en` 和 `data-zh` 两个属性，默认英文，左下角按钮切换，选择存在 localStorage。新增内容时两个属性都要写，否则切中文会空白。
- **注意**：带 `data-en` 的元素内部不要再嵌套另一个带 `data-en` 的元素（切换用的是 innerHTML，会覆盖子元素）。导航序号和图标已用 CSS 处理，不受影响。
- **改配色**：集中在文件顶部 `:root`，`--accent: #0f6b4f` 是深绿强调色，改一个值全站生效。
- **加项目**：复制一整段 `<article class="proj">…</article>`，改编号和内容。
- **加论文**：复制一行 `<div class="pub">…</div>`。`<b>` 包自己的名字，`<span class="venue">` 是期刊名，`<span class="tag">` 是 under review / oral 之类小标签。
- **换头像**：替换 `public/avatar.jpg`，同时把 `index.html` 里 `<img class="avatar" src="data:image/jpeg;base64,...">` 改成 `src="avatar.jpg"`（头像目前是内嵌的，所以换 `public/avatar.jpg` 只影响 favicon 和分享缩略图）。

## 还值得补的

1. **项目配图** —— 知识图谱可视化、C-Smart 2.0 界面截图。纯文字的研究工程师主页说服力打折。
2. **GitHub 仓库链接** —— C-SmartGPT / TAMPUS 有开源代码的话，在项目卡片里加链接。
3. **Google Scholar 链接** —— 侧栏目前只有 Email / ResearchGate / GitHub / CV。
