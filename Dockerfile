# Use the official Node.js image as the base image
FROM node:20-alpine
ARG FONTAWESOME_PACKAGE_TOKEN
ENV FONTAWESOME_PACKAGE_TOKEN=$FONTAWESOME_PACKAGE_TOKEN

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./
COPY .npmrc ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Nuxt.js application
RUN npm run build

# Install serve globally
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["serve", "-s", "dist"]
