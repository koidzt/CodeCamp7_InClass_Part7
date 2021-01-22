FROM node:alpine

WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM nginx
COPY --from=0 /app/build /usr/share/nginx/html
# docker run -dit -p 3000:80 --rm --name my_web
