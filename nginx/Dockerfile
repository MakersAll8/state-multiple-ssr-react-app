FROM nginx:1.23.4 as base
COPY nginx.conf /etc/nginx/nginx.conf
COPY conf.d/ /etc/nginx/conf.d

RUN mkdir /certs
COPY certs /certs
