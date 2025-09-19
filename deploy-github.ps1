# GitHub Pages 部署脚本
# 成都师范大学农业数字化转型推广中心网站

Write-Host "=== GitHub Pages 部署脚本 ===" -ForegroundColor Green
Write-Host ""

# 检查是否在正确的目录
if (-not (Test-Path "package.json")) {
    Write-Host "错误：请在项目根目录运行此脚本" -ForegroundColor Red
    exit 1
}

# 构建项目
Write-Host "1. 构建项目..." -ForegroundColor Yellow
try {
    pnpm run build
    Write-Host "✅ 项目构建成功" -ForegroundColor Green
} catch {
    Write-Host "❌ 项目构建失败" -ForegroundColor Red
    exit 1
}

# 检查构建输出
if (-not (Test-Path "dist")) {
    Write-Host "❌ 构建输出目录不存在" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "2. 准备部署文件..." -ForegroundColor Yellow

# 创建部署包
$deployPath = "github-pages-deploy"
if (Test-Path $deployPath) {
    Remove-Item $deployPath -Recurse -Force
}
New-Item -ItemType Directory -Path $deployPath | Out-Null

# 复制构建文件
Copy-Item "dist\*" $deployPath -Recurse

# 创建 .nojekyll 文件（GitHub Pages需要）
New-Item -ItemType File -Path "$deployPath\.nojekyll" | Out-Null

Write-Host "✅ 部署文件准备完成" -ForegroundColor Green
Write-Host ""

Write-Host "=== 部署说明 ===" -ForegroundColor Cyan
Write-Host "1. 登录GitHub并创建新仓库 'agricultural-center'" -ForegroundColor White
Write-Host "2. 将 '$deployPath' 文件夹中的所有文件上传到仓库" -ForegroundColor White
Write-Host "3. 在仓库设置中启用GitHub Pages功能" -ForegroundColor White
Write-Host "4. 选择 'Deploy from a branch' -> 'main' -> '/ (root)'" -ForegroundColor White
Write-Host ""
Write-Host "预期访问地址：https://你的用户名.github.io/agricultural-center/" -ForegroundColor Green
Write-Host ""

# 显示文件列表
Write-Host "部署文件列表：" -ForegroundColor Yellow
Get-ChildItem $deployPath -Recurse | ForEach-Object {
    $relativePath = $_.FullName.Replace((Get-Location).Path + "\$deployPath\", "")
    Write-Host "  $relativePath" -ForegroundColor Gray
}

Write-Host ""
Write-Host "部署准备完成！请按照上述说明手动上传到GitHub" -ForegroundColor Green
Write-Host "详细说明请查看 GitHub部署指南.md 文件" -ForegroundColor Cyan