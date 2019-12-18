printf "Closing previous admock container...\n"
docker rm admock
printf "Starting admock container...\n"
docker container run --publish 8080:80 --name admock --detach admock:latest
