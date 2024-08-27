# Base image
FROM node:22-alpine3.19

# Set (create) the working directory
WORKDIR /usr/src/app

# Production mode
ENV NODE_ENV=production

# Copy the package files earlier to prevent invalidating the cache in COPY instructions 
COPY package*.json .

# npm ci (clean install) to install specific versions from package-lock.json file
# --only=production to ignore dev dependencies
RUN npm ci --only=production

# non-root user for security
USER node

# chown flag to change the owner of the files
COPY --chown=node:node . .

# Documentation for the end user , doesn't actually expose
EXPOSE 4000

# Run the server as defualt command
CMD ["npm", "start"]