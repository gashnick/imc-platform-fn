# Stage 1: Build Stage
FROM node:20-alpine AS build

# Set the working directory
WORKDIR /app

# Copy and install dependencies first
COPY package.json package-lock.json ./
RUN npm install

# Copy source code
COPY . .

# Build the application (TypeScript or React app)
RUN npm run build

# Stage 2: Production Stage
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy only necessary files from the build stage
COPY --from=build /app/dist ./dist
COPY package.json package-lock.json ./

# Install only production dependencies
RUN npm install --production

# Expose the port the application runs on
EXPOSE 3000

# Command to start the application
CMD ["npm", "start"]
