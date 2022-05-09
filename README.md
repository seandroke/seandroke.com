# seandroke.com - A Personal & Professional Portfolio

## Project Description
<a href="https://seandroke.com" target="_blank">https://seandroke.com</a>
<br /><br />
This repository reflects work done to build my professional website and portfolio. It has gone through a number of iterations over the past few years, with various feratures and additions being made to further optimize the workflow and showcase skills I've learned along the way.
<br /><br />
The core technology stack behind the application is a React.js front end user interface connected with a Spring Boot back end API via an Nginx reverse proxy. All data is stored as a JSON documnent within the repository and is loaded into a MongoDB NoSQL database using a provided seeder script. The application is fully dockerized both for production, via independent Dockerfile's, and development, via a Docker-Compose sequence.
<br /><br />
The application is hosted by AWS via a Lightsail Ubuntu 20.04 instance. This instance builds and maintains a network of individual docker containers for the front end, back end, database, and reverse proxy. For security reasons, the NGINX reverse proxy SSL configuration has been omitted from this public repository.
<br /><br />

## Local Development Usage
1. Clone the repository: `git clone https://github.com/seandroke/seandroke.com.git`
2. Access the repository: `cd seandroke.com/`
3. Run the docker compose sequence: `docker-compose up -d`
4. Run the database seeder: `docker exec -u root db mongo seeder.js`
5. Access the application: `http://localhost:8080/`


## Production Usage
<i>NOTE: Will require further adaptations to the nginx.conf found in the server/ directory</i>
1. Clone the repository `git clone https://github.com/seandroke/seandroke.com.git`
2. Access the repository `cd seandroke.com/`
3. Run the production script: `sh prod.sh`
4. Access the application: `https://seandroke.com/`
<br /><br />

## Project Timeline
<strong>June 2020</strong>
- React.js Application completed.
- Site serves only static content, no back end web server.
- Deployed to Bitnami Node.JS Lightsail Instance.
<!-- -->
<strong>February 2021</strong>
- Static content modifications completed.
- Node package vulnerabilities resolved.
- Repository cleanup.
<!-- -->
<Strong>May 2022</Strong>
- Spring Boot Application completed.
- MongoDB Application completed.
- NGINX Reverse Proxy Application completed.
- Services containerized using Docker.
- Lightsail instance upgraded to account for increased compute requirements.
- Lightsail instance changed to Ubuntu 20.04 for expanded compatability.
<br /><br />

## Known Limitations
The system design of this application is not presently scalable, due to project budget constraints. There is only one running entity of each containerized service and the network runs exclusively on one machine. As such, the application is relatively fault tolerant. Should one of the containerized services fail, the application will fail. I'll provide possible optimization strategies below.
<br /><br />
An initial, relatively basic strategy for improving on existing system design would be to add a Docker container service to handle application health, metrics, and provide relevant alerts to site administrators. A technology like Prometheus would provide an excellent suite of tools to help increase fault tolerance. It will not however solve for mutual service exclusivity or provide a means by which the application can horizontally or vertically scale.
<br /><br />
A more significant optimization to help solve for existing limitations would be to create compute instances for each of the presently containerized services. This ensures mutual exclusivity of each application component, and provides a more explicit means of efficiently isolating sources of application failure. One could create more capable EC2 instances for the front end, back end, and reverse proxy server, and create a persistent Amazon Document DB database. These all could be packaged under a single VPC and equipped with more advanced logging and activity monitoring. This handles mutual service exclusivity and provides a means by which application components can horizontally scale, but does not address vertical scalability. Additionally, this solution would require a significant increase in infrastructure cost.
<br /><br />
The optimal strategy to solve for existing limitations is to levrage AWS EKS. This elastic compute offering allows you to leverage Kubernetes orchestration in application deployment. Each service can then be individually packaged and deployed as part of clusters that can vertically scale to meet application demands. Combining this strategy with some of those above, you can create a Prometheus service to further track application health, implement redundant document database instances, and implement capable load balancers to distribute resource traffic appropriately. This optimization solves for all present limitaitons, but obviously incurs a very significant increase in cost, and further code to automate kubernetes deployment.
<br /><br />
All told, these optimizations are outside the scope of this project, as application traffic is not expected to exceed normal, and budget does not presently allow for more advanced implementations, but hopefully these optimizations help explain where you can take the project from here :)
