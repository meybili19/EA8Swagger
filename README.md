# EA8Swagger
 
## Docker
   - docker network create swagger-network
   - docker build -t meybili/swagger .
   - docker run --name swagger-container --network swagger-network -p 3000:3000 meybili/swagger
