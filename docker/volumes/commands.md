docker run -d --name nginx -p 8080:80 -v ~/Projects/code-education-fullcycle-2/docker/volumes/html/:/usr/share/nginx/html nginx
docker run -d --name nginx -p 8080:80 --mount type=bind,source="$(pwd)"/docker/volumes/html,target=/usr/share/nginx/html nginx
docker run --name nginx -d --mount type=volume,source="$(pwd)"/volumes,target=/app nginx