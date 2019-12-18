[ -z "$1" ] && echo "No version input (i.e. latest or 0.0.1)" && exit
npm run build:prod &&
docker image build -t admock:$1 .
