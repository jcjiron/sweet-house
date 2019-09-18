FROM nginx:1.17.0
RUN rm -rf /usr/share/nginx/html/*
COPY dist/recetas/* /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 8080 80
