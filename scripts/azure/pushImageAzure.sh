AZURE_NAME=admock

DOCKER_USER=admockregistry
DOCKER_PASS=$(cat $(dirname "$0")/docker-azure-pass.txt)
DOCKER_REG=admockregistry.azurecr.io
DOCKER_REG_REPO=$DOCKER_REG/admock/client

printf "Tagging $AZURE_NAME image..."
docker tag $AZURE_NAME $DOCKER_REG_REPO

printf "Logging into $DOCKER_REG..."
echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin $DOCKER_REG

printf "Pushing $AZURE_NAME image to $DOCKER_REG_REPO..."
docker push $DOCKER_REG_REPO
