FROM node:20 AS build-stage
WORKDIR /usr/src/app
COPY . .
RUN npm ci
RUN npm test
ENV VITE_BACKEND_URL=http://localhost:3000
RUN npm run build

FROM node:20
WORKDIR /usr/src/app
COPY --from=build-stage /usr/src/app/dist .
RUN npm install -g serve
CMD ["serve", "-s", "dist", "-l", "3000"]