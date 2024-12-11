const express = require('express');
const SwaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path'); 

const app = express();
const port = 3000;

// Load the Swagger file
const swaggerDocument = YAML.load('./swagger.yaml');

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Route for served from index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Swagger route
app.use('/api-docs', SwaggerUI.serve, SwaggerUI.setup(swaggerDocument));

app.listen(port, () => {
  // Print URL in the console
  console.log(`Server running at http://localhost:${port}`);
  console.log(`Access Swagger documentation at http://localhost:${port}/api-docs`);
});

