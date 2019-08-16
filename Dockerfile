FROM nginx:1.17.0
COPY dist/recetas/* /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 8080 80