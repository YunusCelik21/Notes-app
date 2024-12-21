# Multi-staged Dockerfile for client-side

# Build stage 
FROM node:22-alpine3.19 

# Set the working directory in the image
WORKDIR /usr/src/app

# Copy the package files earlier to prevent invalidating the cache in COPY instructions
COPY package*.json .

# npm ci (clean install) to install specific versions from package-lock.json file
# --only=production to ignore dev dependencies
RUN npm ci --only=production --unsafe-perm=true --allow-root

# chown flag to change the owner of the files
COPY --chown=node:node . .

# Documentation for the end user , doesn't actually expose
EXPOSE 3000

# Run the client as defualt command
CMD ["npm", "start"]