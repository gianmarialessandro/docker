# docker commands

docker run [images-name]

docker pull [images-name]

docker start [images-name/id]

docker stop [images-name/id]

docker run -d (detached mod)

docker run - d -p6000:6794 binding first host  port to docker port

docker image

docker id [images-id]

docker ps (attivi)

docker ps -a (tutti)

docker logs [images-id]

docker network ls  

docker network create name-of-network

docker run -p 27017:27017 -d -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=password --name mongodb --net mongo-network mongo  
^---- run image on that port in detach mode with[Environment Variables](from docker image page) give a name select network  

[for thi example see https://hub.docker.com/_/mongo]  
---  
 
bash-3.2$ docker run -d \
-p 8081:8081 \
-e ME_CONFIG_MONGODB_ADMINUSERNAME=admin \
-e ME_CONFIG_MONGODB_ADMINPASSWORD=password \
--net mongo-network \
--name mongo-express \
-e ME_CONFIG_MONGODB_SERVER=mongodb \
mongo-express

or  

docker run --network mongo-network -e ME_CONFIG_MONGODB_SERVER=mongodb -p 8081:8081 mongo-express  
--- 

or 

# DOCKER COMPOSE

docker-compose -f mongo.yaml up


# DELETE
docker rm [containter]
docker rmi [imagesname]


# Build a Docker Image 
docker build -t docker-app:1.0 .

## run image 
docker run docker-app:1.0

docker ps
docker exec -it e7be652391b7 /bin/bash
ls
env