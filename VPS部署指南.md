# 成都师范学院农业数字化转型促进中心网站 - VPS部署指南

## 📦 部署包信息

- **部署包**: `website.zip` (372.24 KB)
- **目标服务器**: 47.79.42.150
- **用户名**: root
- **部署路径**: /var/www/html/

## 🚀 快速部署步骤

### 第一步：上传文件到VPS

**方法1：使用WinSCP（推荐）**
1. 下载并安装 [WinSCP](https://winscp.net/eng/download.php)
2. 连接信息：
   - **主机名**: `47.79.42.150`
   - **用户名**: `root`
   - **密码**: `b2r9M19zoW!L)V`
   - **端口**: `22`
3. 将 `website.zip` 上传到 `/root/` 目录

**方法2：使用FileZilla**
1. 下载并安装 [FileZilla](https://filezilla-project.org/)
2. 协议选择 `SFTP`，其他信息同上

### 第二步：连接服务器并安装环境

使用SSH客户端（如PuTTY）连接到服务器：

```bash
ssh root@47.79.42.150
```

然后依次执行以下命令：

```bash
# 更新系统
apt update
apt upgrade -y

# 安装Nginx和解压工具
apt install nginx unzip -y

# 启动并设置Nginx开机自启
systemctl start nginx
systemctl enable nginx
```

### 第三步：部署网站文件

```bash
# 清空默认网站文件
rm -rf /var/www/html/*

# 进入上传目录
cd /root

# 解压网站文件到网站目录
unzip -o website.zip -d /var/www/html/

# 设置文件权限
chown -R www-data:www-data /var/www/html/
chmod -R 755 /var/www/html/
```

### 第四步：配置Nginx

编辑Nginx配置文件：

```bash
nano /etc/nginx/sites-available/default
```

将文件内容替换为：

```nginx
server {
    listen 80;
    server_name 47.79.42.150;
    root /var/www/html;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # 启用Gzip压缩
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

### 第五步：重启服务并配置防火墙

```bash
# 测试Nginx配置
nginx -t

# 重启Nginx
systemctl restart nginx

# 配置防火墙
ufw allow 80
ufw allow 22
ufw --force enable
```

### 第六步：验证部署

```bash
# 检查Nginx状态
systemctl status nginx

# 检查网站文件
ls -la /var/www/html/

# 测试本地访问
curl -I http://localhost
```

## 🌐 访问网站

部署完成后，可通过以下地址访问网站：

**🔗 http://47.79.42.150**

## 🔧 故障排除

### 网站无法访问

1. **检查Nginx状态**：
   ```bash
   systemctl status nginx
   ```

2. **查看错误日志**：
   ```bash
   tail -f /var/log/nginx/error.log
   ```

3. **检查端口监听**：
   ```bash
   netstat -tlnp | grep :80
   ```

4. **检查防火墙**：
   ```bash
   ufw status
   ```

### 文件权限问题

```bash
# 重新设置权限
chown -R www-data:www-data /var/www/html/
chmod -R 755 /var/www/html/
```

### Nginx配置错误

```bash
# 测试配置文件
nginx -t

# 如果有错误，重新编辑配置
nano /etc/nginx/sites-available/default
```

## 🚀 性能优化建议

### 1. 启用HTTPS

```bash
# 安装Certbot
apt install certbot python3-certbot-nginx -y

# 申请SSL证书（需要域名）
certbot --nginx -d yourdomain.com
```

### 2. 配置CDN

- 使用阿里云CDN或腾讯云CDN加速访问
- 配置静态资源缓存策略

### 3. 监控和日志

```bash
# 安装htop监控工具
apt install htop -y

# 查看访问日志
tail -f /var/log/nginx/access.log
```

## 📱 网站功能

部署的网站包含以下功能模块：

- ✅ **首页**：品牌展示、统计数据、核心服务
- ✅ **中心介绍**：组织架构、专家团队
- ✅ **技术服务**：解决方案、成功案例
- ✅ **人才培养**：培训课程、认证体系
- ✅ **产业对接**：需求发布、项目匹配
- ✅ **新闻资讯**：行业动态、政策解读
- ✅ **资源下载**：技术文档、研究报告
- ✅ **联系我们**：在线咨询、联系信息

## 🎯 技术特色

- **响应式设计**：完美适配桌面端、平板端、移动端
- **现代化UI**：绿色农业主题，符合成都师范学院品牌形象
- **高性能**：静态文件部署，加载速度快
- **SEO优化**：搜索引擎友好的页面结构

---

**部署完成后，您的成都师范学院农业数字化转型促进中心官方网站将正式上线！** 🎉