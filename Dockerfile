# Use Node.js 20 Alpine image as the base
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy only the package files to leverage Docker caching for dependencies
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the application 
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Command to start the application
CMD ["npm", "start"]
