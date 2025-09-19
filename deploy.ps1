# VPS Auto Deploy Script
# Server Information
$serverIP = "47.79.42.150"
$username = "root"
$password = "b2r9M19zoW!L)V"

Write-Host "Starting VPS deployment..." -ForegroundColor Cyan

# Create deployment package
Write-Host "Creating deployment package..." -ForegroundColor Yellow
if (Test-Path "website.zip") {
    Remove-Item "website.zip" -Force
}
Compress-Archive -Path "dist\*" -DestinationPath "website.zip" -Force
Write-Host "Deployment package created: website.zip" -ForegroundColor Green

# Check if we can use SSH (requires manual setup)
Write-Host "Note: This script requires SSH client or PuTTY to be installed" -ForegroundColor Yellow
Write-Host "Please follow these manual steps to complete deployment:" -ForegroundColor Cyan

Write-Host "`n=== Manual Deployment Steps ===" -ForegroundColor White
Write-Host "1. Upload website.zip to server using WinSCP or similar tool" -ForegroundColor Yellow
Write-Host "   Server: $serverIP" -ForegroundColor Gray
Write-Host "   Username: $username" -ForegroundColor Gray
Write-Host "   Upload to: /root/" -ForegroundColor Gray

Write-Host "`n2. Connect to server via SSH and run these commands:" -ForegroundColor Yellow
Write-Host "   ssh root@$serverIP" -ForegroundColor Gray

$commands = @(
    "apt update",
    "apt upgrade -y",
    "apt install nginx unzip -y",
    "systemctl start nginx",
    "systemctl enable nginx",
    "rm -rf /var/www/html/*",
    "cd /root",
    "unzip -o website.zip -d /var/www/html/",
    "chown -R www-data:www-data /var/www/html/",
    "chmod -R 755 /var/www/html/"
)

foreach ($cmd in $commands) {
    Write-Host "   $cmd" -ForegroundColor Gray
}

Write-Host "`n3. Configure Nginx:" -ForegroundColor Yellow
Write-Host "   nano /etc/nginx/sites-available/default" -ForegroundColor Gray

$nginxConfig = @'
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
}
'@

Write-Host "`nNginx Configuration:" -ForegroundColor Cyan
Write-Host $nginxConfig -ForegroundColor Gray

Write-Host "`n4. Restart services:" -ForegroundColor Yellow
Write-Host "   nginx -t" -ForegroundColor Gray
Write-Host "   systemctl restart nginx" -ForegroundColor Gray
Write-Host "   ufw allow 80" -ForegroundColor Gray
Write-Host "   ufw allow 22" -ForegroundColor Gray

Write-Host "`n5. Test the website:" -ForegroundColor Yellow
Write-Host "   Visit: http://$serverIP" -ForegroundColor Green

Write-Host "`nDeployment package is ready!" -ForegroundColor Green
Write-Host "File created: website.zip ($('{0:N2}' -f ((Get-Item 'website.zip').Length / 1KB)) KB)" -ForegroundColor Cyan