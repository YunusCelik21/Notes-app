# Multi-staged Dockerfile for client-side

# Build stage 
FROM node:22-alpine3.19 as build

# Set the working directory in the image
WORKDIR /usr/src/app

# Copy the package files earlier to prevent invalidating the cache in COPY instructions
COPY package*.json .

# npm ci (clean install) to install specific versions from package-lock.json file
# --only=production to ignore dev dependencies
RUN npm ci --only=production --unsafe-perm=true --allow-root

COPY  . .

RUN npm run build

# Second stage of the Dockerfile, this will be the actual image

FROM node:22-alpine3.19

WORKDIR /usr/src/app

# Copy the builded app 
COPY --from=build /usr/src/app/build /usr/src/app/build

# Documentation for the end user , doesn't actually expose
EXPOSE 3000

RUN npm install -g serve 

# Run the server as defualt command
CMD serve -s build