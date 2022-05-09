docker network create seandrokecom
docker build -f database/Dockerfile -t seandrokecom_database database/.
docker build -f backend/Dockerfile -t seandrokecom_backend backend/.
docker build -f frontend/Dockerfile -t seandrokecom_frontend frontend/.
docker build -f server/Dockerfile -t seandrokecom_server server/.

docker run -d -p 27017:27017 -v db-data:/data/db --network=seandrokecom --name=db seandrokecom_database
docker run -d --network=seandrokecom --name=backend seandrokecom_backend
docker run -d --network=seandrokecom --name=frontend seandrokecom_frontend
docker run -d -p 8080:80 --network=seandrokecom --name=server seandrokecom_server