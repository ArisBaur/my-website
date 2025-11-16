#/bin/bash
docker container stop my_website
docker container rm my_website
docker build -t my_website .
docker run --name my_website -p 8080:8080 -d my_website:latest