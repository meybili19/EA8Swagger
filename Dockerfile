# Use a Node.js base image
FROM node:16

# Create and set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files (if it exists)
COPY package*.json ./

# Install the Node.js dependencies
RUN npm install

# Copy the rest of your project files into the container
COPY . .

# Expose the port the app will be running on
EXPOSE 3000

# Command to run the app
CMD ["node", "server.js"]
