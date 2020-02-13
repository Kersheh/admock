set -e

printf "Closing previous admock container...\n"
docker stop admock >/dev/null 2>&1
docker rm admock >/dev/null 2>&1

printf "Starting admock container...\n"
docker container run -p 8080:80 -p 4433:443 --name admock --detach admock:latest
