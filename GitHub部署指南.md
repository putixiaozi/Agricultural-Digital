# GitHub Pages 部署指南

## 问题分析

Vercel网站无法访问的可能原因：
1. **地区网络限制** - Vercel在某些地区可能存在访问限制
2. **DNS解析问题** - 域名解析可能在某些网络环境下不稳定
3. **CDN节点问题** - Vercel的CDN节点在某些地区覆盖不足

## 解决方案：GitHub Pages部署

GitHub Pages具有更好的全球访问性和稳定性，是理想的替代方案。

## 部署步骤

### 方法一：自动部署（推荐）

1. **创建GitHub仓库**
   - 登录GitHub账户
   - 创建新仓库，命名为 `agricultural-center`
   - 设置为公开仓库

2. **上传项目文件**
   ```bash
   # 在项目目录下执行
   git remote remove origin
   git remote add origin https://github.com/你的用户名/agricultural-center.git
   git add .
   git commit -m "Initial commit for GitHub Pages"
   git push -u origin main
   ```

3. **启用GitHub Pages**
   - 进入仓库设置页面
   - 找到 "Pages" 选项
   - 选择 "GitHub Actions" 作为部署源
   - GitHub Actions会自动检测并运行部署工作流

### 方法二：手动部署

1. **构建项目**
   ```bash
   pnpm run build
   ```

2. **创建GitHub仓库**
   - 创建名为 `agricultural-center` 的新仓库
   - 启用GitHub Pages功能

3. **上传构建文件**
   - 将 `dist` 文件夹中的所有文件上传到仓库
   - 确保 `index.html` 在根目录

## 预期访问地址

部署成功后，网站将可通过以下地址访问：
```
https://你的用户名.github.io/agricultural-center/
```

## 网站功能特点

✅ **完整的8个页面**
- 首页 - 展示中心概况和核心服务
- 中心介绍 - 详细介绍机构背景和使命
- 技术服务 - 展示数字化技术解决方案
- 人才培养 - 培训课程和教育项目
- 产业合作 - 合作伙伴和成功案例
- 新闻动态 - 最新资讯和活动信息
- 资源下载 - 技术文档和工具下载
- 联系我们 - 联系方式和地理位置

✅ **设计特色**
- 响应式设计，完美适配各种设备
- 绿色农业主题色彩搭配
- 现代化界面设计
- 成都师范大学品牌元素

✅ **技术优势**
- 高性能静态网站
- 全球CDN加速
- 移动端优化
- SEO友好

## 故障排除

如果GitHub Pages部署后仍无法访问：

1. **检查仓库设置**
   - 确保仓库为公开状态
   - 确认Pages功能已启用

2. **检查构建状态**
   - 查看Actions页面的构建日志
   - 确保构建成功完成

3. **DNS传播时间**
   - GitHub Pages可能需要几分钟到几小时生效
   - 可以尝试清除浏览器缓存

## 替代方案

如果GitHub Pages仍有问题，还可以考虑：
- **Netlify** - 拖拽部署，简单易用
- **Surge.sh** - 命令行部署工具
- **Firebase Hosting** - Google提供的托管服务

---

**注意**：GitHub Pages相比Vercel具有更好的全球访问稳定性，特别适合面向国内用户的网站部署。