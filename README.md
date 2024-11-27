# Front-End

docker-compose down
docker-compose up --build
docker network inspect app-network


docker network create app-network

docker-compose up --no-recreate

docker network connect app-network <backend-container-id>
docker network connect app-network <frontend-container-id>



