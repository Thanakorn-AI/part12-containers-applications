FROM node:20-alpine
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy application code
COPY . .

# Set production environment
ENV NODE_ENV=production

# Expose the port
EXPOSE 3000

# Start the application
CMD ["node", "./bin/www"]