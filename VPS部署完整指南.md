# 🚀 VPS部署完整指南

## 📋 部署信息确认

✅ **部署包验证完成**
- 文件名：`website.zip`
- 文件大小：372KB
- 包含文件：5个文件（index.html, CSS, JS, favicon等）

✅ **服务器信息**
- IP地址：`47.79.42.150`
- 用户名：`root`
- 密码：`b2r9M19zoW!L)V`
- 部署路径：`/var/www/html/`

---

## 🔧 第一步：SSH连接到VPS服务器

### 方法1：使用终端（Mac/Linux）
```bash
ssh root@47.79.42.150
```

### 方法2：使用PuTTY（Windows）
1. 下载并安装 [PuTTY](https://www.putty.org/)
2. 配置连接：
   - Host Name: `47.79.42.150`
   - Port: `22`
   - Connection Type: `SSH`
3. 点击 "Open" 连接
4. 输入用户名：`root`
5. 输入密码：`b2r9M19zoW!L)V`

---

## 📤 第二步：上传website.zip到服务器

### 方法1：使用SCP命令（Mac/Linux）
```bash
scp website.zip root@47.79.42.150:/root/
```

### 方法2：使用WinSCP（Windows推荐）
1. 下载并安装 [WinSCP](https://winscp.net/eng/download.php)
2. 新建连接：
   - 文件协议：`SFTP`
   - 主机名：`47.79.42.150`
   - 端口号：`22`
   - 用户名：`root`
   - 密码：`b2r9M19zoW!L)V`
3. 连接成功后，将 `website.zip` 拖拽到 `/root/` 目录

### 方法3：使用FileZilla
1. 下载并安装 [FileZilla](https://filezilla-project.org/)
2. 协议选择 `SFTP`，其他信息同上

---

## ⚙️ 第三步：服务器环境配置

连接到服务器后，依次执行以下命令：

### 1. 更新系统
```bash
apt update
apt upgrade -y
```

### 2. 安装必要软件
```bash
# 安装Nginx和解压工具
apt install nginx unzip -y

# 启动并设置Nginx开机自启
systemctl start nginx
systemctl enable nginx

# 检查Nginx状态
systemctl status nginx
```

### 3. 配置防火墙
```bash
# 允许HTTP和SSH端口
ufw allow 80
ufw allow 22
ufw --force enable

# 检查防火墙状态
ufw status
```

---

## 🌐 第四步：部署网站文件

### 1. 清空默认网站文件
```bash
rm -rf /var/www/html/*
```

### 2. 解压网站文件
```bash
# 进入上传目录
cd /root

# 解压网站文件到网站目录
unzip -o website.zip -d /var/www/html/

# 查看解压结果
ls -la /var/www/html/
```

### 3. 设置文件权限
```bash
# 设置所有者为www-data
chown -R www-data:www-data /var/www/html/

# 设置文件权限
chmod -R 755 /var/www/html/
```

---

## 🔧 第五步：配置Nginx

### 1. 编辑Nginx配置文件
```bash
nano /etc/nginx/sites-available/default
```

### 2. 替换配置内容
将文件内容完全替换为以下配置：

```nginx
server {
    listen 80;
    server_name 47.79.42.150;
    root /var/www/html;
    index index.html;
    
    # 处理单页应用路由
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # 静态资源缓存优化
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # 启用Gzip压缩
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
    gzip_min_length 1000;
}
```

### 3. 保存并退出
- 按 `Ctrl + X`
- 按 `Y` 确认保存
- 按 `Enter` 确认文件名

### 4. 测试并重启Nginx
```bash
# 测试配置文件语法
nginx -t

# 重启Nginx服务
systemctl restart nginx

# 检查Nginx状态
systemctl status nginx
```

---

## ✅ 第六步：验证部署

### 1. 服务器本地测试
```bash
# 测试本地访问
curl -I http://localhost

# 查看网站文件
ls -la /var/www/html/

# 检查端口监听
netstat -tlnp | grep :80
```

### 2. 浏览器访问测试
打开浏览器，访问：**http://47.79.42.150**

### 3. 检查网站功能
确认以下页面和功能正常：
- ✅ 首页加载
- ✅ 导航菜单
- ✅ 各个页面切换
- ✅ 响应式设计
- ✅ 静态资源加载

---

## 🔍 故障排除

### 网站无法访问
```bash
# 1. 检查Nginx状态
systemctl status nginx

# 2. 查看错误日志
tail -f /var/log/nginx/error.log

# 3. 检查防火墙
ufw status

# 4. 重启Nginx
systemctl restart nginx
```

### 文件权限问题
```bash
# 重新设置权限
chown -R www-data:www-data /var/www/html/
chmod -R 755 /var/www/html/
```

### 配置文件错误
```bash
# 测试配置
nginx -t

# 如果有错误，重新编辑
nano /etc/nginx/sites-available/default
```

---

## 🎉 部署完成！

**恭喜！您的成都师范学院农业数字化转型促进中心网站已成功部署到VPS服务器！**

🔗 **访问地址：http://47.79.42.150**

### 网站功能模块
- ✅ 首页：品牌展示、统计数据、核心服务
- ✅ 中心介绍：组织架构、专家团队
- ✅ 技术服务：解决方案、成功案例
- ✅ 人才培养：培训课程、认证体系
- ✅ 产业对接：需求发布、项目匹配
- ✅ 新闻资讯：行业动态、政策解读
- ✅ 资源下载：技术文档、研究报告
- ✅ 联系我们：在线咨询、联系信息

### 技术特色
- 📱 响应式设计：完美适配各种设备
- 🎨 现代化UI：绿色农业主题设计
- ⚡ 高性能：静态文件部署，加载快速
- 🔍 SEO优化：搜索引擎友好

---

## 📞 技术支持

如果在部署过程中遇到问题，请检查：
1. 服务器连接是否正常
2. 防火墙设置是否正确
3. Nginx配置是否有语法错误
4. 文件权限是否设置正确

**部署成功后，您的网站将24小时在线为用户提供服务！** 🌟