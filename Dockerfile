FROM nginx:stable-alpine

COPY dist/admock /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/nginx.conf
