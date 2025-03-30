FROM node:20
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./

# We won't run npm install during build - we'll do it at runtime
# This helps avoid the platform-specific rollup issue

# Command to start the app
CMD ["sh", "-c", "npm install && npm run dev -- --host 0.0.0.0"]