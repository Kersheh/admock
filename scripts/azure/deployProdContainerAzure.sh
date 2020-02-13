AZURE_RESOURCE_GROUP=AdmockGroup
AZURE_NAME=admock

DOCKER_USER=admockregistry
DOCKER_PASS=$(cat $(dirname "$0")/docker-azure-pass.txt)
DOCKER_REG=admockregistry.azurecr.io
DOCKER_REG_REPO=$DOCKER_REG/admock/client:latest

HTTP_PORT=80
HTTPS_PORT=443

printf "Deploying $DOCKER_REG_REPO to ports $HTTP_PORT $HTTPS_PORT"
az container create --resource-group $AZURE_RESOURCE_GROUP --registry-username $DOCKER_USER --registry-password $DOCKER_PASS --name $AZURE_NAME --image $DOCKER_REG_REPO --dns-name-label $AZURE_NAME --ports $HTTP_PORT $HTTPS_PORT
