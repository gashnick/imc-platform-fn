# Stage 1: Build Stage
FROM node:22-alpine as base

# Set the working directory
WORKDIR /app

# Copy and install dependencies first
COPY package.json package-lock.json ./

RUN npm install

# Copy source code
COPY . .

# Build the application (TypeScript or React app)
RUN npm run build

# Expose the port the application runs on
EXPOSE 3000

# Command to start the application
CMD npm run dev
