FROM nginx:1.23.4 as base
COPY nginx.conf /etc/nginx/nginx.conf
COPY conf.d/ /etc/nginx/conf.d
COPY html /usr/share/nginx/html

RUN mkdir /certs
COPY certs /certs
