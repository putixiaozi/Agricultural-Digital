#!/bin/bash

# 成都师范学院农业数字化转型促进中心网站 - VPS部署脚本
# 服务器IP: 47.79.42.150
# 使用方法：将此脚本上传到服务器并执行

echo "🚀 开始部署成都师范学院农业数字化转型促进中心网站..."
echo "========================================"

# 检查是否为root用户
if [ "$EUID" -ne 0 ]; then
    echo "❌ 请使用root用户运行此脚本"
    exit 1
fi

# 第一步：更新系统
echo "📦 更新系统包..."
apt update
apt upgrade -y

# 第二步：安装必要软件
echo "⚙️ 安装Nginx和必要工具..."
apt install nginx unzip -y

# 第三步：启动Nginx服务
echo "🔧 配置Nginx服务..."
systemctl start nginx
systemctl enable nginx

# 第四步：配置防火墙
echo "🔒 配置防火墙规则..."
ufw allow 80
ufw allow 22
ufw --force enable

# 第五步：部署网站文件
echo "📁 部署网站文件..."

# 检查website.zip是否存在
if [ ! -f "/root/website.zip" ]; then
    echo "❌ 错误：未找到 /root/website.zip 文件"
    echo "请先将website.zip上传到/root/目录"
    exit 1
fi

# 清空默认网站文件
rm -rf /var/www/html/*

# 解压网站文件
cd /root
unzip -o website.zip -d /var/www/html/

# 设置文件权限
chown -R www-data:www-data /var/www/html/
chmod -R 755 /var/www/html/

# 第六步：配置Nginx
echo "🌐 配置Nginx虚拟主机..."

# 备份原配置文件
cp /etc/nginx/sites-available/default /etc/nginx/sites-available/default.backup

# 创建新的Nginx配置
cat > /etc/nginx/sites-available/default << 'EOF'
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
EOF

# 测试Nginx配置
echo "🔍 测试Nginx配置..."
if nginx -t; then
    echo "✅ Nginx配置测试通过"
else
    echo "❌ Nginx配置测试失败"
    exit 1
fi

# 重启Nginx
systemctl restart nginx

# 第七步：验证部署
echo "✅ 验证部署结果..."

# 检查Nginx状态
if systemctl is-active --quiet nginx; then
    echo "✅ Nginx服务运行正常"
else
    echo "❌ Nginx服务异常"
    exit 1
fi

# 检查网站文件
if [ -f "/var/www/html/index.html" ]; then
    echo "✅ 网站文件部署成功"
else
    echo "❌ 网站文件部署失败"
    exit 1
fi

# 测试本地访问
if curl -s -o /dev/null -w "%{http_code}" http://localhost | grep -q "200"; then
    echo "✅ 网站本地访问测试通过"
else
    echo "⚠️ 网站本地访问测试失败，请检查配置"
fi

echo "========================================"
echo "🎉 部署完成！"
echo "🔗 网站访问地址：http://47.79.42.150"
echo "📊 部署信息："
echo "   - 网站根目录：/var/www/html/"
echo "   - Nginx配置：/etc/nginx/sites-available/default"
echo "   - 错误日志：/var/log/nginx/error.log"
echo "   - 访问日志：/var/log/nginx/access.log"
echo "========================================"

# 显示部署的文件列表
echo "📁 部署的文件列表："
ls -la /var/www/html/

echo "✨ 成都师范学院农业数字化转型促进中心网站部署成功！"