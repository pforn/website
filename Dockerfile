# Dockerfile for building and deploying a Node.js web application with Nginx

# Stage 1: Build the application
FROM node:16-alpine as build
WORKDIR /website
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]