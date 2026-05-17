#!/bin/bash

# --- Disk Cleanup Script for macOS Developers ---

echo "🚀 Starting disk cleanup..."
BEFORE=$(df -h / | awk 'NR==2 {print $4}')

# 1. Clear General Caches (Safe)
echo "📂 Clearing System Caches..."
rm -rf ~/Library/Caches/* 2>/dev/null

# 2. Clear Xcode Data (Safe)
echo "🛠 Clearing Xcode Derived Data & Archives..."
rm -rf ~/Library/Developer/Xcode/DerivedData/* 2>/dev/null
rm -rf ~/Library/Developer/Xcode/Archives/* 2>/dev/null

# 3. Clear iOS Simulators (Reclaims ~10GB+)
echo "📱 Resetting iOS Simulators..."
rm -rf ~/Library/Developer/CoreSimulator/Devices/* 2>/dev/null

# 4. Clear Android/Gradle Caches (Reclaims ~12GB+)
echo "🤖 Clearing Gradle Caches..."
rm -rf ~/.gradle/caches/* 2>/dev/null

# 5. Clear NPM Cache
echo "📦 Clearing NPM Cache..."
npm cache clean --force 2>/dev/null

# 6. Clear Docker Data (The big one)
if [ -f ~/Library/Containers/com.docker.docker/Data/vms/0/data/Docker.raw ]; then
    echo "🐳 Removing Docker Disk Image (Large)..."
    rm -f ~/Library/Containers/com.docker.docker/Data/vms/0/data/Docker.raw 2>/dev/null
fi

AFTER=$(df -h / | awk 'NR==2 {print $4}')

echo "---------------------------------------"
echo "✨ Cleanup Complete!"
echo "📊 Space Before: $BEFORE"
echo "📊 Space After : $AFTER"
echo "---------------------------------------"
