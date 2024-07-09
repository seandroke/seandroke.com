docker network create seandrokecom
docker build --no-cache -f database/Dockerfile -t seandrokecom_database database/.
docker build --no-cache -f backend/Dockerfile -t seandrokecom_backend backend/.
docker build --no-cache -f frontend/Dockerfile -t seandrokecom_frontend frontend/.
docker build --no-cache -f server/Dockerfile -t seandrokecom_server server/.

docker run -d -p 27017:27017 -v db-data:/data/db --restart=always --network=seandrokecom --name=db seandrokecom_database
docker run -d --restart=always --network=seandrokecom --name=backend seandrokecom_backend
docker run -d --restart=always --network=seandrokecom --name=frontend seandrokecom_frontend
docker run -d -p 8080:80 --restart=always --network=seandrokecom --name=server seandrokecom_server