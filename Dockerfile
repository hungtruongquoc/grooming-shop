# Use the official Node.js image as the base image
FROM node:20-alpine
ARG FONTAWESOME_PACKAGE_TOKEN
ENV FONTAWESOME_PACKAGE_TOKEN=$FONTAWESOME_PACKAGE_TOKEN

# Set build arguments for environment variables
ARG VITE_API_URL
ARG VITE_API_KEY

# Set environment variables from build arguments
ENV VITE_API_URL=$VITE_API_URL
ENV VITE_API_KEY=$VITE_API_KEY

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./
COPY .npmrc ./

# Create a .env file with the environment variables
RUN echo "VITE_API_URL=$VITE_API_URL" > .env
RUN echo "VITE_API_KEY=$VITE_API_KEY" >> .env

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Tailwind CSS
RUN npm run build:css

# Build the Nuxt.js application
RUN npm run build

# Install serve globally
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["serve", "-s", "dist/spa"]
