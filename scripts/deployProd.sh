set -e

eval $(docker-machine env admock-prod-1)

printf "Stopping production Docker container orchestration...\n"
docker-compose down

printf "Building and starting production Docker container orchestration...\n"
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build
