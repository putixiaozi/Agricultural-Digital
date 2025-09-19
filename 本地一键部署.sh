#!/usr/bin/env bash
# 本地一键部署脚本（在您的Mac上运行），自动：
# 1) 建立SSH控制连接（只需输入一次密码）
# 2) 上传 website.zip 与 服务器部署脚本.sh 到 /root/
# 3) 远程执行 服务器部署脚本.sh 完成Nginx安装与网站部署
set -euo pipefail

IP="47.79.42.150"
USER="root"
REMOTE_DIR="/root"
CONTROL_PATH="$HOME/.ssh/cm-%r@%h:%p"
LOCAL_PROJECT_DIR="/Volumes/NN/网站"
ZIP_FILE="$LOCAL_PROJECT_DIR/website.zip"
REMOTE_SCRIPT_LOCAL="$LOCAL_PROJECT_DIR/服务器部署脚本.sh"
REMOTE_SCRIPT_REMOTE="$REMOTE_DIR/服务器部署脚本.sh"

cecho() { echo -e "\033[32m$*\033[0m"; }
wecho() { echo -e "\033[33m$*\033[0m"; }
errecho() { echo -e "\033[31m$*\033[0m"; }

# 0) 前置检查
if [[ ! -f "$ZIP_FILE" ]]; then
  errecho "未找到部署包: $ZIP_FILE"
  exit 1
fi
if [[ ! -f "$REMOTE_SCRIPT_LOCAL" ]]; then
  errecho "未找到远程部署脚本: $REMOTE_SCRIPT_LOCAL"
  exit 1
fi

wecho "[1/5] 建立SSH控制连接（首次会提示输入一次服务器密码）..."
ssh -o ControlMaster=auto \
    -o ControlPersist=600 \
    -o ControlPath="$CONTROL_PATH" \
    -o StrictHostKeyChecking=accept-new \
    "$USER@$IP" "echo '[OK] 控制连接已建立'"

wecho "[2/5] 上传部署包 website.zip 到 $USER@$IP:$REMOTE_DIR ..."
scp -o ControlPath="$CONTROL_PATH" \
    -o StrictHostKeyChecking=accept-new \
    "$ZIP_FILE" "$USER@$IP:$REMOTE_DIR/"

wecho "[3/5] 上传远程部署脚本到 $USER@$IP:$REMOTE_DIR ..."
scp -o ControlPath="$CONTROL_PATH" \
    -o StrictHostKeyChecking=accept-new \
    "$REMOTE_SCRIPT_LOCAL" "$USER@$IP:$REMOTE_DIR/"

wecho "[4/5] 赋予执行权限并执行远程部署脚本...（该步骤会在服务器上安装Nginx并部署网站）"
ssh -o ControlPath="$CONTROL_PATH" "$USER@$IP" \
  "chmod +x '$REMOTE_SCRIPT_REMOTE' && '$REMOTE_SCRIPT_REMOTE'"

wecho "[5/5] 关闭SSH控制连接..."
ssh -O exit -o ControlPath="$CONTROL_PATH" "$USER@$IP" || true

cecho "\n🎉 部署流程已执行完毕！请在浏览器访问: http://$IP\n"
cecho "如需重新部署，只需更新本地 website.zip 后再次运行本脚本即可。"