printf "Closing previous admock container...\n"
docker rm admock
printf "Starting admock container...\n"
docker container run -p 8080:80 -p 4433:443 --name admock --detach admock:latest
