FROM node:20.9.0-alpine3.18
WORKDIR /app
COPY package.json .
ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
  then npm install; \
  else npm install --only=production; \
  fi
COPY . ./
ENV PORT 3000
EXPOSE $PORT

WORKDIR /app/client
# RUN npm run build
# RUN ["npm", "run", "build"]

# RUN ["npm", "--prefix", "../client", "run", "build"]
WORKDIR /app
CMD ["npm", "start"]
# command: sh -c "npm --prefix ./client run build && npm start"