# Dockerfile for Android Production Builds
# This is a placeholder for future production builds

# Base image with Android SDK and Node.js
FROM node:20-bullseye AS base

# Install Android SDK dependencies
RUN apt-get update && apt-get install -y \
    openjdk-17-jdk \
    wget \
    unzip \
    && rm -rf /var/lib/apt/lists/*

# Set environment variables for Android SDK
ENV ANDROID_HOME=/opt/android-sdk
ENV PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools

# TODO: Install Android SDK
# TODO: Install required Android build tools
# TODO: Accept Android licenses

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy workspace files
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./
COPY apps/mobile ./apps/mobile
COPY packages ./packages

# Install dependencies
RUN pnpm install --frozen-lockfile

# Build shared packages
RUN pnpm --filter "@primq/*" build

# Build Android APK/AAB
WORKDIR /app/apps/mobile
# TODO: Add Gradle build commands
# RUN cd android && ./gradlew assembleRelease

# Output will be in android/app/build/outputs/
